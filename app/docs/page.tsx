import { redirect } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { getFiles } from "@/shared/get-files";

export default function DocsPage() {
  const [{ name: firstFileName }] = getFiles(docsConfig.path).filter((file) =>
    file.name.endsWith(".md")
  );

  redirect(`/docs/${firstFileName.replace(".md", "")}`);
}
