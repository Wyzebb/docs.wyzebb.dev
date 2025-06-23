import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Docs | Wyzebb\'s Plugins',
    tagline: 'Minecraft plugin documentation',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://docs.wyzebb.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Wyzebb',
            logo: {
                alt: 'Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'pvdcSidebar',
                    position: 'left',
                    label: 'PVDC',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'plugin2Sidebar',
                    position: 'left',
                    label: 'Plugin 2',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/wyzebb',
                    label: 'GitHub',
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
                            label: 'PVDC',
                            to: '/docs/pvdc/overview',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/akbd8EPSgr',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/@wyzebb',
                        },
                        {
                            label: 'Twitch',
                            href: 'https://www.twitch.tv/wyzebb',
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
                            href: 'https://github.com/wyzebb',
                        },
                    ],
                },
                {
                    title: 'PVDC Downloads',
                    items: [
                        {
                            label: 'Modrinth',
                            href: 'https://modrinth.com/plugin/pvdc',
                        },
                        {
                            label: 'CurseForge',
                            href: 'https://www.curseforge.com/minecraft/bukkit-plugins/pvdc',
                        },
                        {
                            label: 'Paper Hangar',
                            href: 'https://hangar.papermc.io/Wyzebb/PlayerViewDistanceController',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Wyzebb. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
