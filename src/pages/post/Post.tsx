import { posts } from "./content";

type Props = {
  onClickOpenPost: (slug: string) => void;
};

export default function Post({ onClickOpenPost }: Props) {
  return (
    <section className="px-4 lg:px-12 pt-28 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {posts.map((p) => (
        <div
          key={p.slug}
          onClick={() => onClickOpenPost(p.slug)}
          className="p-8 bg-gray-100 rounded-xl hover:scale-[0.98] scale-100 transition-all cursor-pointer"
        >
          <h2 className="font-medium text-base">{p.title}</h2>

          <svg
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            className="fill-gray-500 -rotate-45 mt-8"
          >
            <defs>
              <style>
                {
                  "\n      .cls-1 {\n        fill: none;\n      }\n\n      .cls-1, .cls-2 {\n        stroke-width: 0px;\n      }\n    "
                }
              </style>
            </defs>
            <path
              className="cls-2"
              d="m22,16l-1.4141,1.4141,4.5859,4.5859h-10.1719V5c0-1.1046-.8954-2-2-2H3v2h10v17c0,1.1046.8954,2,2,2h10.1719l-4.5859,4.5859,1.4141,1.4141,7-7-7-7Z"
            />
            <rect
              id="_Transparent_Rectangle_"
              data-name="&amp;lt;Transparent Rectangle&amp;gt;"
              className="cls-1"
              width={32}
              height={32}
            />
          </svg>
        </div>
      ))}
    </section>
  );
}
