module.exports = config => {
    // Watch CSS files for changes
      config.setBrowserSyncConfig({
        files: './src/css/**/*.css'
    });
    // passthrough for css & images
    config.addWatchTarget("./src/sass");
    config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy('./src/assets/img/');
  config.addPassthroughCopy('./src/assets/scripts/');
    // google fonts
    const eleventyGoogleFonts = require("eleventy-google-fonts");
  config.addPlugin(eleventyGoogleFonts);
  // fontawesome
  const { FontAwesomeIcon } = require("@campj/eleventy-fa-icons");
  config.addNunjucksShortcode("FontAwesomeIcon", FontAwesomeIcon);
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