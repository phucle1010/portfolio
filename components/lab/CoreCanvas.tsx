"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Rig() {
  const group = useRef<THREE.Group>(null);

  const satellites = useMemo(() => {
    return [
      new THREE.Vector3(0, 1.28, 0),
      new THREE.Vector3(1.28, 0, 0),
      new THREE.Vector3(0, -1.28, 0),
      new THREE.Vector3(-1.28, 0, 0),
    ];
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.y = time * 0.08 + state.pointer.x * 0.18;
    group.current.rotation.x = state.pointer.y * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color="#22D3EE" wireframe />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.18, 0]} />
        <meshBasicMaterial color="#22D3EE" />
      </mesh>
      {satellites.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={index % 2 === 0 ? "#2563EB" : "#22D3EE"} />
        </mesh>
      ))}
    </group>
  );
}

export default function CoreCanvas({ playing }: { playing: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 4.2], fov: 36 }}
      frameloop={playing ? "always" : "demand"}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      tabIndex={-1}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Rig />
    </Canvas>
  );
}
