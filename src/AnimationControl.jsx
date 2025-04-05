import { motion, useAnimationControls } from "framer-motion"

const AnimationControl = () => {
    const control = useAnimationControls();

    return <div
        style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}>
        <button style={{
            background: 'rgb(186,1,245)',
            color: "white",
            fontSize: '1.8rem',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 10,
            padding: '10px'

        }}
        onClick={() => control.start("flip")}>
            flip
        </button>
        <motion.div 
        style={{
            width: 150,
            height: 150,
            background: 'black'
        }}
        variants={
            {
                initial: {
                    rotate: '0deg'
                },
                flip :{
                    rotate: '120deg'
                }
            }
        }
        initial="initial"
        animate={control}>

        </motion.div >
    </div>
}

export default AnimationControl