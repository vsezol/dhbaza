import { getDocsFileNames } from "@/shared/get-docs-file-names";

export async function generateStaticParams() {
  return getDocsFileNames().map((id) => ({ id }));
}

export default function Post({ params }: { params: { id: string } }) {
  return <div>Привет! {params.id}</div>;
}
