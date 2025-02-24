import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Building = () => {
	return (
		<group position={[0, 0.5, 0]}>
			{/* Основа здания */}
			<mesh position={[0, 0.25, 0]}>
				<boxGeometry args={[4, 2, 8]} />
				<meshStandardMaterial color="lightgray" />
			</mesh>

			{/* Крыша */}
			<mesh position={[0, 1.5, 0]} rotation={[0, 0, 0.2]}>
				<boxGeometry args={[4.2, 0.5, 8.2]} />
				<meshStandardMaterial color="silver" />
			</mesh>

			{/* Окна */}
			<mesh position={[2.01, 0.6, 1.5]}>
				<boxGeometry args={[0.1, 0.5, 3]} />
				<meshStandardMaterial color="skyblue" transparent opacity={0.7} />
			</mesh>

			{/* Двери */}
			<mesh position={[-2.01, 0.3, -3]}>
				<boxGeometry args={[0.1, 0.8, 1.5]} />
				<meshStandardMaterial color="gray" />
			</mesh>
		</group>
	);
};

const Scene3d = () => {
	return (
		<Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 5, 5]} intensity={1} />
			<Building />
			<OrbitControls />
		</Canvas>
	);
};

export default Scene3d;
