import { FC, useEffect, useRef } from "react";
import styles from './style.module.scss';

declare global {
	interface Window {
		ymaps: any;
	}
}

export const Map: FC = () => {
	const mapContainer = useRef<HTMLDivElement>(null);
	const mapInstance = useRef<any>(null);

	useEffect(() => {
		if (!mapContainer.current || mapInstance.current) return;

		window.ymaps.ready(init);

		function init() {
			if (mapInstance.current) return;

			mapInstance.current = new window.ymaps.Map(mapContainer.current, {
				center: [55.842130, 52.098163],
				zoom: 10,
			});

			mapInstance.current.behaviors.disable('scrollZoom');

			const placemark = new window.ymaps.Placemark(
				[55.842130, 52.098163],
				{
					hintContent: "Баяр",
					balloonContent: "Елабуга, промышленная площадка АЛАБУГА, ул.20, 1",
				},
				{
					preset: "islands#icon",
					iconColor: "#0095b6",
				}
			);

			mapInstance.current.geoObjects.add(placemark);
		}

		return () => {
			if (mapInstance.current) {
				mapInstance.current.destroy();
				mapInstance.current = null;
			}
		};
	}, []);

	return <div ref={mapContainer} className={styles.map} />;
};