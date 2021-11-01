import { CuboidCollider, RigidBody } from '@react-three/rapier';

export const Experience = () => {
  return (
    <>
      {/* SETTINGS */}
      <color attach="background" args={['#303030']} />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={5}
        castShadow
        color={'#C0D346'}
      />
      {/* STAGE */}
      <RigidBody type="fixed" position={[0, 0, 0]} friction={20}>
        <mesh
          scale={1}
        >
          <CuboidCollider position={[0, 0, 0]} args={[0.5, 0.5, 0.5]} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </RigidBody>
    </>
  );
};
