import { Canvas } from "@react-three/fiber";
import { ContaminationSolutionsModel } from "./ContaminationSolutionsModel.jsx";
import { OrbitControls, Sky } from "@react-three/drei";
import VideoContamination from "./VideoContamination.jsx";
import PostProcessing from "./postprocessing/PostProcessing.jsx";

export const ContaminationSolutions = () => {
  return (
    <Canvas camera={{ position: [0, 3, 3.5], fov: 105 }} shadows>
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
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        maxDistance={5}
      />
      <VideoContamination
        name="screen"
        position={[-0.1, 3.2, -3.9]}
        scale={2.15}
      />
      <ContaminationSolutionsModel />
      <PostProcessing />
    </Canvas>
  );
};

export default ContaminationSolutions;
