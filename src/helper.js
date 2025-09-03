
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


/**
 * Combine the collapsed and expanded variants of icons for
 * specific folders into a pair of expanded and collapsed
 *
 * @param {Record<string, string>} collapsed
 * @param {Record<string, string>} expanded
 */
export const makeFolderIconPairs = (collapsed, expanded) => {
    const pairs = {};

    const collapsedKeys = Object.keys(collapsed);
    const expandedKeys = Object.keys(expanded);

    const combinedKeys = new Set([...collapsedKeys, ...expandedKeys]);

    const sortedKeys = [...combinedKeys.values()]
        .sort();


    for (const key of sortedKeys) {
        const collapsedName = collapsed[key];
        const expandedName = expanded[key];


        pairs[key] = { collapsed: collapsedName, expanded: expandedName };
    }

    return pairs;
}
