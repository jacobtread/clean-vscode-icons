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
 * @param {Record<string, { path: string }>} icons
 */
export const makeFolderIconPairs = (collapsed, expanded, icons) => {
    const pairs = {};

    const collapsedKeys = Object.keys(collapsed);
    const expandedKeys = Object.keys(expanded);

    const combinedKeys = new Set([...collapsedKeys, ...expandedKeys]);

    const sortedKeys = [...combinedKeys.values()].sort();

    for (const key of sortedKeys) {
        const collapsedName = collapsed[key];
        const expandedName = expanded[key];

        let collapsedIcon = icons[collapsedName];
        let expandedIcon = icons[expandedName];

        if (collapsedIcon === undefined && expandedIcon === undefined) {
            console.warn(
                `folder icons are undefined for '${collapsedName}' and '${expandedName}`,
            );
            continue;
        }

        if (collapsedIcon === undefined) {
            collapsedIcon = expandedIcon;
            console.warn(
                `folder icon collapsed variant is undefined for '${collapsedName}' using expanded variant`,
            );
        }
        if (expandedIcon === undefined) {
            expandedIcon = collapsedIcon;
            console.warn(
                `folder icon expanded variant is undefined for '${expandedName}' using collapsed variant`,
            );
        }

        pairs[key] = {
            collapsed: collapsedIcon.path,
            expanded: expandedIcon.path,
        };
    }

    return pairs;
};
