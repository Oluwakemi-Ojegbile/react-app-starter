export const getFirstName = (str) => {
  let arr = str && str.split(" ");
  if (arr && arr.length === 1) {
    return arr[0];
  }
  return arr && arr.slice(0, -1).join(" ");
};

export const getLastName = (str) => {
  let arr = str && str.split(" ");
  if (arr && arr.length === 1) {
    return "Nil";
  }
  return arr && arr.slice(-1).join(" ");
};

export const breakWords = (str) => {
  let formattedString = str && str.split(",").join("\n")
  return formattedString
}
