import Card from "../card/Card"
import { CARDS_INFO } from "../../constants/cards-info"
import style from './cards-container.module.scss'

const CardsContainer = () => {
    return (
        <div className={style['cards-container']}>
            {CARDS_INFO.map(card =>(
                <Card key={card.id} {...card}/>
            ))}
        </div>
    )
        
}

export default CardsContainer