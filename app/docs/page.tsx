import { redirect } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { getDocsFileNames } from "@/shared/get-docs-file-names";

export default function DocsPage() {
  const [firstFileName] = getDocsFileNames(docsConfig.path);

  redirect(`/docs/${firstFileName}`);
}
