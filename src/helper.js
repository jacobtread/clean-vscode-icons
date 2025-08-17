
/**
 * @param {String[]} itemList 
 * @param {String} scope 
 * @returns 
 */
export const make = (itemList, scope) => {
  let obj = {};
  itemList.forEach((item) => (obj = { [item]: scope, ...obj }));
  return obj;
};
