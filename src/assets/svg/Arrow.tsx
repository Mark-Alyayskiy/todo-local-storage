import { FC } from "react";

type Props = {
  rotationDeg?: string;
};

const Arrow: FC<Props> = ({ rotationDeg }) => {
  return (
    <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 10 5 5 5-5"
        transform={rotationDeg ? `rotate(${rotationDeg}, 12, 12)` : ""}
      />
    </svg>
  );
};

export default Arrow;
