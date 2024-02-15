import React from "react";
import { getButtonList } from "./buttonList";
import styles from "./NavBar.modules.css";
import { getConfig } from "../../config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

function getItems() {
  var items = [];
  var i = 0;
  for (const key in getButtonList()) {
    items.push(
      <div className={styles.buttonSmall} key={i}>
        <a href={getButtonList[key]} className={styles.noLink}>
          {key}
        </a>
      </div>
    );
    i++;
  }
  return items;
}

export function NavBar() {
  return (
    <NavBar>
      <div className={styles.background}>
        <h1>Hello NextJS</h1>
        {/* <div className={styles.name}>{getConfig().name}</div> */}
        {/* <div className={styles.buttons}>{getItems()}</div> */}
      </div>
    </NavBar>
  );
}
