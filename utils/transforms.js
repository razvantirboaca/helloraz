const htmlmin = require('html-minifier')

const shouldTransformHTML = (outputPath) =>
    outputPath &&
    outputPath.endsWith('.html')

process.setMaxListeners(Infinity)
module.exports = {
    htmlmin: function (content, outputPath) {
        if (shouldTransformHTML(outputPath)) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
        }
        return content
    }
}