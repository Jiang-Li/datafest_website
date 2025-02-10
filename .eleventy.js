module.exports = function(eleventyConfig) {
  // Add Git plugin
  const pluginGit = require("@11ty/eleventy-plugin-git");
  eleventyConfig.addPlugin(pluginGit, {
    commitMessage: true,
    commitDate: true,
    authors: true,
    modifiedDate: true
  });
  
  // Copy image files to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
}; 