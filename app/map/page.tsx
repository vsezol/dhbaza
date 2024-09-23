import { title } from "@/components/primitives";

export default function MapPage() {
  return (
    <section className="flex flex-col h-full w-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>Карта спотов</h1>
      </div>
    </section>
  );
}
