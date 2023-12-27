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
import { AxiosError } from "axios";
import Loader from "../../components/Loader/Loader";
import { classNames } from "../../utils/classNames";

const SignInPage = () => {
  const service = new HttpService();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginCredentials>();
  const { mutate, error, isError, isLoading } = useMutation(
    (credentials: LoginCredentials) => service.login(credentials),
    {
      onSuccess: () => navigate(AppRouter.Main)
    }
  );
  const submitForm: SubmitHandler<LoginCredentials> = (data) => {
    mutate(data);
  };
  const axiosError = error as AxiosError;

  return (
    <>
      <div className="sign-in-wrapper">
        {(!!errors.password || isError) && (
          <Notification
            className="sign-in__notification"
            title="Ошибка"
            description={errors.password?.message || axiosError?.message}
          />
        )}
        {isLoading && <Loader disabledInterface={isLoading} />}
        <div className={classNames("sign-in" + (isLoading ? " -disabled" : ""))}>
          <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
            <Controller
              control={control}
              render={({ field }) => (
                <Input
                  className="sign-in__input"
                  type={InputType.Password}
                  placeholder="Введите пароль"
                  value={field.value}
                  onValueChange={field.onChange}
                  isInvalidValue={isError}
                />
              )}
              name="password"
              rules={{ required: "Пароль не введен" }}
            />
            <Button className="sign-in__button" type={ButtonType.Primary} size={ButtonSize.Default} label="Войти" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
