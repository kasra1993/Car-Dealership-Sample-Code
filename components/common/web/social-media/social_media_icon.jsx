import Link from "next/link";
const SocialMediaIcon = ({ href, src, className = undefined }) => {
  return (
    <Link href={href}>
      <a
        style={{ cursor: "pointer" }}
        className={`${className} scoial_media_img__container p-0 m-0`}
      >
        <img src={src} />
      </a>
    </Link>
  );
};

export default SocialMediaIcon;
