import Image from "next/image";
import { FC } from 'react';
import styles from "./style.module.scss";

interface ContactsProps {
	src: string;
	text: string;
	f_size?: string;
	i_size?: string;
}

export const Contacts: FC<ContactsProps> = ({ src, text, f_size, i_size }) => {
	return (
		<div className={styles.container}>
			<Image style={{ width: i_size, height: i_size }} alt="Иконка контактов" src={src} />
			<p className={styles.text} style={{ fontSize: f_size }}>{text}</p>
		</div>
	);
};
