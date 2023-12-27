using Api.Models.SubdeanReport;
using Application.Models.ActualAcademicHours;

namespace Api.Mappers.SubdeanReport.YearSubdeanReport
{
    public static class YearSubdeanReportMapper
    {
        public static SubdeanYearReportResponseDto MapToDto( this YearActualAcademicHoursReport report )
        {
            return new SubdeanYearReportResponseDto
            {
                Teachers = report.YearAcademicHoursForSubjectsByTeachers.MapToDtos()
            };
        }

        private static List<SubdeanYearReportResponseHoursDto> MapToDtos(
            this List<YearActualAcademicHoursForSubjectsByTeacher> reports )
        {
            List<SubdeanYearReportResponseHoursDto> dtos = new List<SubdeanYearReportResponseHoursDto>();
            foreach ( YearActualAcademicHoursForSubjectsByTeacher report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanYearReportResponseHoursDto MapToDto(
            this YearActualAcademicHoursForSubjectsByTeacher report )
        {
            return new SubdeanYearReportResponseHoursDto
            {
                TeacherName = report.TeacherName,
                Subjects = report.YearAcademicHoursForTeachers.MapToDtos()
            };
        }

        private static List<SubdeanYearReportResponseSubjectDto> MapToDtos(
            this List<YearActualAcademicHoursForClassesBySubject> reports )
        {
            List<SubdeanYearReportResponseSubjectDto> dtos = new List<SubdeanYearReportResponseSubjectDto>();
            foreach ( YearActualAcademicHoursForClassesBySubject report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanYearReportResponseSubjectDto MapToDto(
            this YearActualAcademicHoursForClassesBySubject report )
        {
            return new SubdeanYearReportResponseSubjectDto
            {
                Subject = report.SubjectName,
                Classes = report.YearAcademicHoursForClasses.MapToDtos()
            };
        }

        private static List<SubdeanYearReportResponseClassDto> MapToDtos(
            this List<YearActualAcademicHoursForSubgroupsByClass> reports )
        {
            List<SubdeanYearReportResponseClassDto> dtos = new List<SubdeanYearReportResponseClassDto>();
            foreach ( YearActualAcademicHoursForSubgroupsByClass report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanYearReportResponseClassDto MapToDto(
            this YearActualAcademicHoursForSubgroupsByClass report )
        {
            return new SubdeanYearReportResponseClassDto
            {
                ClassNumber = report.ClassName,
                TotalDoneHours = report.YearAcademicHoursForSubgroups.First().CompletedWorkloadHours,
                DoneRemotedHours = report.YearAcademicHoursForSubgroups.First().RemoteAcademicHours
            };
        }
    }
}
