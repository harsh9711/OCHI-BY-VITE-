import React from 'react'
function Cards () {
return (
<div className='w-full h-screen bg-zinc-900 px-32 flex items-center gap-5'>
<div className='cardcontainer h-[50vh] w-1/2'>
<div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
    <button className='absolute rounded-full border-2 px-5 py-1 left-10 bottom-10'>&copy; 2019-2022</button>
</div>
</div>
<div className= 'cardcontainer flex gap-5 w-1/2 h-[50vh]'>
<div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
     <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
    <button className='absolute rounded-full border-2 px-5 py-1 left-10 bottom-10'>&copy; 2019-2022</button>

</div>
<div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
     <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
    <button className='absolute rounded-full border-2 px-5 py-1 left-10 bottom-10'>&copy; 2019-2022</button>

</div>
</div>
</div>
)
}
export default Cards
