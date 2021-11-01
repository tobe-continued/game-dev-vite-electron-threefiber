import { KeyboardControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Suspense, useMemo, useRef } from 'react';
import { CameraControls, Stats } from '@react-three/drei';
import { Experience } from '@Components/Experience';


export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
};
function App() {
  const canvasRef = useRef();
  const cameraControlRef = useRef<CameraControls | null>(null);
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] },
    ],
    []
  ); 
  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 90 }} onChange={(event) => console.log(event)}>
        {/* UTILS DEV */}
        <Stats />
        <axesHelper args={[5]} position={[0, 0.01, 0]} />
        <gridHelper args={[200, 200, 0xff0000, 'darkslategray']} position={[0, 0, 0]} />
        {/* UTILS PROD */}
        <CameraControls ref={cameraControlRef} />
        <OrbitControls />
        {/* COMPONENTS */}
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
