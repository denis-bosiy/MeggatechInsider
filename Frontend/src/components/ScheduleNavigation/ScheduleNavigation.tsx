import React, { useLayoutEffect, useState } from "react";
import "./ScheduleNavigation.scss";
import "../PageNavigation/PageNavigation.scss";
import { ArrowLeft, GarbageIcon } from "../../icons";
import { Link, LinkType } from "../Link/Link";
import ActionButton, { ActionButtonSize, ActionButtonType } from "../ActionButton/ActionButton";
import Button, { ButtonSize, ButtonType } from "../Button/Button";
import Select, { ISelectOption, SelectSize } from "../Select/Select";
import { RadioButton } from "../RadioButton/RadioButton";
import { CheckBox } from "../CheckBox/CheckBox";
import { guidGenerator } from "../../utils/guidGenerator";
import Input, { InputSize } from "../Input/Input";
import { Workday } from "../../core/Schedule/Workday";
import { ScheduleNotifier } from "../../core/Schedule/ScheduleNotifier";
import { ScheduleSubscriber } from "../../core/Schedule/ScheduleSubscriber";
import { ScheduleEvent } from "../../core/Schedule/ScheduleEvent";
import { ScheduleConverter } from "../../core/Schedule/ScheduleConverter";

interface IScheduleNavigationProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const daySelectsOptions: ISelectOption[] = [
  { id: Workday.Monday, content: "Понедельник" },
  { id: Workday.Tuesday, content: "Вторник" },
  { id: Workday.Wednesday, content: "Среда" },
  { id: Workday.Thursday, content: "Четверг" },
  { id: Workday.Friday, content: "Пятница" },
  { id: Workday.Saturday, content: "Суббота" },
  { id: Workday.Sunday, content: "Воскресенье" }
];
const pairTimesOptions: ISelectOption[] = [
  { id: guidGenerator(), content: "08.20-09.50" },
  { id: guidGenerator(), content: "10.10-11.40" },
  { id: guidGenerator(), content: "12.00-13.30" },
  { id: guidGenerator(), content: "13.40-15.10" }
];
const pairTimesOptionsForNotMonday: ISelectOption[] = [
  { id: guidGenerator(), content: "08.00-09.30" },
  { id: guidGenerator(), content: "09.50-11.20" },
  { id: guidGenerator(), content: "11.40-13.10" },
  { id: guidGenerator(), content: "13.20-14.50" }
];
const lessonTimesOptions: ISelectOption[] = [
  { id: guidGenerator(), content: "08.20-09.00" },
  { id: guidGenerator(), content: "09.10-09.50" },
  { id: guidGenerator(), content: "10.10-10.50" },
  { id: guidGenerator(), content: "11.00-11.40" },
  { id: guidGenerator(), content: "12.00-12.40" },
  { id: guidGenerator(), content: "12.50-13.30" },
  { id: guidGenerator(), content: "13.40-14.20" },
  { id: guidGenerator(), content: "14.30-15.10" }
];
const lessonTimesOptionsForNotMonday: ISelectOption[] = [
  { id: guidGenerator(), content: "08.00-08.40" },
  { id: guidGenerator(), content: "08.50-09.30" },
  { id: guidGenerator(), content: "09.50-10.30" },
  { id: guidGenerator(), content: "10.40-11.20" },
  { id: guidGenerator(), content: "11.40-12.20" },
  { id: guidGenerator(), content: "12.30-13.10" },
  { id: guidGenerator(), content: "13.20-14.00" },
  { id: guidGenerator(), content: "14.10-14.50" }
];
const subjectsOptions: ISelectOption[] = [
  { id: guidGenerator(), content: "Геометрия" },
  { id: guidGenerator(), content: "Физика" },
  { id: guidGenerator(), content: "Английский язык" },
  { id: guidGenerator(), content: "АиП" }
];

export enum ScheduleNavigationLessonType {
  Pair = "pair",
  Lesson = "lesson"
}
export class ScheduleNavigationLesson {
  id: string;
  workDay: Workday = Workday.Monday;
  lessonType: ScheduleNavigationLessonType = ScheduleNavigationLessonType.Lesson;
  timePeriod = "";

  groups: string[] = [];

  subgroupsCount = 0;
  chosenSubgroup = 0;

  lessonName = "";
  classRoom?: string;
  isOnline = false;

  divisionTypes: string[] = [];

  constructor(
    id: string,
    workday: Workday,
    lessonType: ScheduleNavigationLessonType,
    timePeriod: string,
    groups: string[],
    subgroupsCount: number,
    chosenSubgroup: number,
    lessonName: string,
    isOnline: boolean,
    classRoom?: string
  ) {
    this.id = id;
    this.workDay = workday;
    this.lessonType = lessonType;
    this.timePeriod = timePeriod;
    this.groups = groups;
    this.subgroupsCount = subgroupsCount;
    this.chosenSubgroup = chosenSubgroup;
    this.lessonName = lessonName;
    this.isOnline = isOnline;

    if (classRoom) {
      this.classRoom = classRoom;
    }
  }
}

export const ScheduleNavigation = () => {
  const [lesson, setLesson] = useState<ScheduleNavigationLesson>();

  // Controls
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

  // Controls handlers
  const handleChangingDay = (newDayId: string): void => {
    const foundIndex: number = daySelectsOptions.findIndex((subgroup: ISelectOption) => subgroup.id === newDayId);

    if (foundIndex !== -1) {
      const selectedDay: ISelectOption = daySelectsOptions[foundIndex];

      setDay(daySelectsOptions[foundIndex]);
      lesson && setLesson({ ...lesson, workDay: selectedDay.id as Workday });
    }
  };
  const handleIsPairChanging = (): void => {
    setIsPair(!isPair);
    lesson &&
      setLesson({
        ...lesson,
        lessonType: isPair ? ScheduleNavigationLessonType.Pair : ScheduleNavigationLessonType.Lesson
      });
  };
  const handleChangingTime = (newTimeId: string): void => {
    if (isPair) {
      const foundIndex: number = pairTimesOptions.findIndex((pairTime: ISelectOption) => pairTime.id === newTimeId);

      if (foundIndex !== -1) {
        setTime(pairTimesOptions[foundIndex]);
        lesson && setLesson({ ...lesson, timePeriod: pairTimesOptions[foundIndex].content });
      }
    } else {
      const foundIndex: number = lessonTimesOptions.findIndex(
        (lessonTime: ISelectOption) => lessonTime.id === newTimeId
      );

      if (foundIndex !== -1) {
        setTime(lessonTimesOptions[foundIndex]);
        lesson && setLesson({ ...lesson, timePeriod: lessonTimesOptions[foundIndex].content });
      }
    }
  };
  const handleChangingSubgroupsCount = (newSubgroupsCount: string): void => {
    setSubgroupsCount(parseFloat(newSubgroupsCount));
    lesson && setLesson({ ...lesson, subgroupsCount: parseFloat(newSubgroupsCount) });
  };
  const handleChangingChosenSubgroup = (newChosenSubgroupId: string): void => {
    const foundIndex: number = possibleSubgroups.findIndex(
      (subgroup: ISelectOption) => subgroup.id === newChosenSubgroupId
    );

    if (foundIndex !== -1) {
      setChosenSubgroup(possibleSubgroups[foundIndex]);
      lesson && setLesson({ ...lesson, chosenSubgroup: parseFloat(possibleSubgroups[foundIndex].content) });
    }
  };
  const handleChangingSubject = (newSubjectId: string): void => {
    const foundIndex: number = subjectsOptions.findIndex((subject: ISelectOption) => subject.id === newSubjectId);

    if (foundIndex !== -1) {
      setSubject(subjectsOptions[foundIndex]);
      lesson && setLesson({ ...lesson, lessonName: subjectsOptions[foundIndex].content });
    }
  };
  const handleChangingRoom = (newRoom: string): void => {
    setRoom(newRoom);
    lesson && setLesson({ ...lesson, classRoom: newRoom });
  };
  const handleSettingIsOnline = (): void => {
    setIsOnline(!isOnline);
    lesson && setLesson({ ...lesson, isOnline: !isOnline });
  };
  const handleChangingDivision = (changingDivision: string): void => {
    const foundIndex: number = divisions.findIndex((division: string) => division === changingDivision);

    if (foundIndex !== -1) {
      setDivisions(divisions.filter((division: string) => division !== changingDivision));
      lesson &&
        setLesson({ ...lesson, divisionTypes: divisions.filter((division: string) => division !== changingDivision) });
    } else {
      setDivisions([...divisions, changingDivision]);
      lesson && setLesson({ ...lesson, divisionTypes: [...divisions, changingDivision] });
    }
  };
  const handleChangingGroup = (changingGroup: string): void => {
    const foundIndex: number = groups.findIndex((group: string) => group === changingGroup);

    if (foundIndex !== -1) {
      setGroups(groups.filter((group: string) => group !== changingGroup));
      lesson && setLesson({ ...lesson, groups: groups.filter((group: string) => group !== changingGroup) });
    } else {
      setGroups([...groups, changingGroup]);
      lesson && setLesson({ ...lesson, groups: [...groups, changingGroup] });
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
  const handleSaving = (): void => {
    ScheduleNotifier.getInstance().notify(ScheduleEvent.StoppedLessonEditing, lesson);
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
  useLayoutEffect(() => {
    if (!lesson) {
      return;
    }

    if (lesson.workDay === Workday.Monday) {
      if (lesson.lessonType === ScheduleNavigationLessonType.Lesson) {
        setTime(
          lessonTimesOptions.find(
            (lessonTimeOption: ISelectOption) => lessonTimeOption.content === lesson.timePeriod
          ) || lessonTimesOptions[0]
        );
      } else {
        setTime(
          pairTimesOptions.find((pairTimeOption: ISelectOption) => pairTimeOption.content === lesson.timePeriod) ||
            pairTimesOptions[0]
        );
      }
    } else {
      if (lesson.lessonType === ScheduleNavigationLessonType.Lesson) {
        setTime(
          lessonTimesOptionsForNotMonday.find(
            (lessonTimeOption: ISelectOption) => lessonTimeOption.content === lesson.timePeriod
          ) || lessonTimesOptions[0]
        );
      } else {
        setTime(
          pairTimesOptionsForNotMonday.find(
            (pairTimeOption: ISelectOption) => pairTimeOption.content === lesson.timePeriod
          ) || pairTimesOptions[0]
        );
      }
    }
    setDay(
      daySelectsOptions.find((daySelectOption: ISelectOption) => daySelectOption.content === lesson.workDay) ||
        daySelectsOptions[0]
    );
    setSubject(
      subjectsOptions.find((subjectOption: ISelectOption) => subjectOption.content === lesson.lessonName) ||
        subjectsOptions[0]
    );
    setRoom(lesson.isOnline ? "" : lesson.classRoom ? lesson.classRoom : "");
    setIsOnline(lesson.isOnline);
    if (lesson.groups.length > 0) {
      setGroups([lesson.groups[0]]);
    }
    setSubgroupsCount(lesson.subgroupsCount);
    setChosenSubgroup(
      possibleSubgroups.find(
        (possibleSubgroup: ISelectOption) => parseFloat(possibleSubgroup.content) === lesson.chosenSubgroup
      ) || possibleSubgroups[0]
    );
  }, [lesson]);
  useLayoutEffect(() => {
    ScheduleNotifier.getInstance().subscribe(
      new ScheduleSubscriber((data: any) => {
        if (data.lesson) {
          setLesson(ScheduleConverter.ConvertFromLessonToNavigationLesson(data.lesson, data.schedule));
        }
      }, ScheduleEvent.StartedLessonEditing)
    );
  }, []);

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
                options={day.id === Workday.Monday ? pairTimesOptions : pairTimesOptionsForNotMonday}
                onValueChange={handleChangingTime}
                size={SelectSize.Micro}
              />
            )}
            {!isPair && (
              <Select
                currentValue={time}
                options={day.id === Workday.Monday ? lessonTimesOptions : lessonTimesOptionsForNotMonday}
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
            <CheckBox checked={isOnline} label="Онлайн" onChange={() => handleSettingIsOnline()} />
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
            <ActionButton label={"Сохранить"} type={ActionButtonType.Positive} size={ActionButtonSize.Small} onClick={() => handleSaving()}/>
          </div>
        </div>
      </div>
    </div>
  );
};
