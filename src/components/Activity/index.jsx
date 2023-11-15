import React, { useState } from "react";

const Activity = (activity, id) => {

    const [isHover, setIsHover] = useState(true);

    const setHover = () => {
        setIsHover(false)
    }
    const cancelHover = () => {
        setIsHover(true)
    }
    return (
        <div className="activities__activity" key={id} onMouseOver={setHover} onMouseOut={cancelHover}>
            <img className={isHover ? "activities__activity--img" : "activities__activity--imgHide"} src={process.env.PUBLIC_URL + activity.img} alt={activity.alt}/>
            <p className={isHover ? "activities__activity--descriptionHide" : "activities__activity--description"}>{activity.description}</p>
            <p className='activities__activity--title'>{activity.title}</p>
        </div>
    )
}

export default Activity