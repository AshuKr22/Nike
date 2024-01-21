import React from "react";
import Card from "./Card";
import img1 from "./images/body_shoe.png"
import { motion } from "framer-motion";
function Body()
{
    const imgVariants = {
        hidden: { x : "200vw" },
        visible: { 
          x: 0,
          transition: { 
            type:'spring',delay:0.5,
            duration : 2 }
        },
      }
      const childVariants= 
    {
        hidden:{opacity:0},
        visible: {opacity:1,
            transition: {
                duration:2,
                delay:1
            }
        },
        
    }
    return(
        <>
        <div className="top-section m-auto flex justify-around items-center w-[90vw] h-[90vh]">
            <motion.div
            variants={childVariants}
            initial="hidden"
            animate="visible"
             className="text-5xl leading-relaxed">
                JUST. <br />
                DO. <br />
                IT. <br />
            </motion.div>
            <div className="flex flex-col gap-2 items-center">
                
                <div className="Topshoe flex-col">
                <motion.img variants={imgVariants} initial="hidden" animate="visible" src={img1} className="" alt="" />
                </div>
                <motion.button variants={childVariants} initial="hidden" animate="visible" className="btn btn-primary w-32 m-0">Buy Now</motion.button>
                
                
            </div>
            

        </div>
        <hr className="w-72  ml-auto mr-auto mt-0 mb-0"/>
        <div className="mid-section w-[90vw] h-[90vh] m-auto flex flex-col p-5 justify-evenly">
            {/*  */}
            
                <span className="text-7xl "> TRENDING</span>
                
                <button className="w-32 btn btn-primary ">Shop</button>

            </div>
        </>

    )
}
export default Body