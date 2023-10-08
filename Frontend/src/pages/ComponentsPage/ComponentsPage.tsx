import React from "react";
import "./ComponentsPage.scss";
import ExampleButton from "../../components/ExampleButton/ExampleButton";

const ComponentsPage = () => {
  return (
    <main className="components-page">
      <h1>Страница компонентов</h1>

      <section className="section">
        <h2>Тестовая кнопка</h2>

        <ExampleButton />

        <div>
          <h3>Режим</h3>

          <span>positive</span>
          <br />
          <ExampleButton mode="positive" />
          <br />

          <hr />

          <span>negative</span>
          <br />
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
    </main>
  );
};

export default ComponentsPage;
