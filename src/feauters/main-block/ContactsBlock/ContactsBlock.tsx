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
				name: 'Сертификат качества 1',
				path: '/certificates/certificate1.pdf'
			},
			{
				name: 'Сертификат качества 2',
				path: '/certificates/certificate2.pdf'
			},
			{
				name: 'Сертификат соответствия',
				path: '/certificates/certificate3.pdf'
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
