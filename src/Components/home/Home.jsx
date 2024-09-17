import "./Home.css"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const Home = () => {

  const constraintRef = useRef();


  return (
    <section className="home-section">
        <div className="logo">
          <img src="src/assets/logo.png" alt="" />
        </div>
        <motion.div className='home'
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{
            type: "spring"
          }}
        >

            <div >
                <h3>Hello World!</h3>
                <h1>I'm Amogelang Sibanda</h1>
                <h2>A Graphic Designer</h2>
                <div>
                  <a href=""><FaFacebook/></a>
                  <a href=""><FaGithub/></a>
                  <a href=""><FaLinkedin/></a>
                </div>
            </div>
            <motion.div ref={constraintRef} style={{padding: "1px"}}>
                <motion.img src="src/assets/me2.jpg" alt="" 
                  drag
                  dragConstraints={constraintRef}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 10}}
                />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Home