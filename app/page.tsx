import { Button } from "@nextui-org/button";
import { button } from "@nextui-org/theme";
import NextLink from "next/link";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>База&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Даунхилла&nbsp;</h1>
        <br />
        <h1 className={title()}>для русcкоговорящего сообщества</h1>
        <h2 className={subtitle({ class: "mt-4" })}>База. Практика. Катка.</h2>
      </div>

      <div className="flex gap-3">
        <NextLink href="/docs" scroll={false}>
          <Button
            className={button({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Познать базу
          </Button>
        </NextLink>
      </div>
    </section>
  );
}
