import "./Nav.css"
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { BsJournalCode } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');


  return (

    <nav>
        <a className={activeNav === '#' ? 'active': ''} href="#" onClick={() => setActiveNav('#')}><FaHome/></a>
        <a className={activeNav === '#about' ? 'active': ''} href="#about" onClick={() => setActiveNav('#about')}><FaList/></a>
        <a className={activeNav === '#journey' ? 'active': ''} href="#journey" onClick={() => setActiveNav('#journey')}><BsJournalCode/></a>
        <a className={activeNav === '#skills' ? 'active': ''} href="#skills" onClick={() => setActiveNav('#skills')}><GiSkills/></a>
        <a className={activeNav === '#work' ? 'active': ''} href="#work" onClick={() => setActiveNav('#work')}><MdOutlineWorkOutline/></a>
    </nav>    

  )
}

export default Nav