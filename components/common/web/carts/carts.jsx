import React from "react";
import Link from "next/link";
import HomeButtom from "../button/home_button";
import { BsStar, BsStarFill } from "react-icons/bs";
const Carts = ({ type, img, title, kilometer, price, avatar, username }) => {
  return (
    <>
      {type === "CART_CURSOULE" && (
        <div className="cart_cursoule">
          <div
            className="cart_image"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <h3 className="cart_title">{title}</h3>

          <p className="mt-1 cart_price">Price Taxes : {price}</p>
          <Link href="/forms/finance">
            <a className="w-100 button_primary text-decoration-none">
              <span>View Detail</span>
            </a>
          </Link>
        </div>
      )}
      {type === "CART_COMMENT" && (
        <div className="p-3 m-0 mr-3 cart_comment row">
          <div className="p-0 m-0 col-12">
            <div className="p-0 m-0 w-100 row">
              <div className=" col-10">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="avatar">{avatar}</div>
                    <h3>{username}</h3>
                  </div>

                  <p className="main-paragraph">{title}</p>
                </div>
              </div>
              <div className="cart_rate col-2">
                <BsStarFill className="w-100" />
                <BsStarFill className="w-100" />
                <BsStarFill className="w-100" />
                <BsStarFill className="w-100" />
                <BsStarFill className="w-100" />
              </div>
              <div className="p-0 m-0 w-100 d-flex justify-content-end text-end">
                <a
                  href="https://www.google.ca/search?q=715+auto+haus&sxsrf=APq-WBsBBtxRjof9hfGaVuF_iUvxPnzXQw%3A1647441145924&source=hp&ei=-fQxYuq1NtG90PEP442dmAo&iflsig=AHkkrS4AAAAAYjIDCaNw47E_dBOn1RbXZquWE-U8GJ3W&gs_ssp=eJzj4tVP1zc0LMxLqrAoNzM1YLRSNagwNbEwMzc0T7FISTE3NUoztzKoMEwzSzJOMbBIMUg0tTRLTvTiNTc0VUgsLclXyEgsLQYAkncTag&oq=715+aut&gs_lcp=Cgdnd3Mtd2l6EAMYADILCC4QgAQQxwEQrwEyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoECCMQJzoOCC4QgAQQsQMQxwEQowI6CAgAEIAEELEDOg4ILhCABBDHARCvARDUAjoFCAAQsQM6CAgAEIAEEMkDUABYpB1g0TVoAHAAeACAAWGIAdYDkgEBN5gBAKABAQ&sclient=gws-wiz#lrd=0x5486717d8dd752f7:0x1f6b3d08d0a596ca,1,,,"
                  target="_blanck"
                  rel="noreferrer noopener"
                  className="button_primary text-decoration-none home_button_div w-25 d-flex justify-content-end text-end"
                >
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
