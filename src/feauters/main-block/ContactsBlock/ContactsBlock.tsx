import { Contacts } from '@/components/Contacts/Contacts';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { Map } from '@/components/Map/Map';
import Image from "next/image";
import { FC } from "react";
import home from "../../../images//icons/home.svg";
import email from "../../../images/email.svg";
import time from "../../../images/icons/time.svg";
import whatsapp from "../../../images/icons/whatsapp.svg";
import logo from "../../../images/logo_BAYAR.png";
import phone from "../../../images/phone.svg";
import styles from "./style.module.scss";

export const ContactsBlock: FC = () => (
	<div className={styles.container}>
		<div className={styles.wrapper}>
			<Image className={styles.logo} alt="Логотип BAYAR" src={logo} />
			<Contacts src={phone} text="+7 800 550-31-90" f_size="20px" i_size="40px" />
			<Contacts src={whatsapp} text="+7 800 550-31-90" f_size="20px" i_size="40px" />
			<Contacts src={email} text="market@tatbayar.ru" f_size="20px" i_size="40px" />
			<CustomButton buttonText={"Скачать сертификаты"}
				// handleButtonClick={handleSubmit(onSubmit)}
				// disabled={!isDirty || !isValid}
				type="submit"
				className={styles.but}
			/>
		</div>
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Свяжитесь с нами</h3>
			<Contacts src={time} text="Время работы: 8:00 - 17:00" f_size="20px" i_size="40px" />
			<Contacts src={home} text="Республика Татарстан, г. Елабуга, ОЭЗ «Алабуга», улица 20.1, здание 4" f_size="20px" i_size="40px" />
			<Map />
		</div>
	</div>
);
