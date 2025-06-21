// RoomPreview3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, SoftShadows } from '@react-three/drei';
import * as THREE from 'three';

export default function RoomPreview3D({ width, height, depth, color, cornerRadius, parts, showWall }) {
  const boxColor = {
    wood: '#a0522d',
    white: '#ffffff',
    black: '#000000',
    grey: '#999999',
    blue: '#0074cc',
    red: '#ff4444',
    green: '#4caf50',
    yellow: '#ffc107'
  }[color] || '#cccccc';

  return (
    <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <SoftShadows samples={8} />

      {/* Ground */}
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        args={[10, 10]}
        receiveShadow
      >
        <meshStandardMaterial color="#e0e0e0" />
      </Plane>

      {/* Optional Wall */}
      {showWall && (
        <Plane
          rotation={[0, 0, 0]}
          position={[0, 1.5, -2.5]}
          args={[5, 3]}
          receiveShadow
        >
          <meshStandardMaterial color="#dcdcdc" />
        </Plane>
      )}

      {/* Room Box */}
      <mesh
        position={[0, height / 200, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width / 100, height / 100, depth / 100]} />
        <meshStandardMaterial color={boxColor} roughness={0.4} metalness={0.1} />
      </mesh>

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
