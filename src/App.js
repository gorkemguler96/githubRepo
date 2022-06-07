import './App.css';
import { motion, useAnimation } from "framer-motion";
import {useRef} from "react";

function App() {

    const controls = useAnimation();
    const containerRef = useRef(null)
    const variants = {
        visible:{
            opacity:1,
            transition: {
                when:'beforeChildren',
                staggerChildren: 0.3,
            }
        },
        hidden:{
            opacity:0
        }
    }

    const item = {
        visible:{
            opacity:1,
            y:0,

        },
        hidden:{
            opacity:0,
            y:100,
        }
    }

  return (
    <div className={"container"} ref={containerRef}>
        {/*<motion.div*/}
        {/*    className={"box"}*/}
        {/*    animate={{*/}
        {/*        scale:[0,1.2,1.8,.2],*/}
        {/*        borderRadius:['20%','30%', '50%', '20%'],*/}
        {/*        rotate: [90,180,270]*/}
        {/*    }}*/}
        {/*    // drag*/}
        {/*    // whileHover={{*/}
        {/*    //     scale:2*/}
        {/*    // }}*/}
        {/*    // whileTap={{*/}
        {/*    //     rotate:360*/}
        {/*    // }}*/}
        {/*    // dragConstraints={containerRef}*/}
        {/*    // dragElastic={false}*/}
        {/*    initial={{*/}
        {/*        // borderRadius:'20%'*/}
        {/*    }}*/}
        {/*    // animate={{*/}
        {/*    //     rotate:360,*/}
        {/*    //     borderRadius:'20%',*/}
        {/*    //     scale:1.3*/}
        {/*    // }}*/}
        {/*    transition={{*/}
        {/*        duration:4,*/}
        {/*        // repeat:Infinity,*/}
        {/*    }}*/}
        {/*/>*/}



        {/*<motion.ul*/}
        {/*    className={"box"}*/}
        {/*    initial={"hidden"}*/}
        {/*    animate={"visible"}*/}
        {/*    variants={variants}*/}
        {/*>*/}
        {/*    <motion.li style={{*/}
        {/*        marginBottom:20,*/}
        {/*        width:20,*/}
        {/*        height:20,*/}
        {/*        backgroundColor:'blue',*/}
        {/*    }}*/}
        {/*    variants={item}*/}
        {/*    />*/}
        {/*    <motion.li style={{*/}
        {/*        marginBottom:20,*/}
        {/*        width:20,*/}
        {/*        height:20,*/}
        {/*        backgroundColor:'blue',*/}
        {/*    }}*/}
        {/*    variants={item}*/}
        {/*    />*/}
        {/*</motion.ul>*/}



    <motion.div className="box" animate={controls}>
        <button onClick={()=>controls.start({
            x:200,
            transition:{
                type:'spring',
                bounce:0.8
            },
        })}>Start</button>
        <button onClick={()=>controls.stop({
            scale:4
        })}>Stop</button>
    </motion.div>

    </div>
  );
}

export default App;
