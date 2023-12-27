using Domain.ReportEntities.SubdeanEntities;
using Domain.SubjectEntities;

namespace ExcelGenerator.Models;

public class YearActualAcademicHoursModel
{
    public List<YearActualAcademicHoursForSubjectsByTeacher> YearAcademicHoursForSubjectsByTeachers { get; set; }
    public int Year { get; set; }
    public PaymentType PaymentType { get; set; }
}

public class YearActualAcademicHoursForSubjectsByTeacher()
{
    public string TeacherName { get; set; }
    public string TeacherContractType { get; set; }
    public List<YearActualAcademicHoursForClassesBySubject> YearAcademicHoursForSubjects { get; set; }
    public YearComment YearComment { get; set; }
    // Сумма
    public int SumHours { get; set; }
    // Из суммы дистанц.
    public int RemoteSumHours { get; set; }
    // Из суммы совмещ.
    public int CombinedSumHours { get; set; }
}

public class YearActualAcademicHoursForClassesBySubject()
{
    public string SubjectName { get; set; }
    public List<YearActualAcademicHoursForSubgroupsByClass> YearAcademicHoursForClasses { get; set; }
}

public class YearActualAcademicHoursForSubgroupsByClass()
{
    public string ClassName { get; set; }
    public List<YearActualAcademicHoursForSubgroup> YearAcademicHoursForSubgroups;
    // на шаблоне таблицы это "План часов в год" -> "по классам/группам"
    public int YearHoursByClass { get; set; }
    // на шаблоне таблицы это "План часов в год" -> "план сумма"
    public int YearHoursBySubjectGroup { get; set; }
    // на шаблоне таблицы это "План часов в год" -> "часов в неделю"
    public float HoursPerWeek { get; set; }
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