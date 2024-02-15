import React from "react";
import styles from "./HeroCard.modules.css";
import { getConfig } from "../../config";

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
        <div className={styles.img}>{config.social[item][0]}</div>
        <div className={styles.text}>{config.social[item][1]}</div>
      </div>
    );
    i++;
  }
  return items;
}
export function HeroCard() {
  const config = getConfig();
  return (
    <div>
      <div className={styles.leftPane}>
        <div className={styles.hello}>Hello There</div>
        <div className={styles.name}>{config.name}</div>
        <div className={styles.tagList}>{getTags(config)}</div>
        <div className={styles.email}>
          <div className={styles.icon}>img</div>
          {config.email}
        </div>
        <div className={styles.location}>
          <div className={styles.icon}>img</div>
          {config.location}
        </div>
        <div className={styles.social}>{getSocial(config)}</div>
      </div>
    </div>
  );
}
