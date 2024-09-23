export type SiteConfig = typeof siteConfig;

const navItems = [
  {
    label: "Главная",
    href: "/",
    isActive: (url: string) => url === "/",
  },
  {
    label: "Карта",
    href: "/map",
    isActive: (url: string) => url.startsWith("/map"),
  },
  {
    label: "Дока",
    href: "/docs",
    isActive: (url: string) => url.startsWith("/docs"),
  },
];

export const siteConfig = {
  name: "DH BAZA",
  description: "База Даунхилла русcкоговорящего сообщества",
  navItems: [
    {
      label: "Главная",
      href: "/",
      isActive: (url: string) => url === "/",
    },
    {
      label: "Карта",
      href: "/map",
      isActive: (url: string) => url.startsWith("/map"),
    },
    {
      label: "Дока",
      href: "/docs",
      isActive: (url: string) => url.startsWith("/docs"),
    },
  ],
  navMenuItems: navItems.map(({ href, label }) => ({ href, label })),
};
