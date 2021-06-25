const UpdateArray = (allResult, searchResult) => {
  let index =
    allResult && allResult.findIndex((el) => el.cn === searchResult.cn);
  if (index >= 0) {
    allResult[index].mail = searchResult.mail;
  } else {
    allResult && allResult.push(searchResult);
  }
};

export default UpdateArray;
