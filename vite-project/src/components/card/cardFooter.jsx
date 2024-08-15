import styles from './cardFooter.module.scss';

export const CardFooter = ({content}) => {
    return(
        <div className={styles.footer}>
            <p>{content}</p>
        </div>
    );
};