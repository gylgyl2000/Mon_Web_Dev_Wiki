const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Mon wiki de développement web',
  tagline: 'HTML - CSS - JavaScript - Python',
  url: 'https://gylgyl2000.github.io',
  baseUrl: '/Mon_Web_Dev_Wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://monwikidevweb.la-loutre.fr/img/river-otter-silhouette.svg',
  organizationName: 'gylgyl2000', // Usually your GitHub org/user name.
  projectName: 'Mon_Web_Dev_Wiki', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/',
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      hideableSidebar: true,
      /* sidebarCollapsible: true, */
          
      navbar: {
        title: 'Mon Wiki Dev Web par LaLoutre',
        logo: {
          alt: 'Otter',
          src: 'https://monwikidevweb.la-loutre.fr/img/river-otter-silhouette.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'menu',
            position: 'right',
            label: 'Menu',
          },
          {
            type: 'doc',
            docId: 'Aide-memoire/menu',
            position: 'right',
            label: 'Aide-mémoire',
          },
          {
            type: 'doc',
            docId: 'Algorithmes/menu',
            position: 'right',
            label: 'Algorithmes',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/gylgyl2000/Mon_Web_Dev_Wiki',
            className: 'github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Menu',
                to: '/docs/menu',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gylgyl2000/Mon_Web_Dev_Wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mon Wiki Dev Web, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['v'],
      },
    }
});
