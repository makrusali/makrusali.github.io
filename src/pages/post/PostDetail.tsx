import type { ComponentPropsWithoutRef } from "react";
import { posts } from "./content";

type Props = {
  slug: string;
};

const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-semibold tracking-tight mb-8" {...props} />
  ),

  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl font-semibold tracking-tight mt-8 mb-3"
      {...props}
    />
  ),

  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-xl font-medium mt-6 mb-2" {...props} />
  ),

  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-base leading-relaxed text-gray-700" {...props} />
  ),

  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-blue-600 hover:underline underline-offset-4"
      target="_blank"
      {...props}
    />
  ),

  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700" {...props} />
  ),

  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-gray-700" {...props} />
  ),

  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),

  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4"
      {...props}
    />
  ),

  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-gray-200" {...props} />
  ),

  code: (props: ComponentPropsWithoutRef<"code">) => {
    const { className, ...rest } = props;
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono"
          {...rest}
        />
      );
    }

    return <code className={className} {...rest} />;
  },

  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4 text-sm"
      {...props}
    />
  ),

  img: (props: ComponentPropsWithoutRef<"img">) => (
    <div className="flex items-center justify-center w-full">
      <img
        className="rounded-xl my-6 max-w-72 md:max-w-xl lg:max-w-3xl object-cover border border-gray-200"
        loading="lazy"
        {...props}
      />
    </div>
  ),

  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm text-left border-collapse" {...props} />
    </div>
  ),

  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-gray-300" {...props} />
  ),

  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="py-2 pr-4 font-medium text-gray-900" {...props} />
  ),

  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="py-2 pr-4 text-gray-700" {...props} />
  ),

  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-gray-100" {...props} />
  ),

  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),

  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-gray-800" {...props} />
  ),
};

export default function PostDetail({ slug }: Props) {
  const Comp = posts.find((p) => p.slug == slug)?.mdx;
  if (Comp == null) {
    return (
      <main className="px-4 lg:px-12 pt-28 text-center">
        Not Found a Post for "{slug}"
      </main>
    );
  }

  return (
    <main className="px-4 lg:px-12 pt-28">
      <Comp components={components} />
    </main>
  );
}
