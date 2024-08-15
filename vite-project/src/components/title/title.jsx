import React from 'react';
import styles from './title.module.scss';

export const TitleComponent = ({ title, subtitle, children }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
};
