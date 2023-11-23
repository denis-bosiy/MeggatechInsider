type TimetableSettingsPageData = {
    pairs: TimetableSettingsPageTimeData,
    lessons: TimetableSettingsPageTimeData,
    parade: TimetableSettingsPageParadeData,
}

type TimetableSettingsPageTimeData = Array<TimeData>

type TimetableSettingsPageParadeData = {
    weekDay: string,
    startTime: string,
    endTime: string,
}

type TimeData = {
  id: string,
  startTime: string,
  endTime: string,
}

export {
  type TimetableSettingsPageData,
  type TimetableSettingsPageParadeData,
  type TimetableSettingsPageTimeData,
  type TimeData,
};