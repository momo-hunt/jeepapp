const defaultFormDate = (p) => {
  let d = p ? new Date(p) : new Date();
  d = new Intl.DateTimeFormat("fr-CA").format(d);
  //   console.log(d);
  return d;
};

const defaultFormTime = (p) => {
  let d = p ? new Date(p) : new Date();
  d = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
  }).format(d);
  //   console.log(d);
  return d + ":00";
};

export const date = () => {
  return {
    defaultFormDate,
    defaultFormTime,
  };
};
