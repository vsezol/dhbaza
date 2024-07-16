import { Image } from "@nextui-org/image";
import clsx from "clsx";
import Markdown from "react-markdown";

import { title } from "@/components/primitives";

export async function generateStaticParams() {
  return ["sdhdh"];
  // return [{ id: "heelside" }, { id: "toeside" }, { id: "films" }];
  // return getFiles(docsConfig.path).map(({ name }, imnde) => ({ id: name }));
}
// {
//   params: { id },
// }: {
//   params: { id: string };
// }
export default async function Post() {
  // const filePath = path.join(docsConfig.path, `${id}.md`);
  // const file = getMdFile(filePath);

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
          p: ({ children }) => {
            if (children?.toString().startsWith("//video//")) {
              return (
                <div className="w-full py-4">
                  <iframe
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full aspect-video"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={children.toString().replace("//video//", "")}
                    title="YouTube video player"
                  />
                </div>
              );
            }

            return <div>{children}</div>;
          },
          img: ({ src, alt }) => (
            <div className="w-full flex justify-center py-4 flex-col items-center gap-2">
              <Image
                isBlurred
                isZoomed
                alt={alt}
                className="md:max-w-xl"
                src={src}
              />
              {alt && <p className="italic">{alt}</p>}
            </div>
          ),
        }}
      >
        BIm
        {/* {file.content} */}
      </Markdown>
    </div>
  );
}
