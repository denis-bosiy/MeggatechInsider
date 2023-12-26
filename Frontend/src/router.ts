export enum AppRouter {
  // Вход
  Login = "login",

  // Меню
  Main = "/",

  // Вводные данные
  Settings = "settings",

  Basic = "basic",
  // Teachers = "teachers",
  // Timetable = "timetable",

  // Расписание занятий
  Timetable = "timetable",

  TeachersGuidebook = "teachers-guidebook",
  ClassesGuidebook = "classes-guidebook",
  LessonsSchedule = "lessons-schedule",

  // Учебный план
  Syllabus = "syllabus",

  Subjects = "subjects",
  Teachers = "teachers",
  SyllabusTable = "syllabus-table",
  Assigning = "assigning",

  // Расписание курсов
  CoursesTimetable = "courses-timetable",

  // TeachersGuidebook = "teachers-guidebook",
  GroupGuidebook = "group-guidebook",

  // План курсов
  CoursesSyllabus = "courses-syllabus",

  // Subjects = "subjects",
  // Teachers = "teachers",
  CoursesSyllabusTable = "courses-syllabus-table",
  // Assigning = "assigning",

  // Финансовый отчёт
  FinancialReport = "financial-report",

  Tariffication = "tariffication",
  OffBudgetCategories = "off-budget-categories",
  OffBudget = "off-budget",
  Final = "final",

  // Контроль учебного плана за год
  YearImplementationMonitoring = "year-implementation-monitoring",

  // Статистика
  Statistics = "statistics",

  BudgetStatistics = "budget-statistics",
  Categories = "categories",
  // Teachers = "teachers",

  // Контроль учебного плана за месяц
  Curriculum = "curriculum",

  Monitoring = "monitoring",
  Report = "report",

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

export const OutsideMenu: MenuItem[] = [
  {
    url: AppRouter.Login,
    label: "Логинация",
  }
];

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
      { label: "Справочник по преподавателям", url: AppRouter.TeachersGuidebook },
      {
        label: "Справочник по классам",
        url: AppRouter.ClassesGuidebook,
        tabs: {
          class10: "10 класс",
          class11: "11 класс"
        }
      },
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
    url: AppRouter.CoursesTimetable,
    label: "Расписание курсов",
    navigation: [
      { label: "Справочник по преподавателям", url: AppRouter.TeachersGuidebook },
      { label: "Справочник по группам", url: AppRouter.GroupGuidebook },
      { label: "Расписание курсов", url: AppRouter.LessonsSchedule }
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
        url: AppRouter.CoursesSyllabusTable,
        tabs: {
          courses: "Подготовительные курсы",
          expressCourses: "Подготовительные экспресс-курсы",
          schoolOfAYoungProgrammer: "ШЮП"
        }
      },
      {
        label: "Назначение",
        url: AppRouter.Assigning,
        tabs: {
          courses: "Подготовительные курсы",
          expressCourses: "Подготовительные экспресс-курсы",
          schoolOfAYoungProgrammer: "ШЮП"
        }
      }
    ]
  },
  {
    url: AppRouter.Curriculum,
    label: "Контроль учебного плана за месяц",
    navigation: [
      { label: "Табель выполнения за месяц", url: AppRouter.Report },
      { label: "Контроль выполнения за месяц", url: AppRouter.Monitoring }
    ]
  },
  {
    url: AppRouter.FinancialReport,
    label: "Финансовый отчет",
    navigation: [
      { label: "Тарификация", url: AppRouter.Tariffication },
      { label: "Внебюджет", url: AppRouter.OffBudget },
      { label: "Финальный отчет", url: AppRouter.Final },
      { label: "Внебюджетные категории", url: AppRouter.OffBudgetCategories }
    ]
  },
  {
    url: AppRouter.YearImplementationMonitoring,
    label: "Контроль учебного плана за год",
    navigation: [
      { label: "Контроль учебного плана за год", url: "" },
    ]
  },
  {
    url: AppRouter.Statistics,
    label: "Статистика",
    navigation: [
      { label: "Статистика бюджетов", url: AppRouter.BudgetStatistics },
      { label: "Статистика категорий", url: AppRouter.Categories },
      { label: "Статистика преподавателей", url: AppRouter.Teachers }
    ]
  }
];
