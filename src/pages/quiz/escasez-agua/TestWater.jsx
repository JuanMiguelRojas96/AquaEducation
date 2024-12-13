import { Canvas } from "@react-three/fiber";
import {
  Hud,
  KeyboardControls,
  Loader,
  OrbitControls,
  PositionalAudio,
} from "@react-three/drei";
import React, { useCallback, useRef, useState } from "react";
import Desert from "./world/Desert";
import Lights from "./lights/Lights";
import Controls from "./controls/Controls";
import Staging from "./staging/Staging";
import { Physics } from "@react-three/rapier";
import useMovements from "./controls/key-movements";
import { Suspense } from "react";
import CharacterModel from "./world/CharacterModel";
import Robot from "./world/Robot";
import SphereRobot from "./world/SphereRobot";
import KeyImage from "./3d-elements/KeyImage";
import Iguana from "../../escasez-agua/world/Iguana";
import { Perf } from "r3f-perf";
import Video from "./world/Video";
import { RotationOps } from "@dimforge/rapier3d-compat";
import DesertModified from "./world/DesertModified";
import WaterBottle from "./3d-elements/collectibles/WaterBottle";
import HudTest from "./hud/HudTest";

const TestWater = () => {
  const map = useMovements();

  const [endLevel, setEndLevel] = useState(false);

  const customContainerStyles = {
    backgroundColor: "lightblue",
  };

  const audioRef = useRef();

  const handleAudio = useCallback((e) => {
    audioRef.current.play();
    audioRef.current.setVolume(10);
  }, []);

  const finalizoNivel = () => {
    console.log("SE TERMINOOO EL NIVEL");
    setEndLevel(true);
  };

  return (
    <KeyboardControls map={map}>
      <Canvas shadows onClick={handleAudio}>
        <Suspense fallback={null}>
          <KeyImage />
          <Lights />
          <Staging />
          <Physics debug={false}>
            <Desert />
            <WaterBottle finishedLevel={finalizoNivel} />
            <CharacterModel />
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
      <HudTest endLevel={endLevel} />
    </KeyboardControls>
  );
};

export default TestWater;
