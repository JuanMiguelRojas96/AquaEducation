import React, { useRef, useState, useCallback } from "react";
import { useGLTF } from "@react-three/drei";

export function QuizContaminacionModel({ onBottleClick, onPaperClick, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/QuizContamination.glb");

  const [isBottleVisible, setBottleVisible] = useState(true);
  const [isPaperVisible, setPaperVisible] = useState(true);

  const handleBottleClick = () => {
    setBottleVisible(false);
    onBottleClick();
  };

  const handlePaperClick = () => {
    setPaperVisible(false);
    onPaperClick();
  };

  return (
    <group {...props} dispose={null} scale={0.2} position={[0, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Botellas */}
        {isBottleVisible && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Botellas.geometry}
            material={materials.anisotropic1SG}
            onClick={handleBottleClick} // Añadimos el manejador de clic
          />
        )}

        {/* Papeles */}
        {isPaperVisible && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Papeles.geometry}
            material={materials.phong2SG}
            onClick={handlePaperClick} // Añadimos el manejador de clic
          />
        )}

        {/* Otros objetos */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.lambert5SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.lambert6SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.lambert7SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.phong3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.anisotropic2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert10SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.lambert11SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.lambert12SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.lambert4SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models-3d/QuizContamination.glb");
