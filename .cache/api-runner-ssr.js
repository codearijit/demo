var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-use-dark-mode',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/node_modules/gatsby-plugin-use-dark-mode/gatsby-ssr'),
      options: {"plugins":[],"classNameDark":"dark-mode","classNameLight":"light-mode","storageKey":"darkMode","minify":true},
    },{
      name: 'gatsby-plugin-layout',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"C:\\Users\\Administrator\\Desktop\\NEW\\gatsby-theme-newrelic\\demo\\src\\layouts\\index.js"},
    },{
      name: 'gatsby-plugin-newrelic',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/node_modules/gatsby-plugin-newrelic/gatsby-ssr'),
      options: {"plugins":[],"configs":{"development":{"instrumentationType":"proAndSPA","accountId":"10956800","trustKey":"1","agentID":"35094665","licenseKey":"NRJS-649173eb1a7b28cd6ab","applicationID":"35094665","beacon":"staging-bam.nr-data.net","errorBeacon":"staging-bam.nr-data.net"}}},
    },{
      name: '@newrelic/gatsby-theme-newrelic',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/packages/gatsby-theme-newrelic/gatsby-ssr'),
      options: {"plugins":[],"i18n":{"translationsPath":"C:\\Users\\Administrator\\Desktop\\NEW\\gatsby-theme-newrelic\\demo/src/i18n/translations","additionalLocales":["jp","kr"]},"layout":{"component":"C:\\Users\\Administrator\\Desktop\\NEW\\gatsby-theme-newrelic\\demo\\src\\layouts\\index.js","contentPadding":"2rem","maxWidth":"1480px","mobileBreakpoint":"760px"},"newrelic":{"configs":{"development":{"instrumentationType":"proAndSPA","accountId":"10956800","trustKey":"1","agentID":"35094665","licenseKey":"NRJS-649173eb1a7b28cd6ab","applicationID":"35094665","beacon":"staging-bam.nr-data.net","errorBeacon":"staging-bam.nr-data.net"}}},"tessen":{"tessenVersion":"1.14.0","product":"THEME","subproduct":"TTHEME","segmentWriteKey":"oMdv2YZCnzuC1iTVi9iCnFn6F9ycYb5v","trackPageViews":true,"pageView":{"eventName":"pageView","category":"ThemePageView"}},"splitio":{"features":{"deven_signupbutton_text":{"treatment":"start_now","config":"{ \"text\": \"Start now\" }"}},"core":{"authorizationKey":"localhost"},"debug":false}},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('C:/Users/Administrator/Desktop/NEW/gatsby-theme-newrelic/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-autolink-headers","options":{"icon":"<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>"}}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Users\\Administrator\\Desktop\\NEW\\gatsby-theme-newrelic\\demo"},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
