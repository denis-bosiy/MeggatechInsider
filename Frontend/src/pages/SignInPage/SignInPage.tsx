import React, { useState } from "react";
import "./SignInPage.scss";
import Button, { ButtonSize, ButtonType } from "../../components/Button/Button";
import Input, { InputType } from "../../components/Input/Input";
import Notification from "../../components/Notification/Notification";

const SignInPage = () => {
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");

  return (
    <>
      <div className='wrapper'>
        <Notification
          className='sign-in__notification'
          title='Ошибка'
          description='Введен неправильный пароль'
        />
        <div className="sign-in">
          <h1 className="sign-in__title">
            Пароль
          </h1>
          <Input
            className='sign-in__input'
            value={passwordInputValue}
            type={InputType.Password}
            placeholder="Введите пароль"
            onValueChange={setPasswordInputValue}
          />
          <Button
            className='sign-in__button'
            type={ButtonType.Primary}
            size={ButtonSize.Default}
            label='Войти'
          />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
