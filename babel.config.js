module.exports = {
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            },
            style: true
        }, 'vant']
    ]
}

