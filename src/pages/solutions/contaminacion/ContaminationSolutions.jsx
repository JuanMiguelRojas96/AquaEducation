import { Canvas } from "@react-three/fiber";
import { ContaminationSolutionsModel } from "./ContaminationSolutionsModel.jsx";
import { Loader, OrbitControls, Sky } from "@react-three/drei";
import VideoContamination from "./VideoContamination.jsx";
import PostProcessing from "./postprocessing/PostProcessing.jsx";
import { Suspense, useCallback } from "react";
import Button3D from "../../../components/models/button3d/Button3D.jsx";
import { useNavigate } from "react-router-dom";

export const ContaminationSolutions = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/problemas-ambientales/escasez-del-agua");
  },  [navigate]);

  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 0], zoom: 1.5 }} shadows>
        <Suspense fallback={null}>
          <Sky
            sunPosition={[0, -10, -5]}
            inclination={0.2}
            azimuth={180}
            rayleigh={1}
            turbidity={10}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, -10, 5]} intensity={2} />
          <OrbitControls
            target={[0, 3, 0]}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 6}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            maxDistance={5}
          />
          <VideoContamination
            name="screen"
            position={[-0.1, 3.2, -3.9]}
            scale={2.15}
          />
          <Button3D
            text="Sig. Problema"
            onClick={handleClick}
            position={[-0.1, 1.8, -3.9]}
            size={[2.5, 0.5, 0.5]}
            colors={{ default: "#77E0F4", hovered: "#55C0E0" }}
            fontSize={0.3}
            font="/fonts/Poppins-Light.otf"
            fontColor="black"
          />
          <ContaminationSolutionsModel />
          <PostProcessing />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ContaminationSolutions;
