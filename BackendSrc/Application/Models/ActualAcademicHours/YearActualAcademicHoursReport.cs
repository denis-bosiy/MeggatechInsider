using Domain.ReportEntities.SubdeanEntities;
using Domain.TeacherEntities;

namespace Application.Models.ActualAcademicHours;

public class YearActualAcademicHoursReport
{
    public List<YearActualAcademicHoursForSubjectsByTeacher> YearAcademicHoursForSubjectsByTeachers { get; set; }
    public int Year { get; set; }
    public ContractType ContractType { get; set; }
}

public class YearActualAcademicHoursForSubjectsByTeacher()
{
    public string TeacherName { get; set; }
    public List<YearActualAcademicHoursForClassesBySubject> YearAcademicHoursForTeachers { get; set; }
    public YearComment YearComment { get; set; }
}

public class YearActualAcademicHoursForClassesBySubject()
{
    public string SubjectName { get; set; }
    public List<YearActualAcademicHoursForSubgroupsByClass> YearAcademicHoursForClasses { get; set; }
    public float HoursPerWeek { get; set; }
}

public class YearActualAcademicHoursForSubgroupsByClass()
{
    public string ClassName { get; set; }
    public List<YearActualAcademicHoursForSubgroup> YearAcademicHoursForSubgroups;
    public int YearPlannedHours { get; set; }
}

public class YearActualAcademicHoursForSubgroup()
{
    public string SubgroupName { get; set; }
    public Dictionary<DateOnly, int> AcademicHoursByDate { get; set; }
    public int CompletedWorkloadHours { get; set; }
    public int RemoteAcademicHours { get; set; }
    public int CombinedAcademicHours { get; set; }
    /*
     * Остаток относительно плана: план может быть перевыполнен либо недовыполнен
     */
    public int RemainderHoursOfPlan { get; set; }
    /*
     * Процент невыполнения плана
     */
    public float PlanFailurePercent { get; set; }
}