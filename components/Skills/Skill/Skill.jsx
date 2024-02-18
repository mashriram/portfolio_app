import React from "react";
import styles from "./Skill.module.css";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  Progress,
} from "@nextui-org/react";

export function Skill({ title, skills }) {
  return (
    <div className={styles.skill}>
      <Card className={styles.card}>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label={title}
            title={title}
            classNames={{ title: styles.accordion }}
          >
            {skills.map((skill, idx) => (
              <div className={styles.spacer} key={idx}>
                <Card className={styles.progress}>
                  <Progress
                    key={idx}
                    size="md"
                    value={skill.rating}
                    color="warning"
                    label={skill.name}
                    showValueLabel={true}
                    classNames={{ label: styles.label }}
                  />
                </Card>
              </div>
            ))}
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}
