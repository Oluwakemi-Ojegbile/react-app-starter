export const formatText = (str) => {
  let newStr = str && str.split("_").join(" ");
  return newStr;
};

export const createUrlQuery = (text) => {
  let url =
    process.env.REACT_APP_LETSHEGO_API_KEY &&
    process.env.REACT_APP_LETSHEGO_API_KEY.concat("/").concat(text);
  let newUrl = url && url.trim().split(" ").join("%20");
  return newUrl;
};
