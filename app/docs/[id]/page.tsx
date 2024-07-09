import path from "path";

import clsx from "clsx";
import Markdown from "react-markdown";

import { title } from "@/components/primitives";
import { docsConfig } from "@/config/docs";
import { getDocsFileNames } from "@/shared/get-docs-file-names";
import { getMdFile } from "@/shared/get-md-file";

export async function generateStaticParams() {
  return getDocsFileNames(docsConfig.path).map((id) => ({ id }));
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const filePath = path.join(docsConfig.path, `${id}.md`);
  const file = getMdFile(filePath);

  return (
    <div>
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1
              className={clsx(title({ size: "md", fullWidth: true }), "pb-4")}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h1
              className={clsx(title({ size: "sm", fullWidth: true }), "pb-4")}
            >
              {children}
            </h1>
          ),
        }}
      >
        {file.content}
      </Markdown>
    </div>
  );
}
