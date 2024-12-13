// src/pages/ProblemaContaminacion.js
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import IntroWater from './IntroWater.jsx';
import './ProblemaContaminacion.css';
import { Loader } from '@react-three/drei';

/**
 * ProblemaContaminacion component.
 *
 * This component renders the scene with a 3D animation of water pollution.
 *
 * @return {JSX.Element} The JSX element representing the component.
 */
const ProblemaContaminacion = () => {
  return (
    <main className="problema-contaminacion">
      <Canvas camera={{ position: [0, 2, 12] }} shadows className="canvas-background">
        <Suspense fallback={null}>
          <IntroWater />
        </Suspense>
      </Canvas>
      <Loader />
    </main>
  );
};

export default ProblemaContaminacion;
