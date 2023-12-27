using Domain.ReportEntities.SubdeanEntities;
using Domain.SubjectEntities;

namespace ExcelGenerator.Models;

public class MonthActualAcademicHoursModel
{
    public List<ActualAcademicHoursForSubjectsByTeacher> AcademicHoursForSubjectsByTeachers { get; set; }
    public int Year { get; set; }
    public int Month { get; set; }
    public PaymentType PaymentType { get; set; }
}

public class ActualAcademicHoursForSubgroup()
{
    public string SubgroupName { get; set; }
    public Dictionary<DateOnly, int> AcademicHoursByDate { get; set; }
    public int RemoteAcademicHours { get; set; }
    public int CombinedAcademicHours { get; set; }
    public int TotalAcademicHours { get; set; }
}

public class ActualAcademicHoursForSubgroupsByClass()
{
    public string ClassName { get; set; }
    public List<ActualAcademicHoursForSubgroup> AcademicHoursForSubgroups;
}

public class ActualAcademicHoursForClassesBySubject()
{
    public string SubjectName { get; set; }
    public List<ActualAcademicHoursForSubgroupsByClass> AcademicHoursForClasses { get; set; }
}

public class ActualAcademicHoursForSubjectsByTeacher()
{
    public string TeacherName { get; set; }
    public List<ActualAcademicHoursForClassesBySubject> AcademicHoursForTeachers { get; set; }
    public MonthComment MonthComment { get; set; }
}