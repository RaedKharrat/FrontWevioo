import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RotatingGlobe = () => {
  return (
    <Canvas
      style={{ height: "300px", width: "300px" }}
      camera={{ position: [3, 3, 3] }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Globe */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            "https://threejs.org/examples/textures/earth.jpg"
          )}
        />
      </mesh>

      {/* Orbit Controls */}
      <OrbitControls autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

export default RotatingGlobe;