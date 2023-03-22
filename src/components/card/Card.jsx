import style from './card.module.scss'

const Card = ({icon,title,data}) => {
    return <div className={style.card}>
           <h3 className={style['card-title']}>{title}</h3>
           <p className={style['card-data']}>{data}</p>
           <img className={style['card-icon']} src={icon} alt="icono" />
    </div>

}
export default Card