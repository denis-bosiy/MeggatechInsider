import React, { useContext, useState } from "react";
import "./ComponentsPage.scss";
import Input, { InputSize, InputType } from "../../components/Input/Input";
import Select, { ISelectOption, SelectSize } from "../../components/Select/Select";
import Notification from "../../components/Notification/Notification";
import IconButton, { IconButtonType } from "../../components/IconButton/IconButton";
import { ArrowLeft, GarbageIcon } from "../../icons";
import Button, { ButtonSize, ButtonType } from "../../components/Button/Button";
import ActionButton, { ActionButtonType } from "../../components/ActionButton/ActionButton";
import { Link, LinkType } from "../../components/Link/Link";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { RadioButton } from "../../components/RadioButton/RadioButton";
import ModalSettingsContext from "../../utils/ModalSettingsContext";
import AgreementModalView from "../../components/AgreementModalView/AgreementModalView";
import CommentsModalView from "../../components/CommentsModalView/CommentsModalView";
import { ScheduleContainerComponent } from "../../components/Schedule/ScheduleContainer";
import Loader from "../../components/Loader/Loader";

const ComponentsPage = () => {
  const { openModal } = useContext(ModalSettingsContext);

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
  const setSelectValue = (val: string) => {
    console.log(val);
  };

  const logSearchInputValue = () => {
    console.log(searchInputValue);
  };

  const modalComments: { text: string; deleteAction: () => void }[] = [
    {
      text:
        "Прогульщик. Вместо пары решил пойти в бар со своими школьными друзьями. Не видать ему своей зарплаты как и счастья",
      deleteAction: () => alert("Комментарий удалён")
    }
  ];

  return (
    <main className="components-page">
      <h1>Страница компонентов</h1>

      <section className="section">
        <h2>Кнопка</h2>

        <Button label="Войти в аккаунт" />

        <div>
          <h3>Тип</h3>

          <span className="caption">Primary</span>
          <br />
          <Button label="Сделать отчёт" type={ButtonType.Primary} />
          <br />

          <hr />

          <span className="caption">Secondary</span>
          <br />
          <Button label="Сохранить в Excel" type={ButtonType.Secondary} />
          <br />

          <hr />

          <span className="caption">Default</span>
          <br />
          <Button label="Применить для текущей недели" type={ButtonType.Default} />
          <br />
        </div>

        <div>
          <h3>Размер</h3>

          <span className="caption">Kilo</span>
          <br />
          <Button label="Сделать отчёт" size={ButtonSize.Kilo} />
          <br />

          <hr />

          <span className="caption">Default</span>
          <br />
          <Button label="Сделать отчёт" />
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

          <span className="caption">secondary</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <IconButton icon={<GarbageIcon />} type={IconButtonType.Secondary} />
          </div>
          <br />

          <hr />

          <span className="caption">important</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <IconButton icon={<GarbageIcon />} type={IconButtonType.Important} />
          </div>
          <br />

          <hr />

          <span className="caption">white</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <IconButton icon={<GarbageIcon />} type={IconButtonType.White} />
          </div>
          <br />

          <hr />

          <span className="caption">default</span>
          <br />
          <div>
            <IconButton icon={<GarbageIcon />} />
          </div>
          <br />
        </div>
      </section>

      <section className="section">
        <h2>Ссылка</h2>

        <div>
          <Link path="/" label="На главную страницу" />
        </div>
        <p className="description"></p>

        <div>
          <h3>Тип</h3>

          <span className="caption">Светлый</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <Link path="/" label="На главную страницу" type={LinkType.Light} />
          </div>
          <br />

          <hr />

          <span className="caption">Важный</span>
          <br />
          <div style={{ backgroundColor: "black" }}>
            <Link path="/" label="На главную страницу" type={LinkType.Important} />
          </div>
          <br />

          <hr />

          <span className="caption">Стандартный</span>
          <br />
          <Link path="/" label="На главную страницу" />
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
          <h1 className="h1">Илиада</h1>
          <h2 className="h2">Песнь первая</h2>
          <h3 className="h3">Язва.Гнев.</h3>
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

          <div className="caption">Милли</div>
          <Input value={miniInputValue} placeholder="Логин" onValueChange={setMiniInputValue} size={InputSize.Milli} />
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

        <Select options={selectOptions} onValueChange={setSelectValue} />
        <p className="description">Дефолтное значение — первое значение в списке</p>

        <div>
          <h3>Размер</h3>

          <div className="caption">Милли</div>
          <Select options={selectOptions} onValueChange={setSelectValue} size={SelectSize.Milli} />
          <br />

          <hr />

          <div className="caption" title="Удалить">
            Микро
          </div>
          <Select options={selectOptions} onValueChange={setSelectValue} size={SelectSize.Micro} />
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
              <th className="cell -filter" rowSpan={2}>
                Предмет
              </th>
              <th className="cell" colSpan={4}>
                10-1
              </th>
              <th className="cell" colSpan={4}>
                10-2
              </th>
              <th className="cell" colSpan={4}>
                10-3
              </th>
            </tr>
            <tr className="row -filter">
              <th className="cell">Часов в нед. распр-но</th>
              <th className="cell">Часов в неделю по плану</th>
              <th className="cell">Долг</th>
              <th className="cell">Часов сверх плана</th>
              <th className="cell">Часов в нед. распр-но</th>
              <th className="cell">Часов в неделю по плану</th>
              <th className="cell">Долг</th>
              <th className="cell">Часов сверх плана</th>
              <th className="cell">Часов в нед. распр-но</th>
              <th className="cell">Часов в неделю по плану</th>
              <th className="cell">Долг</th>
              <th className="cell">Часов сверх плана</th>
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
        <br />
        <br />

        <hr />

        <table className="table -fill -list">
          <tbody>
            <tr className="row">
              <td className="cell">coefficient.label</td>
              <td className="cell">coefficient.value</td>
            </tr>
            <tr className="row">
              <td className="cell">coefficient.label</td>
              <td className="cell">coefficient.value</td>
            </tr>
            <tr className="row">
              <td className="cell">coefficient.label</td>
              <td className="cell">coefficient.value</td>
            </tr>
            <tr className="row">
              <td className="cell">coefficient.label</td>
              <td className="cell">coefficient.value</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />

        <hr />

        <table className="table">
          <thead className="header">
            <tr className="row">
              <th className="cell" colSpan={9}>
                &nbsp;
              </th>
              <th className="cell" colSpan={11}>
                1 четверть
              </th>
              <th className="cell" colSpan={9}>
                2 четверть
              </th>
              <th className="cell" colSpan={9}>
                3 четверть
              </th>
              <th className="cell" colSpan={13}>
                4 четверть
              </th>
            </tr>
            <tr className="row">
              <th className="cell -filter">Предмет</th>
              <th className="cell -filter">Б/Бв</th>
              <th className="cell -filter">Тип</th>
              <th className="cell -filter -vertical">Ч. групп</th>
              <th className="cell -filter -vertical">Ср. в год</th>
              <th className="cell -filter -vertical">Ср. в период</th>
              <th className="cell -filter -vertical">Ч. всего</th>
              <th className="cell -filter -vertical">Ч. ожидается</th>
              <th className="cell -filter -vertical">Ч. по плану</th>
              <th className="cell -vertical">7 сент. №1</th>
              <th className="cell -vertical">14 сент. №2</th>
              <th className="cell -vertical">21 сент. №3</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell">&nbsp;</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell">&nbsp;</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell">&nbsp;</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">№4</th>
              <th className="cell -vertical">24 мая №35</th>
              <th className="cell">&nbsp;</th>
              <th className="cell -filter">Ч. 1 пг.</th>
              <th className="cell -filter">Ч. 2 пг.</th>
              <th className="cell -vertical">Продолжить по первым 2 неделям</th>
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

      <section className="section">
        <h2>Модальное окно</h2>

        <Button
          label="Открыть модальное окно с подтверждением"
          onClick={() => openModal("Удалить", <AgreementModalView proceedAction={() => alert("Объект удалён")} />)}
        />

        <Button
          label="Открыть модальное окно с комментариями"
          onClick={() =>
            openModal(
              "Комментарии",
              <CommentsModalView comments={modalComments} addAction={() => alert("Комментарий добавлен")} />
            )
          }
        />
      </section>

      <section className="section">
        <h2>Расписание</h2>

        <ScheduleContainerComponent />
      </section>

      <section className="section">
        <h2>Прелоадер</h2>
        <p>Используется для индикации загрузки</p>

        <Loader />
      </section>
    </main>
  );
};

export default ComponentsPage;
