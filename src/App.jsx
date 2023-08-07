import { useEffect, useState } from "react";

function App() {
	const [enabled, setEnabled] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		console.log("efecto", { enabled });
		const handleMove = event => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};

		if (enabled) {
			// solo su es true ejecuta el evento
			window.addEventListener("pointermove", handleMove);
		}

		//cleanup
		//--> cuando el componente se desmonta funciona
		return () => {
			//Limpia bien el evento
			window.removeEventListener("pointermove", handleMove);
			setPosition({ x: 0, y: 0 });
		};
	}, [enabled]);

	return (
		<main>
			<div
				style={{
					position: "absolute",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					border: "1px solid #fff",
					borderRadius: "50%",
					opacity: 0.8,
					pointerEvents: "none",
					left: -25,
					top: -25,
					width: 50,
					height: 50,
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			></div>
			<h3>Proyecto 3</h3>
			<button onClick={() => setEnabled(!enabled)}>
				{enabled ? "Desactivar" : "Activar"} Seguir Puntero
			</button>
		</main>
	);
}

export default App;
