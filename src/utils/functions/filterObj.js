export const filterObj = (obj) => {
    let filteredObj = obj && obj.filter(function (o) {
        let values = Object.values(o);
        let arr2 = ["", null]; //array of values you don't want.
        if (arr2 && arr2.some(function (val) {
            return values.indexOf(val) >= 0;
          })) return false;
        else return true;
      });
      return filteredObj
}
