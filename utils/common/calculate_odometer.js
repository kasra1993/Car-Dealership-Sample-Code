export const calculateOdometers = (min, max) => {
  //   const year = new Date().getFullYear();
  const year = new Date().getFullYear();
  let createOdometer = new Array();

  for (let i = min; i <= max; i = i + 10000) {
    createOdometer.push({ value: i.toString(), label: i.toString() });
  }
  return createOdometer;
};
