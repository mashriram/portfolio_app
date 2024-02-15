import React from "react";
import styles from "./About.modules.css";
import { getConfig } from "../../config";

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
    <div className={styles.parent}>
      <div className={styles.left}>{config.aboutMeImage}</div>
      <div className={styles.right}>
        <h3 className={styles.heading}> About Me</h3>
        <div className={styles.content}>{config.aboutMeText}</div>
        <div className={styles.tagsContainer}>{getTags(config)}</div>
        <div className={styles.downloadButton}>
          <a href={config.downloadUrl}>Download CV</a>
        </div>
      </div>
    </div>
  );
}
