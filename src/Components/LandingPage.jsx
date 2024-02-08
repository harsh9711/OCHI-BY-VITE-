import React from 'react'

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <div className="textstructure mt-40 px-20">
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
           return <div className="masker">
<h1 className="uppercase text-9xl leading-[5.5vw] tracking-tighter font-['Founders_Grotesk'] font-semibold">
{item}</h1>
        </div> 
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className="text-md font-light tracking-tight leading-none">
                {item}
            </p>
        ))}
        <div className="start">
            <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full">start the project </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
