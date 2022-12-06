import Link from "next/link";
// import { FaArrowUp } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
const HomeButtom = ({ type, text, click, icon, size, href, cls }) => {
  return (
    <>
      {type === "ACTION_BUTTON_LIGHT" && (
        <button
          className="action_button_light"
          onClick={click}
          style={{
            width: size,
            height: size,
          }}
        >
          {icon}
        </button>
      )}
      {type === "ACTION_BUTTON_PRIMARY" && (
        <button
          className="action_button_primary"
          onClick={click}
          style={{
            width: size,
            height: size,
          }}
        >
          {icon}
        </button>
      )}
      {type === "ACTION_BUTTON_SECONDARY" && (
        <button
          className="action_button_secondary"
          onClick={click}
          style={{
            width: size,
            height: size,
          }}
        >
          {icon}
        </button>
      )}
      {type === "BUTTON_PRIMARY" && (
        <button
          className="button_primary"
          onClick={click}
          style={{
            width: size,
          }}
        >
          <span>{text}</span>
        </button>
      )}
      {type === "BUTTON_SECONDARY" && (
        <button
          className="button_secondary"
          onClick={click}
          style={{
            width: size,
          }}
        >
          <span>{text}</span>
        </button>
      )}
      {type === "BUTTON_LIGHT" && (
        <button
          className="button_light"
          onClick={click}
          style={{
            width: size,
          }}
        >
          <span>{text}</span>
        </button>
      )}
      {type === "BUTTON_LIGHT_PRIMARY" && (
        <button
          className="button_light"
          onClick={click}
          style={{
            width: size,
          }}
        >
          <span>{text}</span>
        </button>
      )}
      {type === "LINK_BUTTON_BORDER" && (
        <div className={`link_button_border ${cls}`} style={{ width: size }}>
          <Link href={href}>
            <a className="text-decoration-none">{text}</a>
          </Link>
        </div>
      )}
      {type === "BUTTON_PRIMARY_TOW" && (
        <button
          className="button_primary_tow"
          onClick={click}
          style={{
            width: size,
          }}
        >
          <span>{text}</span>
        </button>
      )}
      {type === "LINK_BUTTON_TEXT" && (
        <Link href={href}>
          <a className="link_text text-decoration-none">
            {text}
            <BsArrowUpRight />
          </a>
        </Link>
      )}
    </>
  );
};

export default HomeButtom;
