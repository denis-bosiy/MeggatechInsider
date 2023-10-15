import React, { useState } from "react";
import "./ComponentsPage.scss";
import ExampleButton from "../../components/ExampleButton/ExampleButton";
import Input, { InputSize, InputType } from "../../components/Input/Input";

const ComponentsPage = () => {
  const [defaultInputValue, setDefaultInputValue] = useState<string>("");
  const [errorableInputValue, setErrorableInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [miniInputValue, setMiniInputValue] = useState<string>("");
  const [microInputValue, setMicroInputValue] = useState<string>("");

  const logSearchInputValue = () => {
    console.log(searchInputValue);
  };

  return (
    <main className="components-page">
      <h1>Страница компонентов</h1>

      <section className="section">
        <h2>Тестовая кнопка</h2>

        <ExampleButton />

        <div>
          <h3>Режим</h3>

          <div className="caption">positive</div>
          <ExampleButton mode="positive" />
          <br />

          <hr />

          <div className="caption">negative</div>
          <ExampleButton mode="negative" />
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Типография</h2>

        <span>Заголовки разного уровня</span>

        <div>
          <h1>Илиада</h1>
          <h2>Песнь первая</h2>
          <h3>Язва.Гнев.</h3>
          <h4>Гнев, боги­ня, вос­пой Ахил­ле­са, Пеле­е­ва сына</h4>
          <h5>
            Все изъ­яви­ли согла­сие кри­ком все­об­щим ахей­цы Честь жре­цу ока­зать и при­нять бли­ста­тель­ный выкуп
          </h5>
          <h6>
            Ста­рец, чтоб я нико­гда тебя не видал пред суда­ми! Здесь и теперь ты не мед­ли и впредь не дер­зай
            пока­зать­ся! Или тебя не изба­вит ни скиптр, ни венец Апол­ло­на. Деве сво­бо­ды не дам я; она обвет­ша­ет
            в нево­ле
          </h6>
        </div>
      </section>

      <section className="section">
        <h2>Инпут</h2>

        <Input value={defaultInputValue} placeholder="Логин" onValueChange={setDefaultInputValue} />

        <div>
          <h3>Виды</h3>

          <div className="caption">С ошибкой</div>
          <Input
            value={errorableInputValue}
            placeholder="Логин"
            onValueChange={setErrorableInputValue}
            isInvalidValue={true}
          />
          <br />

          <hr />

          <div className="caption">Пароль</div>
          <Input
            value={passwordInputValue}
            type={InputType.Password}
            placeholder="Пароль"
            onValueChange={setPasswordInputValue}
          />
          <br />

          <hr />

          <div className="caption">Поисковая строка</div>
          <Input
            value={searchInputValue}
            type={InputType.Search}
            placeholder="Введите поисковой запрос"
            onValueChange={setSearchInputValue}
            onSearch={logSearchInputValue}
          />
          <br />
        </div>

        <div>
          <h3>Размер</h3>

          <div className="caption">Мини</div>
          <Input value={miniInputValue} placeholder="Логин" onValueChange={setMiniInputValue} size={InputSize.Mini} />
          <br />

          <hr />

          <div className="caption">Микро</div>
          <Input
            value={microInputValue}
            placeholder="Логин"
            onValueChange={setMicroInputValue}
            size={InputSize.Micro}
          />
          <br />
        </div>
      </section>
    </main>
  );
};

export default ComponentsPage;
