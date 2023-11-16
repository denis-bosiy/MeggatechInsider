export enum AppRouter {
  Main = "/",
  Login = "login",
  Syllabus = "syllabus",
  CoursesSyllabus = "courses-syllabus",
  Subjects = "subjects",
  Teachers = "teachers",
  Assigning = "assigning",
  Timetable = "timetable",
  TeacherGuidebook = "teacher-guidebook",
  Settings = "settings",
  Statistics = "statistics",
  BudgetStatistics = "budget-statistics",
  Basic = "basic",
  NotFound = "*",
}

interface MockupItem {
  url: string
  label: string
}
export const Mockup: MockupItem[] = [
  { url: AppRouter.Settings, label: "Вводные данные" },
  { url: AppRouter.Timetable, label: "Расписание занятий" },
  { url: AppRouter.Syllabus, label: "Учебный план" },
  { url: "#", label: "Расписание курсов" },
  { url: AppRouter.CoursesSyllabus, label: "План курсов" },
  { url: "#", label: "Контроль учебного плана за месяц" },
  { url: "#", label: "Финансовый отчет" },
  { url: "#", label: "Контроль учебного плана за год" },
  { url: AppRouter.Statistics, label: "Статистика" },
  { url: AppRouter.BudgetStatistics, label: "Статистика бюджетов" },
];
