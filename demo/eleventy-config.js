const syntaxHighlight = require("../.eleventy.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
    showLineNumbers: false,
    numberingBase: 1
  });

  eleventyConfig.setTemplateFormats("njk,liquid,md,css");
};
