import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'NaaVRE',
  tagline: 'Notebook as a Virtual Research Environment',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://qcdis.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/NaaVRE-website/',

  // GitHub pages deployment config.
  organizationName: 'QCDIS',
  projectName: 'NaaVRE',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/QCDIS/NaaVRE-website/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/QCDIS/NaaVRE-website/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'NaaVRE',
      logo: {
        alt: 'NaaVRE logo',
        src: 'img/logo-compact-light.svg',
        srcDark: 'img/logo-compact-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation'
        },
        {
          href: 'https://github.com/QCDIS/NaaVRE',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'About NaaVRE',
              href: '/docs/about'
            },
            {
              label: 'Getting started',
              href: '/docs/tutorials'
            },
            {
              label: 'The NaaVRE interface',
              href: '/docs/NaaVRE_Interface'
            }
          ]
        },
        {
          title: 'NaaVRE collaborative virtual labs',
          items: [
            {
              label: 'Open Lab',
              href: 'https://naavre.lifewatch.dev/vreapp/vlabs/openlab'
            },
            {
              label: 'Laserfarm',
              href: 'https://naavre.lifewatch.dev/vreapp/vlabs/laserfarm'
            },
            {
              label: 'Vol2bird',
              href: 'https://naavre.lifewatch.dev/vreapp/vlabs/vol2bird'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/QCDIS/NaaVRE'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LifeWatch ERIC VLIC / University of Amsterdam.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
