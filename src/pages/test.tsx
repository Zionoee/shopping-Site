import {motion} from "framer-motion"

export const TestPage = ()=>{
const motionAnimate = {
    initial : {
    translateX : 0
    },
    animate : {
        translateX : [0, 80],
    },
    transition: {
        duration:0.5,
        repeat: Infinity,
        ease: "linear"
    }
}
    return(
        <div className="flex justify-center items-center h-screen text-white">
          <button className="relative bg-blue-100 py-5 px-10 rounded-sm font-semibold">
            <span className="relative z-40">hello world</span>
            <motion.span
            className="absolute top-0 left-[0] h-full w-[60%]
            bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 "
                initial = {motionAnimate.initial}
                animate = {motionAnimate.animate}
                // transition={motionAnimate.transition}
            >

            </motion.span>
          </button>
        </div>
    )
}

// from-transparent exists