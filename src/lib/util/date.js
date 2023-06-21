export const defaultFormDate = (p) => {
  let d = p ? new Date(p) : new Date();
  d = new Intl.DateTimeFormat("fr-CA").format(d);
  //   console.log(d);
  return d;
};

export const defaultFormTime = (p) => {
  let d = p ? new Date(p) : new Date();
  d = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
  }).format(d);
  //   console.log(d);
  return d + ":00";
};
