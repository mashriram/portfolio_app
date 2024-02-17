import React from "react";
import styles from "./Skill.modules.css";
import { Accordion, AccordionItem, Progress } from "@nextui-org/react";

export function Skill({ title, skills }) {
    return (
        <div className={styles.skill}>
            <Accordion>
                <AccordionItem key="1" aria-label={title} title={title}>
                    {skills.map((skill, idx) => (
                        <Progress
                            key={idx}
                            size="md"
                            value={skill.rating}
                            color="success"
                            label={skill.name}
                            showValueLabel={true}
                        />
                    ))}
                </AccordionItem>
            </Accordion>
        </div>
    );
}
