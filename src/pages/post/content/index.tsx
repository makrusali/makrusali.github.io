import type { JSX } from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types.js";

// MDX IMPORT BEGIN
import Post1 from "./membuat-library-oled.mdx";

type Post = {
  title: string;
  slug: string;
  date: string;
  mdx: (props: { components?: MDXComponents }) => JSX.Element;
};

const posts: Post[] = [
  {
    title: "[PART 1] - Mengakses Oled 1.3 Inch",
    slug: "mengakses-oled-1.3-inch",
    date: "2026-03-18",
    mdx: Post1,
  },
];

export { posts };
