import React from "react";
import styles from "./Cerification.module.css";
import { getConfig } from "@/config";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
export function Certifications() {
    let config = getConfig().certifications;
    console.log(config);
    return (
        <div className={styles.parent}>
            <div className={styles.body}>
                <div className={styles.heading} id="certifications">
                    Certifications
                </div>
                <div className={styles.certificateGrid}>
                    {config.map((item, index) => {
                        return (
                            <Card
                                shadow="sm"
                                key={index}
                                isPressable
                                className={styles.card}
                                onPress={function goToUrl() {
                                    window.open(item.link);
                                }}
                            >
                                <CardBody className={styles.cardBody}>
                                    <Image
                                        src={item.resource}
                                        shadow="sm"
                                        radius="lg"
                                        alt={item.name}
                                        className={styles.image}
                                        width="100%"
                                    />
                                </CardBody>
                                <CardHeader className={styles.cardHeader}>
                                    <div className={styles.name}>
                                        {item.name}
                                    </div>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
