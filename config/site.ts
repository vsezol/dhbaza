export type SiteConfig = typeof siteConfig;

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
      label: "Дока",
      href: "/docs",
      isActive: (url: string) => url.startsWith("/docs"),
    },
  ],
  navMenuItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Дока",
      href: "/docs",
    },
  ],
};
