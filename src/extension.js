import fs from "fs";
import icons from "./icons.js";
import fileExtensions from "./icons/fileExtensions.js";
import fileNames from "./icons/fileNames.js";
import folderNames from "./icons/folderNames.js";
import folderNamesExpanded from "./icons/folderNamesExpanded.js";
import { makeFolderIconPairs } from "./helper.js";

const folderPairs = makeFolderIconPairs(
    folderNames,
    folderNamesExpanded
)

const iconTheme = {
  $schema: "https://zed.dev/schema/icon_themes/v0.2.0.json",
  name: "Clean VSCode Icon Theme",
  author: "Jacobtread",
  themes: [
    {
      name: "VSCode Icon Theme",
      appearance: "dark",
      directory_icons: {
        collapsed: "./icons/folder.svg",
        expanded: "./icons/folder_open.svg",
      },
      named_directory_icons: folderPairs,
      file_stems: fileNames,
      file_suffixes: fileExtensions,
      file_icons: icons,
    },
  ],
};

fs.writeFile(
  "icon_themes/vscode-icon-theme.json",
  JSON.stringify(iconTheme, undefined, 4),
  (err) => {
    if (err) {
      console.log("error", err);
    }
  }
);
