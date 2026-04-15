import type { MouseEventHandler } from "react";

type Props = {
  className?: string;
  onClick?: MouseEventHandler;
};

export default function MenuIcon({ className, onClick }: Props) {
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="icon"
        viewBox="0 0 32 32"
        className="fill-gray-800"
      >
        <path d="M4 6h24v2H4zM4 24h24v2H4zM4 12h24v2H4zM4 18h24v2H4z"></path>
        <path
          id="_Transparent_Rectangle_"
          fill="none"
          d="M0 0h32v32H0z"
          data-name="&lt;Transparent Rectangle&gt;"
        ></path>
      </svg>
    </div>
  );
}
