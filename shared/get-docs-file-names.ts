import fs from "fs";
import path from "path";

export const getDocsFileNames = (): string[] => {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "docs"));

  const paths = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return paths;
};
