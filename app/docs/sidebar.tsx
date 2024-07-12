"use client";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  links: string[];
}

export const Sidebar = ({ links }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col gap-2 flex-shrink-0 w-32">
      {links.map((link) => (
        <Link
          key={link}
          className="capitalize text-xl"
          color={pathname === `/docs/${link}` ? "danger" : "foreground"}
          href={`/docs/${link}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};
