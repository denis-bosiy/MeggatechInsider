import { TimetableLessonTimeSettingResponse } from "./TimetableLessonTimeSettingResponse";
import { TimetablePairTimeSettingResponse } from "./TimetablePairTimeSettingResponse";
import { TimetableParadeTimeSettingResponse } from "./TimetableParadeTimeSettingResponse";
import { SyllabusSubjectResponse } from "./SyllabusSubjectResponse";
import { SyllabusTeacherResponse } from "./SyllabusTeacherResponse";
import { DiscrepancyResponse } from "./DiscrepancyResponse";
import { TimetableTeacherResponse } from "./TimetableTeacherResponse";
import { AvailableHourResponse } from "./AvailableHourResponse";
import {SyllabusCoursesSubjectResponse} from "./SyllabusCoursesSubjectResponse";
import {SyllabusCoursesTeacherResponse} from './SyllabusCoursesTeacherResponse';

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

  public static BuildSyllabusSubjectResponse(data: any): SyllabusSubjectResponse {
    return new SyllabusSubjectResponse(
      data.id,
      data.name,
      data.financing,
      data.type,
      data.category,
      data.surchargeForNotebooks,
      data.numberOf10,
      data.numberOfGroupsIn10,
      data.numberOf11,
      data.numberOfGroupsIn11,
      data.isFinalExam
    );
  }

  public static BuildSyllabusSubjectsResponse(data: any): SyllabusSubjectResponse[] {
    let subjects: SyllabusSubjectResponse[] = [];

    subjects = data.data.subjects.map((subject: any) => ResponseBuilder.BuildSyllabusSubjectResponse(subject));

    return subjects;
  }

  public static BuildSyllabusCoursesSubjectResponse(data: any): SyllabusCoursesSubjectResponse {
    return new SyllabusCoursesSubjectResponse(
      data.id,
      data.name,
      data.type,
      data.hoursByPlan,
      data.numberOfGroups
    );
  }

  public static BuildSyllabusCoursesSubjectsResponse(data: any): SyllabusCoursesSubjectResponse[] {
    let subjects: SyllabusCoursesSubjectResponse[] = [];

    subjects = data.data.courses.map((subject: any) => ResponseBuilder.BuildSyllabusCoursesSubjectResponse(subject));

    return subjects;
  }

  public static BuildSyllabusTeacherResponse(data: any): SyllabusTeacherResponse {
    return new SyllabusTeacherResponse(
      data.id,
      data.name,
      data.category,
      data.categoryPayrollAccounting,
      data.workingContract,
      data.workingContractPayrollAccounting,
      data.education,
      data.isClassroomTeacher,
      data.inDepthSubjectPayrollAccounting,
      data.finalExamPayrollAccounting,
      data.workingStartDate,
      data.workExperience,
      data.workExperienceAtTheTimeOfTheEmployment
    );
  }

  public static BuildSyllabusTeachersResponse(data: any): SyllabusTeacherResponse[] {
    let teachers: SyllabusTeacherResponse[] = [];

    teachers = data.data.teachers.map((teacher: any) => ResponseBuilder.BuildSyllabusTeacherResponse(teacher));

    return teachers;
  }

  public static BuildSyllabusCoursesTeacherResponse(data: any): SyllabusCoursesTeacherResponse {
    return new SyllabusCoursesTeacherResponse(
      data.id,
      data.name,
      data.workingContract,
      data.workingStartDate,
      data.workExperience,
      data.workExperienceAtTheTimeOfTheEmployment,
      data.birthDay,
      data.age,
    );
  }

  public static BuildSyllabusCoursesTeachersResponse(data: any): SyllabusCoursesTeacherResponse[] {
    let teachers: SyllabusCoursesTeacherResponse[] = [];

    teachers = data.data.teachers.map((teacher: any) => ResponseBuilder.BuildSyllabusCoursesTeacherResponse(teacher));

    return teachers;
  }

  public static BuildDiscrepancyResponse(data: any): DiscrepancyResponse {
    return new DiscrepancyResponse(data.name, data.groupCount, data.groupCountByPlan);
  }

  public static BuildDiscrepanciesResponse(data: any): DiscrepancyResponse[] {
    let discrepancies: DiscrepancyResponse[] = [];

    discrepancies = data.data.differences.map((difference: any) =>
      ResponseBuilder.BuildDiscrepancyResponse(difference)
    );

    return discrepancies;
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
