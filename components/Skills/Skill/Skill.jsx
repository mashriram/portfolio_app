import React from "react";
import styles from "./Skill.modules.css";
import { Progress } from "@nextui-org/react";

export function Skill({ label, value }) {
  return (
    <div className={styles.skill}>
      <Progress
        size="md"
        value={value}
        color="success"
        label={label}
        showValueLabel={true}
      />
    </div>
  );
}
