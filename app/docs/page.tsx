import { title } from "@/components/primitives";
import { getDocsFileNames } from "@/shared/get-docs-file-names";

export default function DocsPage() {
  const fileNames = getDocsFileNames();

  return (
    <div>
      <h1 className={title()}>Здесь будет база по дх</h1>

      {fileNames.map((x, i) => (
        <div key={i}>{x}</div>
      ))}
    </div>
  );
}
