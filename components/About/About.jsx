import React from "react";
import styles from "./About.module.css";
import { getConfig } from "../../config";

import aboutMeImg from "@/public/images/img921ab.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

function getTags(config) {
    var items = [];
    var i = 0;
    for (var item of config.aboutMeTags) {
        items.push(
            <div className={styles.tag} key={i}>
                {item}
            </div>
        );
        i++;
    }
    return items;
}
export function About() {
    var config = getConfig();
    return (
        <div className={styles.parent} id="about">
            <div className={styles.left}>
                <Image src={aboutMeImg} alt="aboutMe" fill />
            </div>
            <div className={styles.right}>
                <h3 className={styles.heading}> About Me</h3>
                <div className={styles.content}>{config.aboutMeText}</div>
                <div className={styles.tagsContainer}>{getTags(config)}</div>
                {/* <div className={styles.downloadButtonParent}>
                    <Button className={styles.downloadButton}>
                        <Link
                            href={config.downloadUrl}
                            download={"shriram_resume.pdf"}
                            target="_blank"
                        >
                            Download CV
                        </Link>
                    </Button>
                </div> */}
            </div>
        </div>
    );
}
