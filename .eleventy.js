const htmlmin = require('html-minifier');
const CleanCSS = require('clean-css');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Add date filter
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add current date filter
  eleventyConfig.addFilter("currentDate", function() {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/New_York'
    });
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    if (process.env.NODE_ENV === 'production') {
      return new CleanCSS({}).minify(code).styles;
    }
    return code;
  });

  // Optimize and resize images
  eleventyConfig.addTransform("optimizeImages", async function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".jpg") || outputPath.endsWith(".png")) {
      const optimizedBuffer = await sharp(content)
        .resize(1200, null, { withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toBuffer();
      return optimizedBuffer;
    }
    return content;
  });

  // Minify HTML in production
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (process.env.NODE_ENV === 'production' && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });

  // Copy the `styles` directory to the output
  eleventyConfig.addPassthroughCopy("src/styles");
  
  // Copy the `images` directory to the output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/styles/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}; 