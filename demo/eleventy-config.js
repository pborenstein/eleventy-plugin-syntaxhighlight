const syntaxHighlight = require("../.eleventy.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: true,
    showLineNumbers: true,
    numberingBase: 1
  });

  eleventyConfig.setTemplateFormats("njk,liquid,md,css");
};
