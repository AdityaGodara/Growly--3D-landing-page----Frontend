// src/canvas/MailCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import Scene from '../Scene'; // Make sure this path is correct

const MailCanvas = () => {
    return (
        <Canvas
            
          camera={{ position: [100, 150, 300], fov: 75 }}
          className="mail-canvas" // This class needs CSS dimensions
          shadows // Added shadows for better visuals if your model casts them
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={2} />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.2}
          />
          <Suspense fallback={null}>
            <Scene/>
          </Suspense>
          <Environment preset="city" />
        </Canvas>
    );
};

export default MailCanvas;