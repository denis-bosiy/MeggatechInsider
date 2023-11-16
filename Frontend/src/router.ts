export enum AppRouter {
  Main = "/",
  Login = "login",
  Syllabus = "syllabus",
  SyllabusTable = "syllabus-table",
  CoursesSyllabus = "courses-syllabus",
  CoursesSyllabusTable = "courses-syllabus-table",
  Subjects = "subjects",
  Teachers = "teachers",
  Assigning = "assigning",
  Timetable = "timetable",
  LessonsSchedule = "lessons-schedule",
  LessonsGuidebook = "lessons-guidebook",
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
      { label: "Справочник по классам", url: AppRouter.LessonsGuidebook },
      { label: "Расписание", url: AppRouter.LessonsSchedule }
    ]
  },
  {
    url: AppRouter.Syllabus,
    label: "Учебный план",
    navigation: [
      { label: "Предметы", url: AppRouter.Subjects },
      { label: "Преподаватели", url: AppRouter.Teachers },
      { label: "Учебный план", url: AppRouter.SyllabusTable },
      { label: "Назначение", url: AppRouter.Assigning }
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
        url: AppRouter.CoursesSyllabusTable
      },
      {
        label: "Назначение",
        url: AppRouter.Assigning,
        tabs: {
          courses: "Подготовительные курсы",
          expressCourses: "Подготовительные экспресс курсы",
          shup: "ШЮП"
        }
      }
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
