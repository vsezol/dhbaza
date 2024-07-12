import { Sidebar } from "./sidebar";

import { docsConfig } from "@/config/docs";
import { getDocsFileNames } from "@/shared/get-docs-file-names";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fileNames = getDocsFileNames(docsConfig.path);

  return (
    <section className="flex md:flex-row flex-col gap-5">
      <Sidebar links={fileNames} />

      <div className="flex flex-row flex-grow">{children}</div>
    </section>
  );
}
