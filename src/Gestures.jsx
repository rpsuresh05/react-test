import { motion, MotionConfig } from "framer-motion";
const Gestures = () => {
    return (<div
        style={{
            display: 'grid',
            gap: '0.8rem',
            placeContent: "center",
            height: "100vh",
        }}>
        <MotionConfig
                        transition={{
                            duration: 0.125,
                            ease: "easeInOut",
                        }}>
            <motion.button
                style={{
                    background: 'rgb(86,1,245)',
                    color: "white",
                    fontSize: '1.8rem',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: 10,
                    padding: '10px'

                }}
                whileHover={{
                    scale: 1.05
                }}
                whileTap={{
                    scale: .95,
                    rotate: '100deg'
                }}>
                Click Me
            </motion.button>
            <motion.button
                style={{
                    background: 'rgb(186,1,245)',
                    color: "white",
                    fontSize: '1.8rem',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: 10,
                    padding: '10px'

                }}
                whileHover={{
                    scale: 1.05
                }}
                whileTap={{
                    scale: .95,
                    rotate: '-100deg'
                }}>
                Click Me
            </motion.button>
        </MotionConfig>
    </div>)
}

export default Gestures;
