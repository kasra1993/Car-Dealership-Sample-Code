import React, { useContext, useEffect } from "react";

export const Translate = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    let width = window.innerWidth;
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    if (width <= 560) {
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      window.googleTranslateElementInit = googleTranslateElementInitSimple;
    }
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages:
          "en,af,sq,ar,hy,az,eu,be,bn,bg,ca,zh-CN,zh-TW,hr,cs,da,nl,eo,et,tl,fi,fr,gl,ka,de,el,gu,ht,iw,hi,hu,is,id,ga,it,ja,kn,ko,la,lv,lt,mk,ms,mt,no,fa,pl,pt,ro,ru,sr,sk,sl,es,sw,sv,ta,te,th,tr,uk,ur,vi,cy,yi", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  };

  const googleTranslateElementInitSimple = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages:
          "en,af,sq,ar,hy,az,eu,be,bn,bg,ca,zh-CN,zh-TW,hr,cs,da,nl,eo,et,tl,fi,fr,gl,ka,de,el,gu,ht,iw,hi,hu,is,id,ga,it,ja,kn,ko,la,lv,lt,mk,ms,mt,no,fa,pl,pt,ro,ru,sr,sk,sl,es,sw,sv,ta,te,th,tr,uk,ur,vi,cy,yi", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <div className="p-0 m-0 w-100">
      <div id="google_translate_element"></div>
    </div>
  );
};
