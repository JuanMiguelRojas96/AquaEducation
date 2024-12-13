import { Text, Plane } from "@react-three/drei";
import { Texto3D } from "../../../../components/models/text3d/Texto3D-Desierto";
import { Button3D } from "../../../../components/models/button3d/Button3D-Desierto";
import { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DoubleSide } from "three";

const DesertElements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [buttonState, setButtonState] = useState("PRESIONA AQUÍ");

  const handleClick = useCallback(() => {
    if (!clickedOnce) {
      setClickedOnce(true);
      setButtonState("CERRAR");
      setIsVisible(true);
    } else {
      setClickedOnce(false);
      setIsVisible(false);
      setButtonState("PRESIONA AQUÍ");
    }
  }, [clickedOnce]);

  const groupRef = useRef();
  return (
    <>
      <Texto3D text={`QUIZ`} position={[-2, 12, 0]} />
      <Button3D text={buttonState} onClick={handleClick} />
      <group ref={groupRef} visible={isVisible}>
        <Plane args={[20, 8]} position={[0, -1.5, -0.1]}>
          <meshStandardMaterial
            attach="material"
            color="white"
            opacity={0}
            transparent
  
          />
        </Plane>
        <Text
          position={[0, 10, 0]}
          font="/fonts/Poppin-Bold.otf"
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
          textAlign="justify"
          maxWidth={16}
        >
      Muevete por el mapa y encuentra el objeto especial. Responde correctamente la pregunta, gana puntos y continua al siguiente nivel.   Buena Suerte! 
          <meshStandardMaterial attach="material" color="white"      side={DoubleSide} />
        </Text>
      </group>
    </>
  );
};

export default DesertElements;
