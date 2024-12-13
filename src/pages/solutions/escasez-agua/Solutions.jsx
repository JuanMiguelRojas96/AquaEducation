import { Canvas } from "@react-three/fiber";
import {
  KeyboardControls,
  Loader,
  OrbitControls,
  PositionalAudio,
} from "@react-three/drei";
import React, { useCallback, useRef } from "react";
import Desert from "./world/Desert";
import Lights from "./lights/Lights";
import Staging from "./staging/Staging";
import { Physics } from "@react-three/rapier";
import useMovements from "./controls/key-movements";
import { Suspense } from "react";
import CharacterModel from "./world/CharacterModel";
import SphereRobot from "./world/SphereRobot";
import KeyImage from "./3d-elements/KeyImage";
import Iguana from "../../escasez-agua/world/Iguana";
import { Perf } from "r3f-perf";
import Video from "./world/Video";

const Solutions = () => {
  const map = useMovements();

  const customContainerStyles = {
    backgroundColor: "lightblue", // Change this to your desired color
    // Add other styles if needed
  };

  const audioRef = useRef();

  const handleAudio = useCallback((e) => {
    audioRef.current.play();
    audioRef.current.setVolume(10);
  }, []);

  return (
    <KeyboardControls map={map}>
      <Canvas shadows onClick={handleAudio}>
        <Suspense fallback={null}>
          <KeyImage />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <SphereRobot scale={0.5} />
            <Desert />
            <Iguana position={[10, 0, 8]} />
          </Physics>
          <Video
            name="screen"
            position={[-20, 10, 10]}
            scale={10}
            rotation={[0, Math.PI / 2, 0]} // Rotate 45 degrees around the x-axis
          />
          <group position={[-20, 10, 10]}>
            <PositionalAudio
              ref={audioRef}
              loop
              url="/sounds/desert-sound.mp3"
              distance={4}
            />
          </group>
        </Suspense>
      </Canvas>
      <Loader containerStyles={customContainerStyles} />
    </KeyboardControls>
  );
};

export default Solutions;
