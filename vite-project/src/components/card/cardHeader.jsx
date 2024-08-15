import styles from './cardHeader.module.scss';

export const CardHeader = ({text}) => {
    return(
        <div className={styles.header}>
            <h2>{text}</h2>
        </div>
    );
};