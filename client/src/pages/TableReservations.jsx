import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../components/Models/tableModel';

const TableReservations = () => {
  return (
    <Canvas camera={{ position: [1, 2, 3], fov: 50 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

export default TableReservations;
