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
          <img src="./images/logo.png" alt="" />
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
                  <a href="https://www.facebook.com/amo50x"><FaFacebook/></a>
                  <a href="https://github.com/Amo50X"><FaGithub/></a>
                  <a href="https://linkedin.com/in/amogelang-sibanda-973657184"><FaLinkedin/></a>
                </div>
                <a href="./AJ Sibanda CV 2024.pdf"><button className="cv">Download CV</button></a>
            </div>
            <motion.div ref={constraintRef} style={{padding: "1px"}}>
                <motion.img src="./images/me2.jpg" alt="" 
                  initial={{
                    borderRadius:"30px"
                  }}
                  whileHover={{
                    borderRadius: ['30px','0','0','30px'],
                    scale: [1,0.9,0.9,1]
                  }}
                />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Home