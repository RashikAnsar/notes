const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Rashik Notes",
  tagline:
    "My Notes on various topics (C++, Python, Data structures, Algorithms, Aptitude, AI/ML).",
  url: "https://rashikansar.github.io",
  baseUrl: "/notes",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "RashikAnsar", // Usually your GitHub org/user name.
  projectName: "notes", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      title: "Rashik",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Coding",
          position: "left",
          items: [
            { to: "/lang/intro", label: "Programmig Language" },
            { to: "/ds/intro", label: "Data Structures" },
            { to: "/algo/intro", label: "Algorithms" },
          ],
        },
        // TODO:
        // {
        //   label: "AI/ML",
        //   position: "left",
        //   items: [
        //     { to: "/math/intro", label: "Math" },
        //     { to: "/statistics/intro", label: "Statistics" },
        //     { to: "/ml/intro", label: "Machine Learning" },
        //   ],
        // },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/rashikansar/notes",
          // label: "GitHub",
          // // replace the label with icon
          className: "header-github-link",
          "aria-label": "GitHub repository",
          title: "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Quick Links",
          items: [
            {
              label: "C++",
              to: "/lang/cpp",
            },
            {
              label: "Data Structures",
              to: "/ds/intro",
            },
            {
              label: "Algorithms",
              to: "/algo/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/RashikAnsar",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/rashik_ansar",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "My Python Notes",
              to: "https://ra-py-notes.web.app/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rashik, Built with Docusaurus.`,
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "notes",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: "https://github.com/rashikansar/notes/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/rashikansar/notes/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
