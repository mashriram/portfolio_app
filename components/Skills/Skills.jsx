import React from "react";
import { getConfig } from "@/config";
import { Skill } from "./Skill/Skill";

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
    return [...skills];
}
