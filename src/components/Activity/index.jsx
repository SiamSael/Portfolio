import React, { useState } from "react";

const Activity = (activity, id) => {

    const [isHover, setIsHover] = useState(true);

    const handleHover = (event) => {
        event.preventDefault()
        setIsHover(!isHover)
    }
    return (
        <div className="activities__activity" key={id}>
            <img className={isHover ? "activities__activity--img" : "activities__activity--imgHide"} src={process.env.PUBLIC_URL + activity.img} alt={activity.alt} onMouseEnter={handleHover} onMouseOut={handleHover}/>
            <p className={isHover ? "activities__activity--descriptionHide" : "activities__activity--description"}>{activity.description}</p>
            <p className='activities__activity--title'>{activity.title}</p>
        </div>
    )
}

export default Activity