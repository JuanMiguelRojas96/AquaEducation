import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Controls from "../../ProblemasMedioAmbientales/Acidification/Problem Introduccion/Control/ControlCamera";
import Lights from "../../ProblemasMedioAmbientales/Acidification/Problem Introduccion/Lights/Lights";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import {
  Html,
  OrthographicCamera,
  Plane,
  Sky,
  Text,
  Text3D,
} from "@react-three/drei";
import IntroModels from "../../ProblemasMedioAmbientales/Acidification/Problem Introduccion/IntroModels";

const QuizAcidification = () => {
  const handleOptionClick = (option) => {
    if (option === "carbonato") {
      alert(
        "¡Correcto! Los corales necesitan carbonato para construir sus estructuras."
      );
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es 'carbonato'.");
    }
  };
  const [hoveredOption, setHoveredOption] = useState(null);

  const handlePointerOver = (option) => setHoveredOption(option);
  const handlePointerOut = () => setHoveredOption(null);

  const textQuestion =
    "Los corales pierden su capacidad de construir sus " +
    "\nestructuras debidoa la falta de __________ en el agua.";
  return (
    <Canvas
      shadows
      camera={{ position: [0, -10, 0], fov: 120 }}
      className="canvas-background"
    >
      <Suspense fallback={null}>
        <Controls />
        {/* <Lights /> */}
        <directionalLight
          castShadow
          position={[6, 12, 26]}
          shadow-mapSize={[2048, 2048]}
          color={"#fff7de"}
          intensity={2}
        >
          <OrthographicCamera
            attach="shadow-camera"
            args={[-10, 10, 10, -10]}
          />
        </directionalLight>

        <EffectComposer>
          <Pixelation granularity={0.8} pixelSize={2} />
        </EffectComposer>

        <Sky
          sunPosition={[0, 12, 26]}
          inclination={0.2}
          azimuth={90}
          mieCoefficient={0.005}
          mieDirectionalG={0.07}
          rayleigh={1}
          turbidity={1}
        />

        {/* Model */}
        <group scale={4} position={[0, 80, 0]}>
          <IntroModels />
        </group>

        {/* Quiz Section */}
        <group scale={10} position={[-60, -10, -30]}>
          {/* Pregunta */}
          <Plane args={[38, 12]} position={[10, 0, -2]}>
            <meshStandardMaterial attach="material" opacity={0.4} transparent />
          </Plane>
          <Text3D
            font="/fonts/Poppins-Bold.json"
            position={[-7, 3.8, -2]}
            size={0.6}
            color={"black"}
            height={0.03}
            curveSegments={8}
            bevelEnabled
            bevelThickness={0.001}
            bevelSize={0.005}
          >
            <meshStandardMaterial attach="material" color="blue" />
            ¿Qué ocurre con los corales cuando el agua del océano se vuelve más
            ácida?
          </Text3D>
          <Text3D
            font="/fonts/Poppins-Bold.json"
            position={[-5, 0.8, -2]}
            size={0.6}
            color={"black"}
            height={0.03}
            curveSegments={8}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.0005}
          >
            <meshStandardMaterial attach="material" color="blue" />
            {textQuestion}
          </Text3D>
          {/* Opciones */}(
          <>
            <Text3D
              font="/fonts/Poppins-Bold.json"
              position={[0, -2, 0]}
              size={hoveredOption === "oxigeno" ? 0.5 : 0.4} // Cambia tamaño
              height={0.1}
              curveSegments={8}
              bevelEnabled
              bevelThickness={0.01}
              bevelSize={0.005}
              onPointerOver={() => handlePointerOver("oxigeno")}
              onPointerOut={handlePointerOut}
              onClick={() =>
                alert(
                  "Respuesta incorrecta. La respuesta correcta es 'carbonato'."
                )
              }
            >
              <meshStandardMaterial
                attach="material"
                color={hoveredOption === "oxigeno" ? "red" : "blue"} // Cambia color
              />
              Oxígeno
            </Text3D>

            <Text3D
              font="/fonts/Poppins-Bold.json"
              position={[4, -2, 0]}
              size={hoveredOption === "carbonato" ? 0.5 : 0.4}
              height={0.1}
              curveSegments={8}
              bevelEnabled
              bevelThickness={0.01}
              bevelSize={0.005}
              onPointerOver={() => handlePointerOver("carbonato")}
              onPointerOut={handlePointerOut}
              onClick={() =>
                alert(
                  "¡Correcto! Los corales necesitan carbonato para construir sus estructuras."
                )
              }
            >
              <meshStandardMaterial
                attach="material"
                color={hoveredOption === "carbonato" ? "green" : "blue"}
              />
              Carbonato
            </Text3D>

            <Text3D
              font="/fonts/Poppins-Bold.json"
              position={[9, -2, 0]}
              size={hoveredOption === "sodio" ? 0.5 : 0.4}
              height={0.1}
              curveSegments={8}
              bevelEnabled
              bevelThickness={0.01}
              bevelSize={0.005}
              onPointerOver={() => handlePointerOver("sodio")}
              onPointerOut={handlePointerOut}
              onClick={() =>
                alert(
                  "Respuesta incorrecta. La respuesta correcta es 'carbonato'."
                )
              }
            >
              <meshStandardMaterial
                attach="material"
                color={hoveredOption === "sodio" ? "orange" : "blue"}
              />
              Sodio
            </Text3D>
          </>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default QuizAcidification;
