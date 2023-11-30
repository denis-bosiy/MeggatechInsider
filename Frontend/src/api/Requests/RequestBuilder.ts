import { TimetableLessonTimeSettingRequest } from "./TimetableLessonTimeSettingRequest";
import { TimetablePairTimeSettingRequest } from "./TimetablePairTimeSettingRequest";
import { TimetableParadeTimeSettingRequest } from "./TimetableParadeTimeSettingRequest";
import {SyllabusCoursesTeacherRequest} from "./SyllabusCoursesTeacherRequest";
import {SyllabusCoursesSubjectRequest} from "./SyllabusCoursesSubjectRequest";

export class RequestBuilder {
  public static BuildSyllabusCoursesSubjectRequest(data: any, year: number): SyllabusCoursesSubjectRequest {
    return new SyllabusCoursesSubjectRequest(
      data.id,
      data.name,
      data.type,
      data.hoursByPlan,
      data.numberOfGroups,
      year
    );
  }

  public static BuildSyllabusCoursesTeacherRequest(data: any, year: number): SyllabusCoursesTeacherRequest {
    return new SyllabusCoursesTeacherRequest(
      data.id,
      data.name,
      data.workingContract,
      data.workingStartDate,
      data.workExperience,
      data.workExperienceAtTheTimeOfTheEmployment,
      data.birthDay,
      data.age,
      year
    );
  }

  public static BuildTimetablePairTimeSettingRequest(data: any, year: number): TimetablePairTimeSettingRequest {
    return new TimetablePairTimeSettingRequest(data.startTime, data.endTime, year);
  }

  public static BuildTimetablePairTimeSettingRequests(data: any, year: number): TimetablePairTimeSettingRequest[] {
    let requests: TimetablePairTimeSettingRequest[] = [];

    requests = data.map((val: any) => RequestBuilder.BuildTimetablePairTimeSettingRequest(val, year));

    return requests;
  }

  public static BuildTimetableLessonTimeSettingRequest(data: any, year: number): TimetableLessonTimeSettingRequest {
    return new TimetableLessonTimeSettingRequest(data.startTime, data.endTime, year);
  }

  public static BuildTimetableLessonTimeSettingRequests(data: any, year: number): TimetableLessonTimeSettingRequest[] {
    let requests: TimetableLessonTimeSettingRequest[] = [];

    requests = data.map((val: any) => RequestBuilder.BuildTimetableLessonTimeSettingRequest(val, year));

    return requests;
  }

  public static BuildTimetableParadeTimeSettingRequest(data: any, year: number): TimetableParadeTimeSettingRequest {
    return new TimetableParadeTimeSettingRequest(year, data.startTime, data.endTime, data.weekDayCode);
  }
}
