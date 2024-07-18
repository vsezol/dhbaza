import path from "path";

import { Image } from "@nextui-org/image";
import clsx from "clsx";
import Markdown from "react-markdown";

import { title } from "@/components/primitives";
import { docsConfig } from "@/config/docs";
import { File, getFiles } from "@/shared/get-files";
import { getMdFile } from "@/shared/get-md-file";

interface PathParams {
  id: string;
}

function convertFilesToParams(
  files: File[],
  path: string[] = []
): PathParams[] {
  return files.flatMap((x) => {
    if (x.children) {
      return convertFilesToParams(x.children, [
        ...path,
        x.name.replace(".md", ""),
      ]);
    }

    return {
      id: [...path, x.name.replace(".md", "")].join("-"),
    };
  });
}

export async function generateStaticParams() {
  const files = getFiles(docsConfig.path);
  const params = convertFilesToParams(files);

  return params;
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const filePath = path.join(docsConfig.path, `${id.split("-").join("/")}.md`);
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
        {file.content}
      </Markdown>
    </div>
  );
}
