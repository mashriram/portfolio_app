import React from "react";
import { getConfig } from "@/config";
import { Skill } from "./Skill/Skill";


function getAllSkills(subject){
    var skills = []
    var config = getConfig();
    var i = 0;
    for(var i in config.technicalSkills.su){
        skills.push(
            <Skill key={i} value={config}></Skill>
        )
        i++;
    }
  return (
    

  );
}
export function Skills() {
    
}
