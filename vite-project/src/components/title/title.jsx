import React from 'react';
import styles from './title.module.scss';

export const TitleComponent = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <h2 className={styles.subtitle}>{props.subtitle}</h2>
            <div className={styles.childrenContainer}>
                {props.children}
            </div>
        </div>
    );
};
