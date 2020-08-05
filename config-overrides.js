const { override,addBabelPlugins, fixBabelImports } = require('customize-cra');
module.exports = override(
    addBabelPlugins( // ⽀持装饰器
        [
            '@babel/plugin-proposal-decorators',
                {
                legacy: true
                }
        ],
        [
            '@babel/plugin-proposal-class-properties',
                {
                    loose: true
                }
            ]
        ),
fixBabelImports('import', {
libraryName: 'antd',
libraryDirectory: 'es',
style: 'css',
}),
);