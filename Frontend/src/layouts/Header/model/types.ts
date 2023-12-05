import { SelectOption } from "../../../components/Select/Select";

export type HeaderData = {
  years: YearSelectOption[];
  currentYear?: YearSelectOption;
  weeks: WeekSelectOption[];
  currentWeek?: WeekSelectOption;
  isLogedIn: boolean;
};

export type YearSelectOption = SelectOption & {
  year: number;
};

export type WeekSelectOption = SelectOption & {
    week: number;
}
