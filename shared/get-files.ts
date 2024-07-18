import fs from "fs";
import path from "path";

export type FileType = "file" | "folder";

export interface File {
  type: FileType;
  name: string;
  children?: File[];
}

export const getFiles = (rootPath: string): File[] => {
  const fileNames = fs.readdirSync(rootPath);

  const paths = fileNames
    .filter((x) => !x.startsWith("_"))
    .map((fileName): File => {
      const isFolder = fs
        .lstatSync(path.join(rootPath, fileName))
        .isDirectory();

      if (!isFolder) {
        return {
          type: "file",
          name: fileName,
        };
      }

      return {
        type: "folder",
        name: fileName,
        children: getFiles(path.join(rootPath, fileName)),
      };
    })
    .sort((a, b) => {
      if (a.children && b.children) {
        return 0;
      }

      return a.children ? 1 : -1;
    });

  return paths;
};
