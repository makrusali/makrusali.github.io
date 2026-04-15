import React from "react";

export default function Grid1x1Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-square-icon lucide-square"
      {...props}
    >
      <rect width={18} height={18} x={3} y={3} rx={2} />
    </svg>
  );
}
