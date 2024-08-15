import styles from './cardGrid.module.scss'

import { Card } from "./card"
import { CardBody } from "./cardBody"
import { CardFooter } from "./cardFooter"
import { CardHeader } from "./cardHeader"

export const CardGrid = ({ cards }) => {
    return (
        <div className={styles.cardGrid}>
            {cards.map((card, index) => (
                <Card key={index}>
                    <img src={card.image} alt={card.title} className={styles.cardImage} />
                    <CardHeader text={card.title} />
                    <CardBody content={card.textContent} />
                    <CardFooter content={card.footerContent} />
                </Card>
            ))}
        </div>
    )
}
