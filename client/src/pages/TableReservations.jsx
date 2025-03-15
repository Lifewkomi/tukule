import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../components/Models/tableModel';

const TableReservations = () => {
  return (
    <Canvas className=" bg-black h-screen w-screen" camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

export default TableReservations;