module.exports = function(eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("style.css");
    // Input Directory : src Output directory: _site
    eleventyConfig.addPassthroughCopy("src/js/main.js");
    eleventyConfig.addPassthroughCopy("src/assets/");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md','njk','html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};