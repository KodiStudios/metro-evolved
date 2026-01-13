import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Metro Evolved",
  tagline: "AI Solutions at your fingertips",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://metroevolved.com",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: "KodiStudios", // Usually your GitHub org/user name.
  //projectName: "metro-evolved", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      {
        // Wiki
        docs: {
          sidebarPath: "./sidebars.ts",

          // Adds "Edit This Page" links
          editUrl: "https://github.com/KodiStudios/metro-evolved/tree/main",
        },

        // Blog
        blog: {
          showReadingTime: true,

          // Adds "Edit This Page" links
          editUrl: "https://github.com/KodiStudios/metro-evolved/tree/main",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",

    // Top
    navbar: {
      // Top-Left
      logo: {
        src: "img/logo.svg",
        alt: "Metro Evolved Site Logo",
      },

      // Top-Left
      title: "Metro Evolved",

      items: [
        // Top-Left Links
        // Wiki
        {
          label: "Empower",
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
        },

        {
          label: "Collection",
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
        },

        // Blog
        { to: "/blog", label: "Blog", position: "left" },

        // Top-Right Link
        {
          label: "GitHub",
          href: "https://github.com/KodiStudios/metro-evolved",
          position: "right",
        },
      ],
    },

    // Bottom
    footer: {
      style: "dark",
      links: [
        // Bottom Left
        {
          title: "Evolve",
          items: [
            {
              label: "Empower",
              to: "/docs/category/docusaurus",
            },
            {
              label: "Collections",
              to: "/docs/category/windows-terminal-app",
            },
          ],
        },

        // Bottom Middle
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/nikoaristov",
            },
            {
              label: "X",
              href: "https://twitter.com/kodistudios",
            },
          ],
        },

        // Bottom Right
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/KodiStudios/metro-evolved",
            },
          ],
        },
      ],

      // Bottom Bottom
      copyright: `Copyright © ${new Date().getFullYear()} Kodi Studios, Llc. Built with Docusaurus 🦖.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
