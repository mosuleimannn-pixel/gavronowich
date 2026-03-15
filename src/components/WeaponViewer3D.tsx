"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

interface WeaponModelProps {
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
}

function WeaponModel({ modelPath, scale = 1, rotation = [0, 0, 0], position = [0, 0, 0] }: WeaponModelProps) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Gentle floating animation
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + rotation[1];
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05 + position[1];
    }
  });

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene.clone()} />
    </group>
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#ff4d00] border-t-transparent rounded-full animate-spin" />
      </div>
    </Html>
  );
}

interface WeaponViewer3DProps {
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
  className?: string;
  autoRotate?: boolean;
  showControls?: boolean;
}

export default function WeaponViewer3D({
  modelPath,
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  className = "",
  autoRotate = true,
  showControls = true,
}: WeaponViewer3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0.3, 2.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[0, -5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[0, 3, 2]} intensity={0.5} color="#ff4d00" />

        <Suspense fallback={<LoadingSpinner />}>
          <WeaponModel
            modelPath={modelPath}
            scale={scale}
            rotation={rotation}
            position={position}
          />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={5}
            blur={2.5}
            far={4}
          />
        </Suspense>

        {showControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate={autoRotate}
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        )}
      </Canvas>
    </div>
  );
}

// Preload models for better performance
export function preloadWeaponModels() {
  useGLTF.preload("/models/glock_17_stock_model.glb");
  useGLTF.preload("/models/ar-15_slr.glb");
  useGLTF.preload("/models/remington_870_shotgun.glb");
  useGLTF.preload("/models/ak-47.glb");
}
