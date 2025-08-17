import fs from "fs";
import { icons, folderIcons } from "./icons.js";
import fileExtensions from "./icons/fileExtensions.js";
import fileNames from "./icons/fileNames.js";
import folderNames from "./icons/folderNames.js";
import folderNamesExpanded from "./icons/folderNamesExpanded.js";

const iconTheme = {
  $schema: "https://zed.dev/schema/icon_themes/v0.2.0.json",
  name: "VSCode Icon Theme",
  author: "Jacobtread",
  themes: [
    {
      name: "Bearded Icon Theme",
      appearance: "dark",
      directory_icons: {
        collapsed: "./icons/folders/folder.svg",
        expanded: "./icons/folders/folder_open.svg",
      },
      named_directory_icons: {
        collapsed: folderNames,
        expanded: folderNamesExpanded,
      },
      file_stems: fileNames,
      file_suffixes: fileExtensions,
      file_icons: icons,
      folder_icons: folderIcons,
    },
  ],
};

fs.writeFile(
  "icon_themes/vscode-icon-theme.json",
  JSON.stringify(iconTheme),
  (err) => {
    if (err) {
      console.log("error", err);
    }
  }
);
