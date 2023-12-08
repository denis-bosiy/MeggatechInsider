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
  CoursesTimetable = "courses-timetable",
  LessonsGuidebook = "lessons-guidebook",
  ClassesGuidebook = "classes-guidebook",
  TeacherGuidebook = "teacher-guidebook",
  GroupGuidebook = "group-guidebook",
  Settings = "settings",
  FinancialReport = "financial-report",
  OffBudgetReport = "off-budget-report",
  FinalReport = "final-report",
  TarifficationReport = "tariffication-report",
  Basic = "basic",
  BudgetStatistics = "budget-statistics",
  Statistics = "statistics",
  Categories = "categories",
  OffBudgetCategories = "off-budget-categories",
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
      { label: "Учебный план", url: AppRouter.Syllabus },
      { label: "Назначение", url: AppRouter.Assigning }
    ]
  },
  {
    url: AppRouter.CoursesTimetable,
    label: "Расписание курсов",
    navigation: [
      { label: "Справочник по преподавателям", url: AppRouter.TeacherGuidebook },
      { label: "Справочник по группам", url: AppRouter.GroupGuidebook },
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
    url: "#",
    label: "Контроль учебного плана за месяц",
    navigation: [
      { label: "Табель выполнения за месяц", url: "#" },
      { label: "Контроль выполнения за месяц", url: "#" }
    ]
  },
  {
    url: AppRouter.FinancialReport,
    label: "Финансовый отчет",
    navigation: [
      { label: "Тарификация", url: AppRouter.TarifficationReport },
      { label: "Внебюджет", url: AppRouter.OffBudgetReport },
      { label: "Финальный отчет", url: AppRouter.FinalReport },
      { label: "Внебюджетные категории", url: AppRouter.OffBudgetCategories }
    ]
  },
  {
    url: "#",
    label: "Контроль учебного плана за год"
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
