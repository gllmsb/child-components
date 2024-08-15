import styles from './cardBody.module.scss';

export const CardBody = ({content}) => {
    return(
        <div className={styles.body}>
            <p>{content}</p>
        </div>
    );
};