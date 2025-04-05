import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicsOfMotion = () => {
    const [show, setShow] = useState(false)
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "90vh",
                gap: "0.8rem"
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
                onClick={() => setShow(!show)}
                layout>
                clickclickclick
            </motion.button>
            <AnimatePresence mode="popLayout">
                {
                    show &&
                    <motion.div
                        initial={{
                            rotate: '0deg',
                            scale: 0,
                            y: 0
                        }}
                        animate={{
                            rotate: '180deg',
                            scale: 1,
                            y: [0, 100, -100, -100, 0]
                        }}
                        exit={{
                            rotate: '0deg',
                            scale: 0,
                            y: 0
                        }}
                        transition={{
                            duration: 2,
                            // ease: 'backInOut',
                            times: [0, 0.25, 0.5, 0.88, 1]
                        }}
                        style={{
                            width: 150,
                            height: 150,
                            background: 'black'
                        }}>

                    </motion.div >

                }
            </AnimatePresence>
        </div>
    )
}

export default BasicsOfMotion;