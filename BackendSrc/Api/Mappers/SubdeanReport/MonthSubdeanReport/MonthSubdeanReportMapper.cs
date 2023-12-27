using Api.Models.SubdeanReport;
using Application.Models.ActualAcademicHours;

namespace Api.Mappers.SubdeanReport.MonthSubdeanReport
{
    public static class MonthSubdeanReportMapper
    {
        public static SubdeanMonthReportResponseDto MapToDto( this MonthActualAcademicHoursReport report )
        {
            return new SubdeanMonthReportResponseDto
            {
                StartingDayNumber = 1,
                DayCount = GetDayCount( report.Month, report.Year ),
                Hours = report.AcademicHoursForSubjectsByTeachers.MapToDtos()
            };
        }

        private static List<SubdeanMonthReportResponseHoursDto> MapToDtos( 
            this List<ActualAcademicHoursForSubjectsByTeacher> reports )
        {
            List<SubdeanMonthReportResponseHoursDto> dtos = new List<SubdeanMonthReportResponseHoursDto>();
            foreach ( ActualAcademicHoursForSubjectsByTeacher report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanMonthReportResponseHoursDto MapToDto(
            this ActualAcademicHoursForSubjectsByTeacher report )
        {
            return new SubdeanMonthReportResponseHoursDto
            {
                TeacherName = report.TeacherName,
                Subjects = report.AcademicHoursForTeachers.MapToDtos()
            };
        } 

        private static List<SubdeanMonthReportResponseSubjectDto> MapToDtos(
            this List<ActualAcademicHoursForClassesBySubject> reports )
        {
            List<SubdeanMonthReportResponseSubjectDto> dtos = new List<SubdeanMonthReportResponseSubjectDto>();
            foreach ( ActualAcademicHoursForClassesBySubject report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanMonthReportResponseSubjectDto MapToDto(
            this ActualAcademicHoursForClassesBySubject report )
        {
            return new SubdeanMonthReportResponseSubjectDto
            {
                Title = report.SubjectName,
                Classes = report.AcademicHoursForClasses.MapToDtos()
            };
        }

        private static List<SubdeanMonthReportResponseClassDto> MapToDtos(
            this List<ActualAcademicHoursForSubgroupsByClass> reports )
        {
            List<SubdeanMonthReportResponseClassDto> dtos = new List<SubdeanMonthReportResponseClassDto>();
            foreach ( ActualAcademicHoursForSubgroupsByClass report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanMonthReportResponseClassDto MapToDto(
            this ActualAcademicHoursForSubgroupsByClass report )
        {
            return new SubdeanMonthReportResponseClassDto
            {
                ClassNumber = report.ClassName,
                Groups = report.AcademicHoursForSubgroups.MapToDtos()
            };
        }

        private static List<SubdeanMonthReportResponseGroupDto> MapToDtos(
            this List<ActualAcademicHoursForSubgroup> reports )
        {
            List<SubdeanMonthReportResponseGroupDto> dtos = new List<SubdeanMonthReportResponseGroupDto>();
            foreach ( ActualAcademicHoursForSubgroup report in reports )
            {
                dtos.Add( report.MapToDto() );
            }
            return dtos;
        }

        private static SubdeanMonthReportResponseGroupDto MapToDto(
            this ActualAcademicHoursForSubgroup report )
        {
            return new SubdeanMonthReportResponseGroupDto
            {
                GroupNumber = report.SubgroupName,
                TotalHours = report.TotalAcademicHours,
                Hours = report.AcademicHoursByDate.Select( r => r.Value ).ToList(),
                RemoteHours = report.RemoteAcademicHours
            };
        }

        private static int GetDayCount( int month, int year )
        {
            List<int> thirtyOneDayMonths = new List<int> { 1, 3, 5, 7, 8, 10, 12 };
            if ( thirtyOneDayMonths.Contains( month ) )
            {
                return 31;
            }
            List<int> thirtyDayMonths = new List<int> { 4, 6, 9, 11 };
            if ( thirtyDayMonths.Contains( month ) )
            {
                return 30;
            }
            return year % 4 == 0 ? 29 : 28;
        }
    }
}
