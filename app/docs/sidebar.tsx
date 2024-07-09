import { Link } from "@nextui-org/link";

import { docsConfig } from "@/config/docs";
import { getDocsFileNames } from "@/shared/get-docs-file-names";

export const Sidebar = () => {
  const fileNames = getDocsFileNames(docsConfig.path);

  return (
    <div className="h-full flex flex-col gap-2 flex-shrink-0 w-32">
      {fileNames.map((name) => (
        <Link
          key={name}
          className="capitalize text-xl"
          color="foreground"
          href={`/docs/${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
