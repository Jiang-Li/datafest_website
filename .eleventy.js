module.exports = function(eleventyConfig) {
  // Add date filter
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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