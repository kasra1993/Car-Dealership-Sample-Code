import React from "react";
import Link from "next/link";
const HexagonButton = (props) => {
  const {
    className,
    onClick,
    title,
    hexagonDirection,
    secondHexagonDirection,
    backgroundColor,
    borderShap,
    borderColor,
    children,
    href,
    secondChildren = false,
    SecondComponent,
  } = props;
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        style={{}}
        className={`button_style-btn btn d-flex text-white align-items-center text-center justify-content-center  m-0 ${className}`}
      >
        {title}
      </a>
    </Link>
  );
};
export default React.memo(HexagonButton);
