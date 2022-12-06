import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
const NavLink = (props) => {
  const {
    href,
    title,
    className,
    type,
    subLinks,
    disabledDesktopClass = false,
    isMobile = false,
    parent = undefined,
    setParent = undefined,
    parentId = undefined,
    menuToggleSetter,
  } = props;
  const [showMobileSubMenu, setShowMobileSubmenu] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  return (
    <div className="p-0  m-0">
      <Link href={href}>
        <a
          onClick={(e) => {
            if (type === "0") {
              e.stopPropagation();
              e.preventDefault();
              if (isMobile) {
                setShowMobileSubmenu((prev) => !prev);
                setParent(parentId);
              }
            } else {
              if (type === "1" && isMobile) {
                setTimeout(() => {
                  menuToggleSetter(false);
                }, 500);
              }
            }
          }}
          style={{ position: "relative" }}
          className={`p-2 py-md-3 text-decoration-none h-100 m-0 d-flex align-items-start align-items-lg-center d-flex flex-column navbar__items ${
            asPath === href && "header_a__active"
          } ${className}`}
        >
          <p className="p-0 m-0 h-100 w-100  text-center">{title}</p>
          {typeof subLinks !== "undefined" && (
            <div
              className={`p-0 m-0 d-flex flex-column w-100  ${
                !disabledDesktopClass &&
                "header_a__navlink_submenu_container pt-4 mt-1"
              }`}
            >
              <div className="p-0 m-0"></div>
              <div
                className={`p-0 m-0 d-flex flex-column w-100 ${
                  !disabledDesktopClass && "header_a__navlink_submenu_content"
                } `}
              >
                {isMobile &&
                  showMobileSubMenu &&
                  parentId === parent &&
                  subLinks?.map((item) => (
                    <Link href={item?.href}>
                      <a
                        className={`p-0 d-flex m-0 header_a__navlink_mobile justify-content-start w-100 ${
                          !disabledDesktopClass &&
                          "header_a__navlink_submenu  w-100 "
                        } px-2 py-2`}
                        onClick={() => {
                          if (type === "0") {
                            setTimeout(() => {
                              menuToggleSetter(false);
                            }, 500);
                          }
                        }}
                      >
                        {item?.title}
                      </a>
                    </Link>
                  ))}
                {!isMobile &&
                  subLinks?.map((item) => (
                    <Link href={item?.href}>
                      <a
                        className={`p-0 m-0 header_a__navlink ${
                          !disabledDesktopClass && "header_a__navlink_submenu"
                        } px-2 py-2`}
                        // onClick={() => {
                        //   setTimeout(() => {
                        //     menuToggleSetter(false);
                        //   }, 500);
                        // }}
                      >
                        {item?.title}
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
