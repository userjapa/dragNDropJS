module.exports = {
    entry: __dirname + '/assets/js/run.js',
    output: {
        path: __dirname,
        filename: 'dragndrop.js',
        libraryTarget: 'var',
        library: 'DragNDrop'
    }
}