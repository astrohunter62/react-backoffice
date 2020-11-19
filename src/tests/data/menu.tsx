import React from "react";
import BugIcon from "@material-ui/icons/BugReport";
import { MenuDataItem } from "../../Menu/Menu";

const menu: MenuDataItem[] = [
  {
    type: "link",
    url: "/",
    title: "Dashboard",
  },

  {
    type: "label",
    title: "Components",
    items: [
      {
        type: "link",
        url: "/list",
        title: "List",
      },
      {
        type: "link",
        url: "/form",
        title: "Form",
      },
    ],
  },
  {
    type: "link",
    url: "/portfolio",
    title: "Disabled Link",
    isDisabled: true,
  },
  {
    type: "divider",
  },
  {
    type: "link",
    url: "/bug",
    title: "Report a bug",
    icon: <BugIcon />,
  },
];

export default menu;
