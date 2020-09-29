


module.exports = {
    plugins: {
        autoprefixer: {
            /* PostCSS plugin to parse CSS and add vendor prefixes to CSS rules */
            /* 配置文档链接：https://github.com/postcss/autoprefixer#options */
            overrideBrowserslist: [
                'last 2 versions'
            ]
        },
        'postcss-px-to-viewport': {
            /* 将px单位转换为视口单位的 (vw, vh, vmin, vmax) */
            /* 配置文档链接：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0 */
            viewportWidth: 375,
            viewportUnit: 'vw',
            unitPrecision: 3,
            minPixelValue: 0.1,
            mediaQuery: false,
        },
        'postcss-write-svg': {
            /* 在retina屏绘制1px细线 */
            /* 配置文档链接：https://github.com/jonathantneal/postcss-write-svg#options */
        },
    }
  }