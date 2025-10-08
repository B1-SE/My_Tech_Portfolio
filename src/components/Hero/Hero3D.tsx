import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function RotatingCube() { // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#00bcd4" />
    </mesh>
  );
}

const Hero3D = () => {
  return (
    <section className="h-96 md:h-[560px] w-full bg-gradient-to-br from-slate-800 to-slate-900">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={<Html center>Loading 3D...</Html>}>
          <RotatingCube />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </section>
  );
};

export default Hero3D;
