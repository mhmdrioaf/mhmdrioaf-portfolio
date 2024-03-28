import { TContentSource, TFrontmatter } from "@/types/content";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

export async function getContent(contentId: string) {
  const contentPath = path.join(process.cwd(), `content/${contentId}.mdx`);

  try {
    const file = await fs.readFile(contentPath, "utf-8");
    const source = await serialize(file, { parseFrontmatter: true });
    return source as TContentSource;
  } catch (err) {
    console.error("An error occurred while getting the content: ", err);
    return null;
  }
}

export async function listContents() {
  try {
    const contentFilePaths = (
      await fs.readdir(path.join(process.cwd(), "content"))
    ).filter((contentPath) => {
      return path.extname(contentPath).toLowerCase() === ".mdx";
    });

    const contents: TFrontmatter[] = [];

    for (const contentFilePath of contentFilePaths) {
      const contentDetailPath = path.join(
        process.cwd(),
        `content/${contentFilePath}`
      );
      const file = await fs.readFile(contentDetailPath, "utf-8");
      const source = await serialize(file, { parseFrontmatter: true });
      contents.push(source.frontmatter as TFrontmatter);
    }

    return contents.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  } catch (err) {
    console.error("An error occurred while listing the contents: ", err);
    return [];
  }
}
