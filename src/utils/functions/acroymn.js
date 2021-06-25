export const nameAcronym = (str) => {
    let word = str
    let acronym = word && word.match(/\b(\w)/g).join('').slice(0, 2);
    return acronym
}

export const wordsAcronym = (str) => {
    let x = str;
    let y = x && x.split(' ').slice(0, 2).join(' ');
    return y
}

export const wordsExtract = (str) => {
    let x = str && str.split(' ')
    let y = x && x.slice(2).join(' ');
    return y
}