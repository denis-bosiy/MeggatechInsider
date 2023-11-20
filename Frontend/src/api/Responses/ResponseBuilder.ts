import { TimetableLessonTimeSettingResponse } from "./TimetableLessonTimeSettingResponse";
import { TimetablePairTimeSettingResponse } from "./TimetablePairTimeSettingResponse";
import { TimetableParadeTimeSettingResponse } from "./TimetableParadeTimeSettingResponse";
import { TimetableTeacherResponse } from "./TimetableTeacherResponse";
import { AvailableHourResponse } from "./AvailableHourResponse";

export class ResponseBuilder {
  public static BuildTimetablePairTimeSettingsResponse(data: any): TimetablePairTimeSettingResponse {
    return new TimetablePairTimeSettingResponse(data.id.toString(), data.startTime, data.endTime);
  }

  public static BuildTimetablePairTimeSettingsResponses(data: any): TimetablePairTimeSettingResponse[] {
    let responses: TimetablePairTimeSettingResponse[] = [];

    responses = data.data.pairTimes.map((pairTime: any) =>
      ResponseBuilder.BuildTimetablePairTimeSettingsResponse(pairTime)
    );

    return responses;
  }

  public static BuildTimetableLessonTimeSettingsResponse(data: any): TimetableLessonTimeSettingResponse {
    return new TimetableLessonTimeSettingResponse(data.id.toString(), data.startTime, data.endTime);
  }

  public static BuildTimetableLessonTimeSettingsResponses(data: any): TimetableLessonTimeSettingResponse[] {
    let responses: TimetableLessonTimeSettingResponse[] = [];

    responses = data.data.lessonTimes.map((lessonTime: any) =>
      ResponseBuilder.BuildTimetablePairTimeSettingsResponse(lessonTime)
    );

    return responses;
  }

  public static BuildTimetableParadeTimeSettingResponse(data: any): TimetableParadeTimeSettingResponse {
    return new TimetableParadeTimeSettingResponse(data.data.weekDay, data.data.startTime, data.data.endTime);
  }

  public static BuildAvailableHourResponse(data: any): AvailableHourResponse {
    return new AvailableHourResponse(data.id, data.weekDay, data.startTime, data.endTime);
  }

  public static BuildTimetableTeacherResponse(data: any): TimetableTeacherResponse {
    return new TimetableTeacherResponse(
      data.id,
      data.subjectName,
      data.subjectId,
      data.teacherName,
      data.teacherId,
      data.availableHours.map((availableHour: any) => ResponseBuilder.BuildAvailableHourResponse(availableHour)),
      data.distributedHoursToPlan,
      data.hoursToPlan,
      data.creditHours,
      data.workedOverPlan
    );
  }

  public static BuildTimetableTeacherResponses(data: any): TimetableTeacherResponse[] {
    let responses: TimetableTeacherResponse[] = [];

    responses = data.data.teachers.map((teacher: any) => ResponseBuilder.BuildTimetableTeacherResponse(teacher));

    return responses;
  }
}
