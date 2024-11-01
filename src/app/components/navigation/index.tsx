"use client";
import { useContext, useEffect, useState } from "react";
import { sideBarContext } from "../context/sidebarContext";
import NavBar from "./navbar";
import SideBar from "./sidebar";

const Navigation = () => {

 const {isOpen,setIsOpen,toggle} = useContext(sideBarContext)
 const [screenWidth , setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

 useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize',handleResize);
    return () => {
        window.removeEventListener('resize',handleResize);
    }
 } ,[]);
 
 
 
 useEffect(() => {
        if (screenWidth > 640 && isOpen) {
          setIsOpen(false)
        }
 },[screenWidth])

   

    return (
        <>
         
     {isOpen && <SideBar toggle={toggle}></SideBar>}
     <NavBar isOpen={isOpen} toggle={toggle}></NavBar>
       </>

    );
};

export default Navigation;