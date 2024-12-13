import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, Plane, Text, Sky } from "@react-three/drei";
import { Suspense, useState } from "react";
import { QuizContaminacionModel } from "./QuizContaminacionModel.jsx";

export const QuizContaminacion = () => {
  const [tasks, setTasks] = useState([
    { id: "bottles", text: "- Recoge las botellas que están contaminando el océano.", completed: false },
    { id: "papers", text: "- Recoge las bolsas de plástico y salva a las tortugas.", completed: false },
  ]);
  const [score, setScore] = useState(0); // Puntaje inicial en porcentaje

  const handleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
    setScore((prevScore) => prevScore + 50); // Incrementa el puntaje en un 50%
  };

  return (
    <>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Sky
            sunPosition={[0, 0.5, -5]}
            inclination={0.2}
            azimuth={180}
            mieCoefficient={0.005}
            mieDirectionalG={0.07}
            rayleigh={1}
            turbidity={2}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[0, -10, 5]} intensity={2} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            maxDistance={5}
          />
          <QuizContaminacionModel
            onBottleClick={() => handleTaskCompletion("bottles")}
            onPaperClick={() => handleTaskCompletion("papers")}
          />

          {/* Panel de texto */}
          <Plane args={[3.5, 2]} position={[-3.5, 1, -0.1]} castShadow>
            <meshStandardMaterial
              attach="material"
              color="white"
              side={2}
              opacity={1}
              transparent
            />
          </Plane>
          <Text
            position={[-3.5, 1.6, 0]} // Ajusta la posición del texto
            font="/fonts/Poppin-Bold.otf"
            fontSize={0.2}
            color="black"
            anchorX="center"
            anchorY="middle"
            textAlign="left"
            maxWidth={3}
          >
            {`Puntaje: ${score}% 
            ¡Salva la fauna Marina!`}
          </Text>
          {tasks.map((task, index) => (
            <Text
              key={task.id}
              position={[-4.7, 1.1 - index * 0.5, 0]} // Ajusta la posición vertical según el índice
              font="/fonts/Poppins-Light.otf"
              fontSize={0.13}
              color={task.completed ? "green" : "black"}
              anchorX="left"
              anchorY="middle"
              textAlign="left"
              maxWidth={2.8}
            >
              {task.completed ? `✔ ${task.text}` : task.text}
            </Text>
          ))}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default QuizContaminacion;