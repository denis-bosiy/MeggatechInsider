import React, { useState } from "react";
import "./ComponentsPage.scss";
import Input, { InputSize, InputType } from "../../components/Input/Input";
import Select, { ISelectOption, SelectSize } from "../../components/Select/Select";
import Notification from "../../components/Notification/Notification";
import IconButton from "../../components/IconButton/IconButton";
import { ArrowLeft, GarbageIcon } from "../../icons";
import Button from "../../components/Button/Button";
import ActionButton, { ActionButtonType } from "../../components/ActionButton/ActionButton";
import { Link } from "../../components/Link/Link";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { RadioButton } from "../../components/RadioButton/RadioButton";

const ComponentsPage = () => {
  const [defaultInputValue, setDefaultInputValue] = useState<string>("");
  const [errorableInputValue, setErrorableInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [miniInputValue, setMiniInputValue] = useState<string>("");
  const [microInputValue, setMicroInputValue] = useState<string>("");

  const selectOptions: ISelectOption[] = [
    { id: "monday", content: "Понедельник" },
    { id: "tuesday", content: "Вторник" },
    { id: "wednesday", content: "Среда" },
    { id: "thursday", content: "Четверг" },
    { id: "friday", content: "Пятница" },
    { id: "saturday", content: "Суббота" },
    { id: "sunday", content: "Воскресенье" }
  ];
  const [defaultSelectValue, setDefaultSelectValue] = useState<string>("");
  const [miniSelectValue, setMiniSelectValue] = useState<string>("");
  const [microSelectValue, setMicroSelectValue] = useState<string>("");

  const logSearchInputValue = () => {
    console.log(searchInputValue);
  };

  return (
    <main className="components-page">
      <h1>Страница компонентов</h1>

      <section className="section">
        <h2>Кнопка</h2>

        {/* <IconButton icon={<ArrowLeft />} /> */}
        <Button label="Войти в аккаунт" />
        {/* <ActionButton label="Hello" icon={<ArrowLeft />} /> */}

        <div>
          <h3>Цветовая схема</h3>

          <span className="caption">blue</span>
          <br />
          <Button label="Войти в аккаунт" colorScheme="blue" />
          <br />

          <hr />

          <span className="caption">dark-blue</span>
          <br />
          <Button label="Войти в аккаунт" colorScheme="dark-blue" />
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Кнопка действия</h2>

        <ActionButton label="Перейти назад" icon={<ArrowLeft />} />

        <div>
          <h3>Тип</h3>

          <span className="caption">Позитивная</span>
          <br />
          <ActionButton label="Сохранить" type={ActionButtonType.Positive} />
          <br />

          <hr />

          <span className="caption">Негативная</span>
          <br />
          <ActionButton label="Отменить" type={ActionButtonType.Negative} />
          <br />

          <hr />

          <span className="caption">Предупреждающая</span>
          <br />
          <ActionButton label="Удалить" type={ActionButtonType.Warning} icon={<GarbageIcon />} />
          <br />
        </div>

        <div>
          <h3>Вид</h3>

          <span className="caption">С иконкой</span>
          <br />
          <ActionButton label="Удалить" type={ActionButtonType.Warning} icon={<GarbageIcon />} />
          <br />

          <hr />

          <span className="caption">Без иконки</span>
          <br />
          <ActionButton label="Отменить" type={ActionButtonType.Negative} />
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Иконка-кнопка</h2>

        <IconButton icon={<GarbageIcon />} />

        <div>
          <h3>Размер</h3>

          <span className="caption">Малый</span>
          <br />
          <IconButton icon={<GarbageIcon />} small={true} />
          <br />

          <hr />

          <span className="caption">Обычный</span>
          <br />
          <IconButton icon={<GarbageIcon />} />
          <br />
        </div>

        <div>
          <h3>Тип</h3>

          <span className="caption">primary</span>
          <br />
          <IconButton icon={<GarbageIcon />} type="primary" />
          <br />

          <hr />

          <span className="caption">secondary</span>
          <br />
          <IconButton icon={<GarbageIcon />} type="secondary" />
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Ссылка</h2>

        <div style={{ backgroundColor: "black" }}>
          <Link path="/" label="На главную страницу" />
        </div>
        <p className="description"></p>

        <div>
          <h3>Режим</h3>

          <span className="caption">Светлый</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <Link path="/" label="На главную страницу" mode="light" />
          </div>
          <br />

          <hr />

          <span className="caption">Тёмный</span>
          <br />
          <Link path="/" label="На главную страницу" mode="dark" />
          <br />

          <hr />

          <span className="caption">Без режима</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <Link path="/" label="На главную страницу" />
          </div>
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Чекбокс</h2>

        <CheckBox />
      </section>

      <section className="section">
        <h2>Радио-кнопка</h2>

        <RadioButton />
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

        <div>
          <h3>Состояния</h3>

          <div className="caption">С ошибкой</div>
          <Input
            value={errorableInputValue}
            placeholder="Логин"
            onValueChange={setErrorableInputValue}
            isInvalidValue={true}
          />
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Cелект</h2>

        <Select options={selectOptions} onValueChange={setDefaultSelectValue} />
        <p className="description">Дефолтное значение — первое значение в списке</p>

        <div>
          <h3>Размер</h3>

          <div className="caption">Мини</div>
          <Select options={selectOptions} onValueChange={setMiniSelectValue} size={SelectSize.Mini} />
          <br />

          <hr />

          <div className="caption" title="Удалить">
            Микро
          </div>
          <Select options={selectOptions} onValueChange={setMicroSelectValue} size={SelectSize.Micro} />
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Уведомление</h2>

        <Notification
          title="Ошибка"
          description="Cлишком много раз введён неверный пароль. Подождите 5 минут, прежде чем пробовать заново"
        />
      </section>

      <section className="section">
        <h2>Таблица</h2>

        <table className="table">
          <thead className="header">
            <tr className="row">
              <td className="cell -filter" rowSpan={2}>
                Предмет
              </td>
              <td className="cell" colSpan={4}>
                10-1
              </td>
              <td className="cell" colSpan={4}>
                10-2
              </td>
              <td className="cell" colSpan={4}>
                10-3
              </td>
            </tr>
            <tr className="row -filter">
              <td className="cell">Часов в нед. распр-но</td>
              <td className="cell">Часов в неделю по плану</td>
              <td className="cell">Долг</td>
              <td className="cell">Часов сверх плана</td>
              <td className="cell">Часов в нед. распр-но</td>
              <td className="cell">Часов в неделю по плану</td>
              <td className="cell">Долг</td>
              <td className="cell">Часов сверх плана</td>
              <td className="cell">Часов в нед. распр-но</td>
              <td className="cell">Часов в неделю по плану</td>
              <td className="cell">Долг</td>
              <td className="cell">Часов сверх плана</td>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td className="cell">Физика</td>
              <td className="cell -error">0</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
              <td className="cell">2</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
              <td className="cell">2</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
            </tr>
            <tr className="row">
              <td className="cell">История</td>
              <td className="cell -error">0</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
              <td className="cell">3</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
              <td className="cell">2</td>
              <td className="cell">2</td>
              <td className="cell -error">1</td>
              <td className="cell">0</td>
            </tr>
            <tr className="row">
              <td className="cell">Java</td>
              <td className="cell -warning">3</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
              <td className="cell">1</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell">0</td>
              <td className="cell">2</td>
              <td className="cell">2</td>
              <td className="cell">0</td>
              <td className="cell -success">1</td>
            </tr>
          </tbody>
        </table>
        <br />

        <hr />

        <table className="table">
          <thead className="header">
            <tr className="row">
              <td className="cell" colSpan={9}>
                &nbsp;
              </td>
              <td className="cell" colSpan={11}>
                1 четверть
              </td>
              <td className="cell" colSpan={9}>
                2 четверть
              </td>
              <td className="cell" colSpan={9}>
                3 четверть
              </td>
              <td className="cell" colSpan={13}>
                4 четверть
              </td>
            </tr>
            <tr className="row">
              <td className="cell -filter">Предмет</td>
              <td className="cell -filter">Б/Бв</td>
              <td className="cell -filter">Тип</td>
              <td className="cell -filter -vertical">Ч. групп</td>
              <td className="cell -filter -vertical">Ср. в год</td>
              <td className="cell -filter -vertical">Ср. в период</td>
              <td className="cell -filter -vertical">Ч. всего</td>
              <td className="cell -filter -vertical">Ч. ожидается</td>
              <td className="cell -filter -vertical">Ч. по плану</td>
              <td className="cell -vertical">7 сент. №1</td>
              <td className="cell -vertical">14 сент. №2</td>
              <td className="cell -vertical">21 сент. №3</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell">&nbsp;</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell">&nbsp;</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell">&nbsp;</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">№4</td>
              <td className="cell -vertical">24 мая №35</td>
              <td className="cell">&nbsp;</td>
              <td className="cell -filter">Ч. 1 пг.</td>
              <td className="cell -filter">Ч. 2 пг.</td>
              <td className="cell -vertical">Продолжить по первым 2 неделям</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell">Физика.Продолжение</td>
              <td className="cell">Бюджет</td>
              <td className="cell">Обязательный профильный</td>
              <td className="cell">3</td>
              <td className="cell">12</td>
              <td className="cell">14</td>
              <td className="cell -error">105</td>
              <td className="cell">105</td>
              <td className="cell">105</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell" title="Очистить четверть">
                del
              </td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell" title="Очистить четверть">
                del
              </td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell" title="Очистить четверть">
                del
              </td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell">12</td>
              <td className="cell" title="Очистить четверть">
                del
              </td>
              <td className="cell">1000</td>
              <td className="cell">5000</td>
              <td className="cell">
                <button>Авто</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ComponentsPage;
