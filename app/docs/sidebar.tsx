"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface SidebarLink {
  name: string;
  level: number;
  href?: string;
  children?: SidebarLink[];
}

interface SidebarProps {
  links: SidebarLink[];
}

export const Sidebar = ({ links }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="h-full flex-shrink-0 w-32">
      <SidebarList links={links} pathname={pathname} />
    </div>
  );
};

function SidebarList({
  links,
  pathname,
}: {
  links: SidebarLink[];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {links.map((link) => {
        if (link.children) {
          return (
            <div key={link.name}>
              <SidebarItem
                isOpen={isOpen}
                link={link}
                pathname={pathname}
                onClick={() => setIsOpen(!isOpen)}
              />

              {isOpen && (
                <SidebarList links={link.children} pathname={pathname} />
              )}
            </div>
          );
        }

        return <SidebarItem key={link.name} link={link} pathname={pathname} />;
      })}
    </>
  );
}

function SidebarItem({
  link,
  pathname,
  onClick,
  isOpen = false,
}: {
  link: SidebarLink;
  pathname: string;
  isOpen?: boolean;
  onClick?: () => void;
}) {
  if (link.children) {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
      <div
        className="flex flex-row gap-2 items-center cursor-pointer mb-2 select-none"
        style={{ paddingLeft: `${20 * link.level}px` }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          className={clsx("w-3 h-3 transition-all", isOpen && "rotate-90")}
          icon={["fas", "chevron-right"]}
          size="sm"
        />
        <div className={clsx("capitalize text-xl")}>{link.name}</div>
      </div>
    );
  }

  return (
    <Link
      className={clsx("capitalize text-xl mb-2")}
      color={pathname === `/docs/${link.href}` ? "danger" : "foreground"}
      href={`/docs/${link?.href}`}
      style={{ paddingLeft: `${20 * link.level}px` }}
    >
      {link.name}
    </Link>
  );
}
