import clsx from "clsx";

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <h1 className={clsx(title({ size: "md", fullWidth: true }), "pb-4")}>
      Добро пожаловать в доку!
    </h1>
  );
}
