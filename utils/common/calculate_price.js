export const calculatePrice = (min, max) => {
  //   const year = new Date().getFullYear();
  // const year = new Date().getFullYear();
  let createPrice = new Array();

  for (let i = min; i <= max; i = i + 1000) {
    createPrice.push({ value: i.toString(), label: i.toString() });
  }
  return createPrice;
};
