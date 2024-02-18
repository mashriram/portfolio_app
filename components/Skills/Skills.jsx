import React from "react";
import { getConfig } from "@/config";
import { Skill } from "./Skill/Skill";
import styles from "./Skills.module.css";

function getAllSkills() {
  var skills = [];
  var config = getConfig();
  for (const techSkill of config.technicalSkills) {
    skills.push(
      <Skill
        key={techSkill.title}
        title={techSkill.title}
        skills={techSkill.skills}
      />
    );
  }
  return skills;
}
export function Skills() {
  var skills = getAllSkills();
  console.log(skills);

  return (
    <>
      <div className={styles.heading}>Technical Skills</div>
      <div className={styles.parent}>
        <div className={styles.skills}>{[...skills]}</div>
      </div>
    </>
  );
}
