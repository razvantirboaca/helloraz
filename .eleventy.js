const filters = require('./utils/filters.js');

module.exports = function  (eleventyConfig) {

    // Plugins

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    });

    // Asset Watch Targets
    eleventyConfig.addWatchTarget("./src/assets/");

    // Markdown Parsing

    // Pass-through files
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.addPassthroughCopy("./src/manifest.json");

    // Deep-Merge
    eleventyConfig.setDataDeepMerge(true);
    
    return {
        dir: {
            input: "src",
            output: "public",
            layouts: '_layouts',
        },
        templateFormats: [ "md", "njk", "html", ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    }
}