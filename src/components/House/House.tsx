import { useState } from 'react';

const Building = () => {
	// Состояние для цветов стен и крыши
	const [wallColor, setWallColor] = useState('#ffffff'); // Белый
	const [roofColor, setRoofColor] = useState('#d3d3d3'); // Светло-серый

	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			{/* Цветовые ползунки */}
			<div style={{ marginBottom: '20px' }}>
				<label>Цвет стен: </label>
				<input
					type="color"
					value={wallColor}
					onChange={(e) => setWallColor(e.target.value)}
				/>
			</div>
			<div style={{ marginBottom: '20px' }}>
				<label>Цвет крыши: </label>
				<input
					type="color"
					value={roofColor}
					onChange={(e) => setRoofColor(e.target.value)}
				/>
			</div>

			{/* SVG-изображение здания */}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
				{/* Основание */}
				<rect x="50" y="250" width="300" height="50" fill="green" />
				{/* Передняя стена */}
				<path d="M100,200 L300,200 L280,150 L80,150 Z" fill={wallColor} />
				{/* Боковая стена */}
				<path d="M300,200 L280,150 L380,150 L400,200 Z" fill={wallColor} />
				{/* Крыша */}
				<path d="M80,150 L280,150 L380,150 L300,100 L100,100 Z" fill={roofColor} />
				{/* Окна */}
				<rect x="120" y="160" width="40" height="20" fill="blue" />
				<rect x="240" y="160" width="40" height="20" fill="blue" />
				{/* Двери */}
				<rect x="320" y="180" width="40" height="60" fill="gray" />
			</svg>
		</div>
	);
};

export default Building;