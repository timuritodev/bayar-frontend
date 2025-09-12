import { Contacts } from '@/components/Contacts/Contacts';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { Map } from '@/components/Map/Map';
import { useResize } from '@/hooks/useResize';
import Image from "next/image";
import { FC } from "react";
import home from "../../../images//icons/home.svg";
import email from "../../../images/email.svg";
import time from "../../../images/icons/time.svg";
import whatsapp from "../../../images/icons/whatsapp.svg";
import logo from "../../../images/logo_BAYAR.png";
import phone from "../../../images/phone.svg";
import styles from "./style.module.scss";

export const ContactsBlock: FC = () => {
	const { width } = useResize();

	const handleDownloadCertificates = () => {
		// Список PDF файлов для загрузки
		const certificates = [
			{
				name: 'Пожарный сертификат ГОСТ 32603-2021 1 класс',
				path: '/certificates/Pozharnyj-sertifikat-GOST-32603-2021-1-klass-1.pdf'
			},
			{
				name: 'Пожарный сертификат ГОСТ 32603-2021 2 класс',
				path: '/certificates/Pozharnyj-sertifikat-GOST-32603-2021-2-klass.pdf'
			},
			{
				name: 'Пожарный сертификат ТУ',
				path: '/certificates/Pozharnyj-sertifikat-TU-ROSS-RU.Z2623.OS03.03088.pdf'
			},
			{
				name: 'Санитарный сертификат',
				path: '/certificates/Sanitarnyj-sertifikat-TU-GOST-EZ-50.pdf'
			},
			{
				name: 'Сертификат соответствия 1 класс ГОСТ',
				path: '/certificates/Sertifikat-sootvestviya-1-klass-GOST-32603-2021.pdf'
			},
			{
				name: 'Сертификат соответствия 2 класс ГОСТ',
				path: '/certificates/Sertifikat-sootvestviya-2-klass-GOST-32603-2021.pdf'
			},
			{
				name: 'Сертификат соответствия ТУ',
				path: '/certificates/Sertifikat-Sootvetsviya-TU-ROSS-RU.Z2623.OS03.03087.pdf'
			}
		];

		// Загружаем каждый сертификат
		certificates.forEach(cert => {
			const link = document.createElement('a');
			link.href = cert.path;
			link.download = cert.name + '.pdf';
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	};

	return (
		<div className={styles.container}>
			{width > 767 ? (
				<>
					<div className={styles.wrapper}>
						<Image className={styles.logo} alt="Логотип BAYAR" src={logo} />
						<Contacts src={phone} text="+7 800 550-31-90" f_size="20px" i_size="40px" type="phone" />
						<Contacts src={whatsapp} text="+7 800 550-31-90" f_size="20px" i_size="40px" />
						<Contacts src={email} text="market@tatbayar.ru" f_size="20px" i_size="40px" type="mail" />
						<CustomButton buttonText={"Скачать сертификаты"}
							handleButtonClick={handleDownloadCertificates}
							type="button"
							className={styles.but}
						/>
					</div>
					<div className={styles.wrapper}>
						<h3 className={styles.title}>Свяжитесь с нами</h3>
						<Contacts src={time} text="Время работы: 8:00 - 17:00" f_size="20px" i_size="40px" />
						<Contacts src={home} text="Республика Татарстан, г. Елабуга, ОЭЗ «Алабуга», улица 20.1, здание 4" f_size="20px" i_size="40px" />
						<Map />
					</div>
				</>) : (
				<>
					<Image className={styles.logo} alt="Логотип BAYAR" src={logo} />
					<CustomButton buttonText={"Скачать сертификаты"}
						handleButtonClick={handleDownloadCertificates}
						type="button"
						className={styles.but}
					/>
					<h3 className={styles.title}>Свяжитесь с нами</h3>
					<Contacts src={phone} text="+7 800 550-31-90" f_size="20px" i_size="40px" type="phone" />
					<Contacts src={whatsapp} text="+7 800 550-31-90" f_size="20px" i_size="40px" />
					<Contacts src={email} text="market@tatbayar.ru" f_size="20px" i_size="40px" type="mail" />
					<Map />
					<Contacts src={time} text="Время работы: 8:00 - 17:00" f_size="20px" i_size="40px" />
					<Contacts src={home} text="Республика Татарстан, г. Елабуга, ОЭЗ «Алабуга», улица 20.1, здание 4" f_size="20px" i_size="40px" />
				</>
			)}
		</div>
	)
}
