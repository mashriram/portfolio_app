import React from "react";
import { getButtonList } from "./buttonList";
import styles from "./NavBar.module.css";
import { getConfig } from "../../config";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
} from "@nextui-org/react";
import Link from "next/link";

function getItems() {
    var items = [];
    var i = 0;
    var buttons = getButtonList();
    for (const key in buttons) {
        items.push(
            <NavbarItem key={i}>
                <Button className={styles.buttons}>
                    <Link href={buttons[key]} className={styles.noLink}>
                        {key}
                    </Link>
                </Button>
            </NavbarItem>
        );
        i++;
    }
    return items;
}

export function NavBar() {
    return (
        <Navbar className={styles.navBar}>
            <NavbarBrand className={styles.name}>
                {getConfig().name}
            </NavbarBrand>
            <NavbarContent className={styles.navBarButtons}>
                {getItems()}
            </NavbarContent>
        </Navbar>
    );
}
