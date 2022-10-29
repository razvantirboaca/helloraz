const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');

module.exports = function  (eleventyConfig) {

    // Plugins

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    });

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, transforms[transformName])
    });

    // Asset Watch Targets
    eleventyConfig.addWatchTarget("./src/assets/");

    // Markdown Parsing

    // Pass-through files
    eleventyConfig.addPassthroughCopy("./src/assets/scripts/");
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.addPassthroughCopy("./src/manifest.json");
    eleventyConfig.addPassthroughCopy("./old/portfolio/");

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