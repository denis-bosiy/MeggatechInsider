import React, { useLayoutEffect, useState } from "react";
import "./ScheduleNavigation.scss";
import "../PageNavigation/PageNavigation.scss";
import { ArrowLeft, GarbageIcon } from "../../icons";
import { Link, LinkType } from "../Link/Link";
import ActionButton, { ActionButtonSize, ActionButtonType } from "../ActionButton/ActionButton";
import Button, { ButtonSize, ButtonType } from "../Button/Button";
import Select, { ISelectOption, SelectSize } from "../Select/Select";
import { ScheduleLesson } from "../../core/Schedule/ScheduleLesson";
import { RadioButton } from "../RadioButton/RadioButton";
import { CheckBox } from "../CheckBox/CheckBox";
import { guidGenerator } from "../../utils/guidGenerator";
import Input, { InputSize } from "../Input/Input";

interface IScheduleNavigationProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const daySelectsOptions: ISelectOption[] = [
  { id: "monday", content: "Понедельник" },
  { id: "tuesday", content: "Вторник" },
  { id: "wednesday", content: "Среда" },
  { id: "thursday", content: "Четверг" },
  { id: "friday", content: "Пятница" },
  { id: "saturday", content: "Суббота" },
  { id: "sunday", content: "Воскресенье" }
];
const pairTimesOptions: ISelectOption[] = [
  { id: guidGenerator(), content: "08:20-09:50" },
  { id: guidGenerator(), content: "10:10-11:40" },
  { id: guidGenerator(), content: "12:00-13:30" },
  { id: guidGenerator(), content: "13:40-15:10" }
];
const lessonTimesOptions: ISelectOption[] = [
  { id: guidGenerator(), content: "08:20-09:00" },
  { id: guidGenerator(), content: "09:10-09:50" },
  { id: guidGenerator(), content: "10:10-10:50" },
  { id: guidGenerator(), content: "11:00-11:40" },
  { id: guidGenerator(), content: "12:00-12:40" },
  { id: guidGenerator(), content: "12:50-13:30" },
  { id: guidGenerator(), content: "13:40-14:20" },
  { id: guidGenerator(), content: "14:30-15:10" }
];
const subjectsOptions: ISelectOption[] = [
  { id: guidGenerator(), content: "Геометрия" },
  { id: guidGenerator(), content: "Физика" },
  { id: guidGenerator(), content: "Английский язык" }
];

export const ScheduleNavigation = () => {
  const [lesson, setLesson] = useState<ScheduleLesson>();
  const [day, setDay] = useState<ISelectOption>(daySelectsOptions[0]);
  const [time, setTime] = useState<ISelectOption>(lessonTimesOptions[0]);
  const [isPair, setIsPair] = useState<boolean>(false);
  const [subgroupsCount, setSubgroupsCount] = useState<number>(0);
  const [possibleSubgroups, setPossibleSubgroups] = useState<ISelectOption[]>([]);
  const [chosenSubgroup, setChosenSubgroup] = useState<ISelectOption>();
  const [room, setRoom] = useState<string>("");
  const [subject, setSubject] = useState<ISelectOption>(subjectsOptions[0]);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [divisions, setDivisions] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);

  const handleChangingDay = (newDayId: string): void => {
    const foundIndex: number = daySelectsOptions.findIndex((subgroup: ISelectOption) => subgroup.id === newDayId);

    if (foundIndex !== -1) {
      setDay(daySelectsOptions[foundIndex]);
    }
  };
  const handleIsPairChanging = (): void => {
    setIsPair(!isPair);
  };
  const handleChangingTime = (newTimeId: string): void => {
    if (isPair) {
      const foundIndex: number = pairTimesOptions.findIndex((pairTime: ISelectOption) => pairTime.id === newTimeId);

      if (foundIndex !== -1) {
        setTime(pairTimesOptions[foundIndex]);
      }
    } else {
      const foundIndex: number = lessonTimesOptions.findIndex(
        (lessonTime: ISelectOption) => lessonTime.id === newTimeId
      );

      if (foundIndex !== -1) {
        setTime(lessonTimesOptions[foundIndex]);
      }
    }
  };
  const handleChangingSubgroupsCount = (newSubgroupsCount: string): void => {
    setSubgroupsCount(parseFloat(newSubgroupsCount));
  };
  const handleChangingChosenSubgroup = (newChosenSubgroupId: string): void => {
    const foundIndex: number = possibleSubgroups.findIndex(
      (subgroup: ISelectOption) => subgroup.id === newChosenSubgroupId
    );

    if (foundIndex !== -1) {
      setChosenSubgroup(possibleSubgroups[foundIndex]);
    }
  };
  const handleChangingSubject = (newSubjectId: string): void => {
    const foundIndex: number = subjectsOptions.findIndex((subject: ISelectOption) => subject.id === newSubjectId);

    if (foundIndex !== -1) {
      setSubject(subjectsOptions[foundIndex]);
    }
  };
  const handleChangingRoom = (newRoom: string): void => {
    setRoom(newRoom);
  };
  const handleChangingDivision = (changingDivision: string): void => {
    const foundIndex: number = divisions.findIndex((division: string) => division === changingDivision);

    if (foundIndex !== -1) {
      setDivisions(divisions.filter((division: string) => division === changingDivision));
    } else {
      setDivisions([...divisions, changingDivision]);
    }
  };
  const handleChangingGroup = (changingGroup: string): void => {
    const foundIndex: number = groups.findIndex((group: string) => group === changingGroup);

    if (foundIndex !== -1) {
      setGroups(groups.filter((group: string) => group === changingGroup));
    } else {
      setGroups([...groups, changingGroup]);
    }
  };
  const handleReseting = (): void => {
    setTime(lessonTimesOptions[0]);
    setDay(daySelectsOptions[0]);
    setSubject(subjectsOptions[0]);
    setIsPair(false);
    setSubgroupsCount(0);
    setRoom("");
    setIsOnline(false);
    setDivisions([]);
    setGroups([]);
  };

  useLayoutEffect(() => {
    const newPossibleSubgroups: ISelectOption[] = [];

    for (let i = 0; i < subgroupsCount; i++) {
      newPossibleSubgroups.push({ id: guidGenerator(), content: (i + 1).toString() });
    }

    setPossibleSubgroups(newPossibleSubgroups);
  }, [subgroupsCount]);

  useLayoutEffect(() => {
    if (isPair) {
      setTime(pairTimesOptions[0]);
    } else {
      setTime(lessonTimesOptions[0]);
    }
  }, [isPair]);

  return (
    <div className="page-navigation">
      <div className="page-navigation__container schedule-navigation-container">
        <div>
          <div className="navigation-actions">
            <Link icon={<ArrowLeft />} path={-1} type={LinkType.Important} label="Назад" />
          </div>
          <div className="schedule-navigation__actions">
            <ActionButton size={ActionButtonSize.Small} label={"Применить для текущей недели"} />
            <Button size={ButtonSize.Small} type={ButtonType.Secondary} label={"Сохранить в excel"} />
          </div>
        </div>
        <div className="schedule-navigation__lesson-editing">
          <div className="schedule-navigation__control">
            <Select
              currentValue={day}
              options={daySelectsOptions}
              onValueChange={handleChangingDay}
              size={SelectSize.Micro}
            />
            <div className="schedule-navigation__control-row">
              <RadioButton checked={isPair} label={"Пара"} onChange={handleIsPairChanging} />
              <RadioButton checked={!isPair} label={"Урок"} onChange={handleIsPairChanging} />
            </div>
            {isPair && (
              <Select
                currentValue={time}
                options={pairTimesOptions}
                onValueChange={handleChangingTime}
                size={SelectSize.Micro}
              />
            )}
            {!isPair && (
              <Select
                currentValue={time}
                options={lessonTimesOptions}
                onValueChange={handleChangingTime}
                size={SelectSize.Micro}
              />
            )}
          </div>
          <div className="schedule-navigation__control -row">
            <div className="schedule-navigation__control-column">
              <CheckBox
                checked={!!groups.find((group: string) => group === "10-1")}
                label={"10-1"}
                onChange={() => handleChangingGroup("10-1")}
              />
              <CheckBox
                checked={!!groups.find((group: string) => group === "10-2")}
                label={"10-2"}
                onChange={() => handleChangingGroup("10-2")}
              />
            </div>
            <div className="schedule-navigation__control-column">
              <CheckBox
                checked={!!groups.find((group: string) => group === "11-1")}
                label={"11-1"}
                onChange={() => handleChangingGroup("11-1")}
              />
              <CheckBox
                checked={!!groups.find((group: string) => group === "11-2")}
                label={"11-2"}
                onChange={() => handleChangingGroup("11-2")}
              />
              <CheckBox
                checked={!!groups.find((group: string) => group === "11-3")}
                label={"11-3"}
                onChange={() => handleChangingGroup("11-3")}
              />
            </div>
          </div>
          <div className="schedule-navigation__control">
            <Input
              placeholder="Кол-во подгрупп"
              value={subgroupsCount ? subgroupsCount.toString() : ""}
              onValueChange={handleChangingSubgroupsCount}
              size={InputSize.Micro}
            />
            <Select
              options={possibleSubgroups}
              currentValue={chosenSubgroup}
              onValueChange={handleChangingChosenSubgroup}
              size={SelectSize.Micro}
            />
          </div>
          <div className="schedule-navigation__control">
            <Select
              currentValue={subject}
              options={subjectsOptions}
              onValueChange={handleChangingSubject}
              size={SelectSize.Micro}
            />
            <Input
              placeholder="Номер кабинета"
              value={room}
              onValueChange={handleChangingRoom}
              size={InputSize.Micro}
            />
            <CheckBox checked={isOnline} label="Онлайн" onChange={setIsOnline} />
          </div>
          <div className="schedule-navigation__control">
            <span>Деление по</span>
            <CheckBox
              checked={!!divisions.find((division: string) => division === "parallel")}
              label="Параллели"
              onChange={() => handleChangingDivision("parallel")}
            />
            <CheckBox
              checked={!!divisions.find((division: string) => division === "group")}
              label="Классам"
              onChange={() => handleChangingDivision("group")}
            />
            <CheckBox
              checked={!!divisions.find((division: string) => division === "subgroup")}
              label="Подгруппам"
              onChange={() => handleChangingDivision("subgroup")}
            />
          </div>

          <div className="schedule-navigation__lesson-editing-actions">
            <ActionButton
              icon={<GarbageIcon />}
              label={"Очистить"}
              type={ActionButtonType.Warning}
              size={ActionButtonSize.Small}
              onClick={handleReseting}
            />
            <ActionButton label={"Сохранить"} type={ActionButtonType.Positive} size={ActionButtonSize.Small} />
          </div>
        </div>
      </div>
    </div>
  );
};
