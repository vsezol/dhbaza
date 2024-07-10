import { Sidebar } from "./sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex md:flex-row flex-col gap-5">
      <Sidebar />

      <div className="flex flex-row flex-grow">{children}</div>
    </section>
  );
}
