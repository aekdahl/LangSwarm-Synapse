module.exports = {
  onBrokenLinks: 'warn', // Change this to 'ignore' or 'error' if needed
  title: 'LangSwarm Docs',
  tagline: 'Documentation for LangSwarm',
  url: 'https://aekdahl.github.io',
  baseUrl: '/LangSwarm/',
  organizationName: 'aekdahl',
  projectName: 'LangSwarm',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: './docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'LangSwarm',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/getting-started', label: 'Docs', position: 'left' },
        { href: 'https://github.com/<your-username>/<repository-name>', label: 'GitHub', position: 'right' },
      ],
    },
  }
};
