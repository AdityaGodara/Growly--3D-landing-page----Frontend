import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import Room from '../Room.jsx';

const CanvasModel = () => {
    return (
        <Canvas
          camera={{ position: [100, 150, 300], fov: 12 }}
          className="canvas"
        >
          <ambientLight intensity={2} />
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.4}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.7}
            maxAzimuthAngle={Math.PI / 2}
            dampingFactor={0.01}
          />  
          <Suspense fallback={null}>
            <Room/>
          </Suspense>
          <Environment preset="city" />
        </Canvas>
    );
};

export default CanvasModel;