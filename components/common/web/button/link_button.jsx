import Link from "next/link";
const LinkButton = ({ name = "", href = "/", className }) => {
  return (
    <Link href={href}>
      <a
        className={`p-0 m-0 text-start text-decoration-none home_a__about ${className}`}
      >
        {name}
        <div className="p-0 m-0">
          <img
            style={{ position: "absolute", zIndex: 1 }}
            src="/icons/common/charot-right.png"
          />
        </div>
      </a>
    </Link>
  );
};

export default LinkButton;
