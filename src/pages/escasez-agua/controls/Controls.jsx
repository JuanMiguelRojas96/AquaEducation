import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";
import { min } from "three/webgpu";

const Controls = () => {

  return (<OrbitControls 
    makeDefault
  
    maxPolarAngle={Math.PI * 0.45}
    minPolarAngle={Math.PI * 0.45} 
    target={[0,5,-10]}
  
  />
  )
};

export default Controls;
