import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import "./SignInPage.scss";
import Button, { ButtonSize, ButtonType } from "../../components/Button/Button";
import Input, { InputType } from "../../components/Input/Input";
import Notification from "../../components/Notification/Notification";
import { HttpService } from "../../api/http.service";
import { AppRouter } from "../../router";
import { LoginCredentials } from "../../api/models";

const SignInPage = () => {
  const service = new HttpService();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginCredentials>();
  const { mutate, isError } = useMutation((credentials: LoginCredentials) => service.login(credentials), {
    onSuccess: () => navigate(AppRouter.Main)
  });
  const submitForm: SubmitHandler<LoginCredentials> = (data) => {
    mutate(data);
  };

  return (
    <>
      <div className="sign-in-wrapper">
        {isError && (
          <Notification className="sign-in__notification" title="Ошибка" description="Введен неправильный пароль" />
        )}
        <div className="sign-in">
          <h1 className="sign-in__title">Пароль</h1>
          <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
            <Controller
              control={control}
              render={({ field }) => (
                <Input
                  className="sign-in__input"
                  type={InputType.Password}
                  placeholder="Введите пароль"
                  value={field.value || ""}
                  onValueChange={field.onChange}
                />
              )}
              name="password"
            />
            <Button className="sign-in__button" type={ButtonType.Primary} size={ButtonSize.Default} label="Войти" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
