import { join } from "path";
import fs from "fs";

const getDir = (path: string) => join(process.cwd(), path);

const BLOG_DIR = getDir("/posts");

const getFileNames = (dir: string): string[] => fs.readdirSync(dir);

export const getBlogFileNames = (): string[] => getFileNames(BLOG_DIR);

const getItemInPath = (path: string) => fs.readFileSync(path, "utf-8");

export const getBlogs = () =>
  getBlogFileNames().map((name) => getItemInPath(join(BLOG_DIR, name)));
