import React from "react";
import Card from "./Card";
import Images from "./images";
function Women()
{
    const womenShoes =
    [
    {name:"Air-Force-1-07",price:"13000",img:Images.wm1},
        {name:"dunk-low-x",price:"12500",img:Images.wm2},
{name:"invincible-3",price:"13000",img:Images.wm3},
     {name:"dunk-low-premium",price:"14000",img:Images.wm4},
      {name:"air-jordan-1-low",price:"10000",img:Images.wm5},
        {name:"air-force-pink",price:"12000",img:Images.wm6}
        
    ]
    return(
        <>
        <span className="text-5xl leading-5 text-center m-16 ">WOMEN</span>
        <div className="flex flex-wrap gap-3 m-auto mt-16 mb-16 justify-center lg:w-[100vw] sm:w-[75vw] ">
            
            {womenShoes.map((shoe)=>
            {
                return(
                    <Card shoename={shoe.name} price={shoe.price} img={shoe.img}/>
                )
            })}
            
        </div>
        </>
    )

}
export default Women