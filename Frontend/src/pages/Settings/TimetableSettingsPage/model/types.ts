type TimetableSettingsPageData = {
    pairs: TimetableSettingsPageTimeData,
    lessons: TimetableSettingsPageTimeData,
    parade: TimetableSettingsPageParadeData,
}

type TimetableSettingsPageTimeData = Array<TimeData>

type TimetableSettingsPageParadeData = {
    week_day: string,
    start_time: string,
    end_time: string,
}

type TimeData = {
  id: string,
  start_time: string,
  end_time: string,
}

export {
  type TimetableSettingsPageData,
  type TimetableSettingsPageParadeData,
  type TimetableSettingsPageTimeData,
};