import { FC } from "react";
import Image from 'next/image';
import styles from "./style.module.scss";
import whatsapp from "../../images/icons/whatsapp.svg";

export interface IWhatsappButton {
  buttonText?: string;
  size?: 'small' | 'medium' | 'large';
  phoneNumber?: string;
  className?: string;
}

export const WhatsappButton: FC<IWhatsappButton> = ({
  buttonText,
  size = 'medium',
  phoneNumber = '79272499942',
  className,
}) => {
  const handleWhatsAppClick = () => {
    const message = buttonText ? encodeURIComponent(buttonText) : '';
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${message}` : ''}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 32;
      case 'large':
        return 64;
      default:
        return 48;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[size]} ${className ? className : ""}`}
      onClick={handleWhatsAppClick}
      type="button"
    >
      <div className={styles.iconContainer}>
        <Image
          src={whatsapp}
          alt="WhatsApp"
          width={getIconSize()}
          height={getIconSize()}
          className={styles.whatsappIcon}
        />
      </div>
      {buttonText && <span className={styles.buttonText}>{buttonText}</span>}
    </button>
  );
};
