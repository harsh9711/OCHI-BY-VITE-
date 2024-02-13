import React, { useEffect, useState } from 'react';

const Eyes=()=> {
  const [rotateLeftEye, setRotateLeftEye] = useState(0);
  const [rotateRightEye, setRotateRightEye] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Eye positions 
      const leftEyeX = window.innerWidth * 0.35;
      const rightEyeX = window.innerWidth * 0.65;
      const eyeY = window.innerHeight / 2;

      // Calculate deltas from mouse to eye centers
      const deltaXLeft = mouseX - leftEyeX;
      const deltaYLeft = mouseY - eyeY;
      const deltaXRight = mouseX - rightEyeX;
      const deltaYRight = mouseY - eyeY;

      // Calculate angles for each eye
      const angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
      const angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);

      // Update rotation state for each eye
      setRotateLeftEye(angleLeft - 180);
      setRotateRightEye(angleRight - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll   data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100" style={{ transform: `rotate(${rotateLeftEye}deg)` }}>
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10"></div>
              <div className="absolute top-[50%] left-[50%] transform -translate-x-[225%] -translate-y-[50%] w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100" style={{ transform: `rotate(${rotateRightEye}deg)` }}>
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10"></div>
              <div className="absolute top-[50%] left-[50%] transform -translate-x-[225%] -translate-y-[50%] w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
