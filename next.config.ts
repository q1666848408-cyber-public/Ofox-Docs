import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // Showcase only — full config in ofoxai/ofox-docs
})

export default withNextra({
  i18n: {
    locales: ['zh', 'en', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'zh-TW'],
    defaultLocale: 'zh',
  },
})
