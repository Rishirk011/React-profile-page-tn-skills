import styles from "../card/card.module.css";
import favActivities from "../../data/activities.js"
const Card = () => {

    return <>
        {favActivities.map((activity) => (
            <div className={styles.cardComponent} style={{ textAlign: 'center' }}
            key={activity.id}>

                <h3 style={{ margin: '0.25rem 0' }}>
                    {activity.title}
                </h3>

                <img src={activity.img} alt={activity.alt} width={'75px'} style={{ margin: '0.5rem' }} />

                <p style={{ margin: '0.25rem 0' }}>
                    {activity.desc}
                </p>

            </div>
            ))
        }
    </>

}

export default Card;