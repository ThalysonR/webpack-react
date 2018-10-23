const PostCSSFlexbugFixes = require('postcss-flexbugs-fixes');
const PostCSSPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getStyleLoaders = (cssOptions, preProcessor, prodConf) => {
  const loaders = [
    prodConf ? {
      loader: MiniCssExtractPlugin.loader,
      options: Object.assign(
        {},
        prodConf.shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined,
      ),
    } : require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          PostCSSFlexbugFixes,
          PostCSSPresetEnv({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
        sourceMap: prodConf ? prodConf.shouldUseSourceMap : false,
      },
    },
  ];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: prodConf ? prodConf.shouldUseSourceMap : false,
      },
    });
  }
  return loaders;
};

module.exports = getStyleLoaders;
