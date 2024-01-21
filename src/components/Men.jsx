import React from "react";
import Card from "./Card";
import Images from "./images";
function Men()
{
    const menShoes =
    [
        {name:"airforce-1",price:"12000",img:Images.m1},
        {name:"Killshot-2",price:"12500",img:Images.m2},
{name:"Killshot 2 leather",price:"13000",img:Images.m3},
     {name:"airforce-1-07",price:"14000",img:Images.m4},
      {name:"Court Vision",price:"10000",img:Images.m5},
        {name:"air-max-97",price:"12000",img:Images.m6}
        
    ]
    return(
        <>
        <span className="text-5xl leading-5 text-center m-16 ">MEN</span>
        <div className="flex flex-wrap gap-3 m-auto mt-16 mb-16 justify-center lg:w-[100vw] sm:w-[75vw] ">
            
            {menShoes.map((shoe)=>
            {
                return(
                    <Card shoename={shoe.name} price={shoe.price} img={shoe.img}/>
                )
            })}
            
        </div>
        </>
    )

}
export default Men