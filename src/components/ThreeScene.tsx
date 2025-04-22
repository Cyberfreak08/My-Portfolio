import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

interface ParticleProps {
  position: [number, number, number];
  color: string;
}

const Particle: React.FC<ParticleProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

const DistortSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const sphereColor = theme === 'dark' ? '#a855f7' : '#7e22ce';

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
      <MeshDistortMaterial 
        color={sphereColor} 
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Particles: React.FC = () => {
  const { theme } = useTheme();
  const baseColor = theme === 'dark' ? '#06b6d4' : '#0e7490';
  
  const positions: [number, number, number][] = Array.from({ length: 100 }, () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  ]);

  return (
    <>
      {positions.map((position, index) => (
        <Particle 
          key={index} 
          position={position}
          color={baseColor}
        />
      ))}
    </>
  );
};

const ThreeScene: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Canvas 
      camera={{ position: [0, 0, 5] }} 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <DistortSphere />
      <Particles />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default ThreeScene;