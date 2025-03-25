import { CustomButton } from '@/components/CustomButton/CustomButton';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import Popup from '@/components/Popup/Popup';
import SEO from '@/components/SEO/SEO';
import { useResize } from '@/hooks/useResize';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
  ADDRESS_VALIDATION_CONFIG,
  CITY_VALIDATION_CONFIG,
  EMAIL_VALIDATION_CONFIG,
  NAME_VALIDATION_CONFIG,
  ORGANIZATION_NAME_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
  SURNAME_VALIDATION_CONFIG
} from "../../constants/validation";
import edit_button from "../../images/edit.svg";
import exit_button from "../../images/exit.svg";
import {
  editUserInfo,
  getUserInfo,
  selectUser,
  signOut,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { IEditProfileData } from "../../types/Auth.types";
import { CustomInputTypes } from "../../types/CustomInput.types";
import styles from "./style.module.scss";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { width } = useResize();

  const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>('физ');

  const options: ISelectOption[] = [
    { value: 'физ', label: 'Физ. лицо' },
    { value: 'юр', label: 'Юр. лицо' },
  ];

  const token = user.token;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm<IEditProfileData>({ mode: "onChange" });

  const data = {
    name: getValues("name"),
    surname: getValues("surname"),
    phone: getValues("phone"),
    email: getValues("email"),
    address: getValues("address"),
    city: getValues("city"),
    user_type: userType,
    organization_name: getValues("organization_name"),
  };

  const onSubmit: SubmitHandler<IEditProfileData> = () => {
    dispatch(
      editUserInfo({
        data: {
          name: getValues("name"),
          surname: getValues("surname"),
          phone: getValues("phone"),
          email: getValues("email"),
          address: getValues("address"),
          city: getValues("city"),
          user_type: userType,
          organization_name: getValues("organization_name"),
        },
        token: token,
      })
    )
      .unwrap()
      .then(() => {
        setIsSavedPopupOpened(true);
      });
  };

  useEffect(() => {
    setIsSavedPopupOpened(false);
  }, []);

  useEffect(() => {
    if (user.token) {
      dispatch(getUserInfo(user.token));
    }
  }, [dispatch, user]);

  return (
    <>
      <SEO title="Профиль пользователя - BAYAR" description="Просмотр и редактирование личных данных пользователя, управление заказами и настройка профиля на BAYAR." keywords="профиль пользователя, личные данные, заказы, BAYAR, настройки аккаунта" />

      <div className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.title__wrapper}>
            <h2 className={styles.title}>Мой профиль</h2>
            {user.token !== "" && (
              <button
                className={styles.button__profile}
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                <Image className={styles.button__profile__img} src={exit_button} alt="Кнопка выхода из учетной записи" />
                <span className={styles.button__profile__text}>Выйти</span>
              </button>
            )}
          </div>
          {user.token !== "" ? (
            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {width > 767 ? (
                <>
                  <div className={styles.input__container}>
                    <CustomInput
                      inputType={CustomInputTypes.name}
                      labelText={"Имя"}
                      validation={{
                        ...register("name", NAME_VALIDATION_CONFIG),
                      }}
                      placeholder="Иван"
                      defaultValue={user.name}
                      error={errors?.name?.message}
                    />
                    <CustomInput
                      inputType={CustomInputTypes.surname}
                      labelText={"Фамилия"}
                      validation={{
                        ...register("surname", SURNAME_VALIDATION_CONFIG),
                      }}
                      placeholder="Иванов"
                      defaultValue={user.surname}
                      error={errors?.surname?.message}
                    />
                    <CustomInput
                      inputType={CustomInputTypes.phone}
                      labelText={"Номер телефона"}
                      validation={{
                        ...register("phone", PHONE_VALIDATION_CONFIG),
                      }}
                      placeholder="+7-909-90-90-35"
                      defaultValue={user.phone}
                      error={errors?.phone?.message}
                    />
                    <CustomInput
                      inputType={CustomInputTypes.email}
                      labelText={"Электронная почта"}
                      validation={{
                        ...register("email", EMAIL_VALIDATION_CONFIG),
                      }}
                      placeholder="email@example.com"
                      defaultValue={user.email}
                      error={errors?.email?.message}
                    />
                    <Link href="/change-password" className={styles.profile__link}>
                      Сменить пароль
                      <Image className={styles.button__profile__img} src={edit_button} alt="Кнопка редактирования" />
                    </Link>
                  </div>
                  <div className={styles.input__container}>
                    <CustomInput
                      inputType={CustomInputTypes.address}
                      labelText={"Адрес"}
                      validation={{
                        ...register("address", ADDRESS_VALIDATION_CONFIG),
                      }}
                      placeholder="ул. Пушкина, д. 9, кв. 192"
                      defaultValue={user.address}
                      error={errors?.address?.message}
                    />
                    <CustomInput
                      inputType={CustomInputTypes.city}
                      labelText={"Город"}
                      validation={{
                        ...register("city", CITY_VALIDATION_CONFIG),
                      }}
                      placeholder="Москва"
                      defaultValue={user.city}
                      error={errors?.city?.message}
                    />
                    <CustomSelect
                      labelText={"Тип пользователя"}
                      options={options}
                      selectedValue={userType}
                      onChange={setUserType}
                    />
                    {data.user_type === "юр" && (
                      <CustomInput
                        inputType={CustomInputTypes.organization_name}
                        labelText={"Название организации"}
                        validation={{
                          ...register("organization_name", ORGANIZATION_NAME_VALIDATION_CONFIG),
                        }}
                        placeholder=""
                        defaultValue={user.organization_name}
                        error={errors?.organization_name?.message}
                      />
                    )}
                    <CustomButton
                      buttonText={"Изменить данные"}
                      handleButtonClick={handleSubmit(onSubmit)}
                      disabled={!isDirty || !isValid}
                      type="button"
                    />
                  </div>
                </>
              ) : (
                <div className={styles.input__container}>
                  <CustomInput
                    inputType={CustomInputTypes.name}
                    labelText={"Имя"}
                    validation={{
                      ...register("name", NAME_VALIDATION_CONFIG),
                    }}
                    placeholder="Иван"
                    defaultValue={user.name}
                    error={errors?.name?.message}
                  />
                  <CustomInput
                    inputType={CustomInputTypes.surname}
                    labelText={"Фамилия"}
                    validation={{
                      ...register("surname", SURNAME_VALIDATION_CONFIG),
                    }}
                    placeholder="Иванов"
                    defaultValue={user.surname}
                    error={errors?.surname?.message}
                  />
                  <CustomInput
                    inputType={CustomInputTypes.phone}
                    labelText={"Номер телефона"}
                    validation={{
                      ...register("phone", PHONE_VALIDATION_CONFIG),
                    }}
                    placeholder="+7-909-90-90-35"
                    defaultValue={user.phone}
                    error={errors?.phone?.message}
                  />
                  <CustomInput
                    inputType={CustomInputTypes.email}
                    labelText={"Электронная почта"}
                    validation={{
                      ...register("email", EMAIL_VALIDATION_CONFIG),
                    }}
                    placeholder="email@example.com"
                    defaultValue={user.email}
                    error={errors?.email?.message}
                  />

                  <CustomInput
                    inputType={CustomInputTypes.address}
                    labelText={"Адрес"}
                    validation={{
                      ...register("address", ADDRESS_VALIDATION_CONFIG),
                    }}
                    placeholder="ул. Пушкина, д. 9, кв. 192"
                    defaultValue={user.address}
                    error={errors?.address?.message}
                  />
                  <CustomInput
                    inputType={CustomInputTypes.city}
                    labelText={"Город"}
                    validation={{
                      ...register("city", CITY_VALIDATION_CONFIG),
                    }}
                    placeholder="Москва"
                    defaultValue={user.city}
                    error={errors?.city?.message}
                  />
                  <CustomSelect
                    labelText={"Тип пользователя"}
                    options={options}
                    selectedValue={userType}
                    onChange={setUserType}
                  />
                  {data.user_type === "юр" && (
                    <CustomInput
                      inputType={CustomInputTypes.organization_name}
                      labelText={"Название организации"}
                      validation={{
                        ...register("organization_name", ORGANIZATION_NAME_VALIDATION_CONFIG),
                      }}
                      placeholder=""
                      defaultValue={user.organization_name}
                      error={errors?.organization_name?.message}
                    />
                  )}
                  <CustomButton
                    buttonText={"Изменить данные"}
                    handleButtonClick={handleSubmit(onSubmit)}
                    disabled={!isDirty || !isValid}
                    type="button"
                  />
                  <Link href="/change-password" className={styles.profile__link}>
                    Сменить пароль
                    <Image className={styles.button__profile__img} src={edit_button} alt="Кнопка редактирования" />
                  </Link>
                </div>
              )}
            </form>
          ) : (
            <div className={styles.profile__links__container}>
              <Link href="/sign-up" className={styles.profile__link}>
                Нужно Зарегистрироваться
              </Link>
              <p className={styles.profile__link}>или</p>
              <Link href="/sign-in" className={styles.profile__link}>
                Войти в учетную запись
              </Link>
            </div>
          )}
        </div>
        <Popup
          title="Сохранить изменения"
          text="Изменения сохранены"
          isOpened={isSavedPopupOpened}
          setIsOpened={setIsSavedPopupOpened}
        />
      </div>
    </>
  );
};

export default ProfilePage;