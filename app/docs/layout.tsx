import { Sidebar, SidebarLink } from "./sidebar";

import { docsConfig } from "@/config/docs";
import { File, getFiles } from "@/shared/get-files";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const files = getFiles(docsConfig.path);
  const links = convertFilesToLinks(files);

  return (
    <section className="flex md:flex-row flex-col gap-5">
      <Sidebar links={links} />

      <div className="flex flex-row flex-grow">{children}</div>
    </section>
  );
}

function convertFilesToLinks(files: File[], level = 0): SidebarLink[] {
  return files.map((file): SidebarLink => {
    if (file.children) {
      return {
        name: file.name,
        level,
        children: convertFilesToLinks(file.children, level + 1),
      };
    }

    return {
      name: file.name.replace(".md", ""),
      href: file.name,
      level,
    };
  });
}
