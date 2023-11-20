import { TimetableLessonTimeSettingResponse } from "./TimetableLessonTimeSettingResponse";
import { TimetablePairTimeSettingResponse } from "./TimetablePairTimeSettingResponse";
import { TimetableParadeTimeSettingResponse } from "./TimetableParadeTimeSettingResponse";

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
}
