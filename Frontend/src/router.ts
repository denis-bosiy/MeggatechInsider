export enum AppRouter {
  Main = "/",
  Login = "login",
  Syllabus = "syllabus",
  CoursesSyllabus = "courses_syllabus",
  Subjects = "subjects",
  Teachers = "teachers",
  Assigning = "assigning",
  Timetable = "timetable",
  LessonsSchedule = "lessons-schedule",
  TeacherGuidebook = "teacher-guidebook",
  Settings = "settings",
  Basic = "basic",
  NotFound = "*"
}

export interface TabNavigation {
  [key: string]: string;
}

export interface NavigationItem {
  url: string;
  label: string;
  tabs?: TabNavigation;
}

interface MenuItem {
  url: string;
  label: string;
  navigation?: NavigationItem[];
}

export const Menu: MenuItem[] = [
  {
    url: AppRouter.Settings,
    label: "Вводные данные",
    navigation: [
      {
        label: "Основные настройки",
        url: AppRouter.Basic
      },
      { label: "Настройки преподавателей", url: AppRouter.Teachers },
      {
        label: "Настройки предметов",
        url: AppRouter.Subjects,
        tabs: {
          finances: "Финансирование предмета",
          guidebooks: "Справочники предметов",
          types: "Типы предметов"
        }
      },
      { label: "Настройки расписания", url: AppRouter.Timetable }
    ]
  },
  {
    url: AppRouter.Timetable,
    label: "Расписание занятий",
    navigation: [
      { label: "Справочник по преподавателям", url: AppRouter.TeacherGuidebook },
      { label: "Справочник по классам", url: "#" },
      { label: "Расписание", url: AppRouter.LessonsSchedule }
    ]
  },
  {
    url: AppRouter.Syllabus,
    label: "Учебный план",
    navigation: [
      { label: "Предметы", url: AppRouter.Subjects },
      { label: "Преподаватели", url: "#" },
      { label: "Учебный план", url: AppRouter.Syllabus },
      { label: "Назначение", url: "#" }
    ]
  },
  {
    url: "#",
    label: "Расписание курсов",
    navigation: [
      { label: "Справочник по преподавателям", url: "#" },
      { label: "Справочник по группам", url: "#" },
      { label: "Расписание курсов", url: "#" }
    ]
  },
  {
    url: AppRouter.CoursesSyllabus,
    label: "План курсов",
    navigation: [
      { label: "Курсы", url: AppRouter.Subjects },
      { label: "Преподаватели", url: AppRouter.Teachers },
      {
        label: "План",
        url: AppRouter.Assigning,
        tabs: {
          courses: "Подготовиительные курсы",
          expressCourses: "Подготовиительные экспресс курсы",
          shup: "ШЮП"
        }
      },
      { label: "Назначение", url: "#" }
    ]
  },
  {
    url: "#",
    label: "Контроль учебного плана за месяц",
    navigation: [
      { label: "Табель выполнения за месяц", url: "#" },
      { label: "Контроль выполнения за месяц", url: "#" }
    ]
  },
  {
    url: "#",
    label: "Финансовый отчет",
    navigation: [
      { label: "Тарификация", url: "#" },
      { label: "Внебюджет", url: "#" },
      { label: "Финальный отчет", url: "#" },
      { label: "Внебюджетные категории", url: "#" }
    ]
  },
  {
    url: "#",
    label: "Контроль учебного плана за год"
  },
  {
    url: "#",
    label: "Статистика",
    navigation: [
      { label: "Статистика бюджетов", url: "#" },
      { label: "Статистика категорий", url: "#" },
      { label: "Статистика преподавателей", url: "#" }
    ]
  }
];
