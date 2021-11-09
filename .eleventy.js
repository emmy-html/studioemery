module.exports = config => {
    // passthrough for css & images
    config.addWatchTarget("./src/sass");
    config.addPassthroughCopy("./src/css");
    config.addPassthroughCopy('./src/img/');
    // google fonts
    const eleventyGoogleFonts = require("eleventy-google-fonts");
    module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyGoogleFonts);
    };
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'dist'
      }
    };
  };