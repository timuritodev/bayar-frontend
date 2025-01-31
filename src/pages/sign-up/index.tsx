import CustomSelect from '@/components/CustomSelect/CustomSelect';
import Popup from '@/components/Popup/Popup';
import Head from 'next/head';
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import {
  ADDRESS_VALIDATION_CONFIG,
  CITY_VALIDATION_CONFIG,
  EMAIL_VALIDATION_CONFIG,
  NAME_VALIDATION_CONFIG,
  ORGANIZATION_NAME_VALIDATION_CONFIG,
  PASSWORD_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
  SURNAME_VALIDATION_CONFIG
} from "../../constants/validation";
import {
  getUserInfo,
  setUser,
  signUpUser,
} from "../../services/redux/slices/user/user";
import { useAppDispatch } from "../../services/typeHooks";
import { ISignUpData } from "../../types/Auth.types";
import { CustomInputTypes } from "../../types/CustomInput.types";
import styles from "./style.module.scss";

const SignUpPage = () => {
  const dispatch = useAppDispatch();

  const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);
  const [isErrorPopupOpened, setIsErrorPopupOpened] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>('физ');

  const options: ISelectOption[] = [
    { value: 'физ', label: 'Физ. лицо' },
    { value: 'юр', label: 'Юр. лицо' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<ISignUpData>({ mode: "onChange" });

  const data = {
    name: getValues("name"),
    surname: getValues("surname"),
    phone: getValues("phone"),
    email: getValues("email"),
    address: getValues("address"),
    city: getValues("city"),
    user_type: userType,
    organization_name: getValues("organization_name"),
    password: getValues("password"),
  };

  const onSubmit: SubmitHandler<ISignUpData> = () => {
    dispatch(
      signUpUser({
        name: getValues("name"),
        surname: getValues("surname"),
        phone: getValues("phone"),
        email: getValues("email"),
        address: getValues("address"),
        city: getValues("city"),
        user_type: userType,
        organization_name: getValues("organization_name"),
        password: getValues("password"),
      })
    )
      .unwrap()
      .then((res) => {
        dispatch(setUser({ name: data.name, email: data.email, token: res }));
        dispatch(getUserInfo(res));
        setIsSavedPopupOpened(true);
      })
      .catch((err) => {
        setIsErrorPopupOpened(true);
        console.log("dispatch signInUser err:", err);
      });
  };

  useEffect(() => {
    setIsSavedPopupOpened(false);
  }, []);

  useEffect(() => {
    if (userType === 'физ') {
      reset({
        organization_name: '',
      });
    }
  }, [userType, reset]);

  return (
    <>
      <Head>
        <title>Регистрация - Beancode</title>
        <meta name="description" content="Зарегистрируйтесь на Beancode, чтобы получить доступ к личному кабинету и эксклюзивным функциям. Заполните форму регистрации и начните пользоваться всеми преимуществами нашего сервиса." />
        <meta name="keywords" content="регистрация, личный кабинет, Beancode, создать аккаунт, регистрация на сайте" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beancode.ru/sign-up" />
        <meta property="og:title" content="Регистрация - Beancode" />
        <meta property="og:description" content="Присоединяйтесь к Beancode! Заполните форму регистрации, чтобы получить доступ к вашему личному кабинету и использовать все наши возможности." />
        <meta property="og:image" content="https://beancode.ru/api/images/open_graph.jpeg" />
      </Head>
      <div className={styles.signup}>
        <div className={styles.signup__container}>
          <h1 className={styles.signup__title}>Регистрация</h1>
          <form
            className={styles.signup__form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <CustomInput
              inputType={CustomInputTypes.name}
              labelText={"Имя"}
              validation={{
                ...register("name", NAME_VALIDATION_CONFIG),
              }}
              placeholder="Иван"
              error={errors?.name?.message}
            />
            <CustomInput
              inputType={CustomInputTypes.surname}
              labelText={"Фамилия"}
              validation={{
                ...register("surname", SURNAME_VALIDATION_CONFIG),
              }}
              placeholder="Иванов"
              error={errors?.surname?.message}
            />
            <CustomInput
              inputType={CustomInputTypes.phone}
              labelText={"Номер телефона"}
              validation={{
                ...register("phone", PHONE_VALIDATION_CONFIG),
              }}
              placeholder="+7-909-90-90-35"
              error={errors?.phone?.message}
            />
            <CustomInput
              inputType={CustomInputTypes.email}
              labelText={"Электронная почта"}
              validation={{
                ...register("email", EMAIL_VALIDATION_CONFIG),
              }}
              placeholder="email@example.com"
              error={errors?.email?.message}
            />
            <CustomInput
              inputType={CustomInputTypes.address}
              labelText={"Адрес"}
              validation={{
                ...register("address", ADDRESS_VALIDATION_CONFIG),
              }}
              placeholder="ул. Пушкина, д. 9, кв. 192"
              error={errors?.address?.message}
            />
            <CustomInput
              inputType={CustomInputTypes.city}
              labelText={"Город"}
              validation={{
                ...register("city", CITY_VALIDATION_CONFIG),
              }}
              placeholder="Москва"
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
                error={errors?.organization_name?.message}
              />
            )}
            <div>
              <CustomInput
                inputType={CustomInputTypes.password}
                labelText={"Пароль"}
                showPasswordButton={true}
                validation={{
                  ...register("password", PASSWORD_VALIDATION_CONFIG),
                }}
                error={errors?.password?.message}
              />
            </div>
            <CustomButton
              buttonText={"Зарегистрироваться"}
              handleButtonClick={handleSubmit(onSubmit)}
              disabled={!isDirty || !isValid}
              type="button"
            />
          </form>
        </div>
        <Popup
          title="Регистрация"
          text="Вы были успешно зарегистрированы"
          link="catalog"
          isOpened={isSavedPopupOpened}
          setIsOpened={setIsSavedPopupOpened}
        />
        <Popup
          title="Ошибка"
          text="Пользователь с такой почтой уже существует"
          isOpened={isErrorPopupOpened}
          setIsOpened={setIsErrorPopupOpened}
        />
      </div>
    </>
  );
};

export default SignUpPage;