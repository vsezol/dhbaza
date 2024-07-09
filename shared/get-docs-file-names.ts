import fs from "fs";

export const getDocsFileNames = (path: string): string[] => {
  const fileNames = fs.readdirSync(path);

  const paths = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return paths;
};
