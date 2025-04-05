import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
const ViewBasedAnimations = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("isInView -> ", isInView)
    }, [isInView])

    return <>
        <div style={{
            height: "150vh"
        }}></div>
        <motion.div
            style={{
                height: "100vh",
                background: "black"
            }}
            initial={{
                opacity: 0
            }}
            // animate={{
            //     opacity: 1
            // }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 5
            }}
        >
        </motion.div>
        <div
            ref={ref}
            style={{
                height: "100vh",
                background: isInView ? "red" : "blue",
                transition: "5s background"
            }}>

        </div>
    </>
}

export default ViewBasedAnimations