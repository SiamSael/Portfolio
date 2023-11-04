import {animate, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion";

const ProgressBar = ({value}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const progressText = useRef(null);
    useEffect(()=> {
        if (progressText.current != null) {
            animate(0, value, {
                duration : 2.5, 
                onUpdate : (currentValue) => {
                    progressText.current.textContent = currentValue.toFixed(0)
                }
            });
        }
    }, [value])

    return (
        <div ref={ref}>
            <div className="progressBar">
                <motion.div className="progressBar__content" animate={ isInView ? {width: `${value}%`} : {}} transition={{duration: 2.5}}></motion.div>
                <motion.div className="progressBar__percent"><p ref={progressText}>0</p><p>%</p></motion.div>
            </div>
        </div>
    )
}

export default ProgressBar
