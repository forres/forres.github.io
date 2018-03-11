export default function(config, env, helpers) {
  postCss(config, helpers)
}

const postCss = (config, helpers) => {
  if (!config) {
    throw Error('No config passed')
  }
  if (!helpers) {
    throw Error('You helpers passed')
  }
  const postcssLoader = helpers.getLoadersByName(config, 'postcss-loader')
  postcssLoader.forEach(({ loader }) => delete loader.options)
}