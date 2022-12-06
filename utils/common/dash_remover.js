export const dashRemoverForSlug = (arrg) => {
  if (typeof arrg === "string") {
    const replecedDash = arrg.replaceAll(/-/g, "");
    return replecedDash.toLowerCase();
  } else {
    return "";
  }
};
