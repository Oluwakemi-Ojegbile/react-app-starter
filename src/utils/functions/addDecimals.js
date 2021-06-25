export const addZeroes = (num) => {
    let value = Number(num);
    if (String(num).split(".").length < 2 || String(num).split(".")[1].length <= 2) {
        value = value && value.toFixed(2);
    }
    return value;
};
