import { TContentSource, TFrontmatter } from "@/types/content";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export async function getContent(contentId: string) {
  try {
    const file = await fs.readFile(`src/content/${contentId}.mdx`, "utf-8");
    const source = await serialize(file, { parseFrontmatter: true });
    return source as TContentSource;
  } catch (err) {
    console.error("An error occurred while getting the content: ", err);
    return null;
  }
}

export async function listContents() {
  try {
    const contentFilePaths = (await fs.readdir("src/content")).filter(
      (contentPath) => {
        return path.extname(contentPath).toLowerCase() === ".mdx";
      }
    );

    const contents: TFrontmatter[] = [];

    for (const contentFilePath of contentFilePaths) {
      const file = await fs.readFile(`src/content/${contentFilePath}`, "utf-8");
      const source = await serialize(file, { parseFrontmatter: true });
      contents.push(source.frontmatter as TFrontmatter);
    }

    return contents;
  } catch (err) {
    console.error("An error occurred while listing the contents: ", err);
    return [];
  }
}
