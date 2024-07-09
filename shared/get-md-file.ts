import fs from "fs";

import matter from "gray-matter";

interface MdFileData<T> {
  content: string;
  data: T;
}

export const getMdFile = <T extends object>(
  filePath: string
): MdFileData<T> => {
  const fileContents = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContents);

  return {
    data: matterResult.data as T,
    content: matterResult.content,
  };
};
