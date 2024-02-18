import React from "react";
import styles from "./HeroCard.module.css";
import { getConfig } from "../../config";
import Image from "next/image";

import linkedInImg from "@/public/images/person.jpg";
import githubImg from "@/public/images/person.jpg";
import personalImage from "@/public/images/person.jpg";
import Link from "next/link";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const imageMap = {
    linkedInImg: linkedInImg,
    githubImg: githubImg,
    personalImage: personalImage,
};

function getTags(config) {
    var items = [];
    var i = 0;
    for (var tag of config.hashtags) {
        items.push(
            <div className={styles.tag} key={i}>
                {tag}
            </div>
        );
        i++;
    }
    console.log(items);
    return items;
}
function getSocial(config) {
    var items = [];
    var i = 0;
    for (const item in config.social) {
        items.push(
            <div key={i}>
                <div className={styles.img}>
                    <Link href={config.social[item][1]}>
                        <FontAwesomeIcon
                            icon={config.social[item][2]}
                            size="2xl"
                        />
                    </Link>
                </div>
            </div>
        );
        i++;
    }
    return items;
}
export function HeroCard() {
    const config = getConfig();
    return (
        <div className={styles.parent}>
            <div className={styles.leftPane}>
                <div className={styles.hello}>Hello there! I&#39;m</div>
                <div className={styles.name}>{config.name}</div>
                <div className={styles.tagList}>{getTags(config)}</div>
                <div className={styles.social}>
                    <div className={styles.email}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        {config.email}
                    </div>
                    <div className={styles.phone}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        {config.phone}
                    </div>
                    <div className={styles.location}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        {config.location}
                    </div>
                </div>
                <div className={styles.connect}>{getSocial(config)}</div>
            </div>
            <div className={styles.rightPane}>
                <Image
                    className={styles.personalImage}
                    src={imageMap[config.personalImage]}
                    alt={"Image Of " + config.name}
                ></Image>
            </div>
        </div>
    );
}
