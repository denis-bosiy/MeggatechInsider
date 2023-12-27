using Domain.ReportEntities.SubdeanEntities;
using Domain.SubjectEntities;
using ExcelGenerator.Data;
using ExcelGenerator.Generators;
using ExcelGenerator.Models;
using OfficeOpenXml;

namespace UnitTests;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void GenerateYearActualAcademicHoursReport()
    {
        // arrange
        ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

        YearActualAcademicHoursModel model = new YearActualAcademicHoursModel
        {
            PaymentType = new PaymentType( "Штат" ),
            Year = 2023,
            YearAcademicHoursForSubjectsByTeachers = new List<YearActualAcademicHoursForSubjectsByTeacher>()
            {
                new YearActualAcademicHoursForSubjectsByTeacher()
                {
                    SumHours = 144,
                    RemoteSumHours = 0,
                    CombinedSumHours = 0,
                    TeacherName = "Иванов Иван Иванович",
                    TeacherContractType = "ГПХ",
                    YearComment = new YearComment( "Ура! Текст комментария", 2023, 1, 1 ),
                    YearAcademicHoursForClasses = new List<YearActualAcademicHoursForClassesBySubject>()
                    {
                        new YearActualAcademicHoursForClassesBySubject()
                        {
                            SubjectName = "История",
                            YearAcademicHoursForSubgroups = new List<YearActualAcademicHoursForSubgroupsByClass>()
                            {
                                new YearActualAcademicHoursForSubgroupsByClass()
                                {
                                    ClassName = "10-1",
                                    YearAcademicHoursForSubgroups = new List<YearActualAcademicHoursForSubgroup>()
                                    {
                                        new YearActualAcademicHoursForSubgroup()
                                        {
                                            SubgroupName = "10-1-1",
                                            AcademicHoursByDate = new Dictionary<DateOnly, int>()
                                            {
                                                { new DateOnly( 2023, 9, 1 ), 8 },
                                                { new DateOnly( 2023, 10, 1 ), 8 },
                                                { new DateOnly( 2023, 11, 1 ), 8 },
                                                { new DateOnly( 2023, 12, 1 ), 8 },
                                                { new DateOnly( 2024, 1, 1 ), 8 },
                                                { new DateOnly( 2024, 2, 1 ), 8 },
                                                { new DateOnly( 2024, 3, 1 ), 8 },
                                                { new DateOnly( 2024, 4, 1 ), 8 },
                                                { new DateOnly( 2024, 5, 1 ), 8 },
                                            },
                                            CompletedWorkloadHours = 71,
                                            RemoteAcademicHours = 0,
                                            CombinedAcademicHours = 0,
                                            RemainderHoursOfPlan = 1,
                                            PlanFailurePercent = 1.4f
                                        },
                                        new YearActualAcademicHoursForSubgroup()
                                        {
                                            SubgroupName = "10-1-2",
                                            AcademicHoursByDate = new Dictionary<DateOnly, int>()
                                            {
                                                { new DateOnly( 2023, 9, 1 ), 8 },
                                                { new DateOnly( 2023, 10, 1 ), 8 },
                                                { new DateOnly( 2023, 11, 1 ), 8 },
                                                { new DateOnly( 2023, 12, 1 ), 8 },
                                                { new DateOnly( 2024, 1, 1 ), 8 },
                                                { new DateOnly( 2024, 2, 1 ), 8 },
                                                { new DateOnly( 2024, 3, 1 ), 8 },
                                                { new DateOnly( 2024, 4, 1 ), 8 },
                                                { new DateOnly( 2024, 5, 1 ), 8 },
                                            },
                                            CompletedWorkloadHours = 71,
                                            RemoteAcademicHours = 0,
                                            CombinedAcademicHours = 0,
                                            RemainderHoursOfPlan = 1,
                                            PlanFailurePercent = 1.4f
                                        }
                                    },
                                    YearHoursByClass = 144,
                                    YearHoursBySubjectGroup = 144,
                                    HoursPerWeek = 2
                                },
                                new YearActualAcademicHoursForSubgroupsByClass()
                                {
                                    ClassName = "10-2",
                                    YearAcademicHoursForSubgroups = new List<YearActualAcademicHoursForSubgroup>()
                                    {
                                        new YearActualAcademicHoursForSubgroup()
                                        {
                                            SubgroupName = "10-2-1",
                                            AcademicHoursByDate = new Dictionary<DateOnly, int>()
                                            {
                                                { new DateOnly( 2023, 9, 1 ), 8 },
                                                { new DateOnly( 2023, 10, 1 ), 8 },
                                                { new DateOnly( 2023, 11, 1 ), 8 },
                                                { new DateOnly( 2023, 12, 1 ), 8 },
                                                { new DateOnly( 2024, 1, 1 ), 8 },
                                                { new DateOnly( 2024, 2, 1 ), 8 },
                                                { new DateOnly( 2024, 3, 1 ), 8 },
                                                { new DateOnly( 2024, 4, 1 ), 8 },
                                                { new DateOnly( 2024, 5, 1 ), 8 },
                                            },
                                            CompletedWorkloadHours = 71,
                                            RemoteAcademicHours = 0,
                                            CombinedAcademicHours = 0,
                                            RemainderHoursOfPlan = 1,
                                            PlanFailurePercent = 1.4f
                                        },
                                        new YearActualAcademicHoursForSubgroup()
                                        {
                                            SubgroupName = "10-2-2",
                                            AcademicHoursByDate = new Dictionary<DateOnly, int>()
                                            {
                                                { new DateOnly( 2023, 9, 1 ), 8 },
                                                { new DateOnly( 2023, 10, 1 ), 8 },
                                                { new DateOnly( 2023, 11, 1 ), 8 },
                                                { new DateOnly( 2023, 12, 1 ), 8 },
                                                { new DateOnly( 2024, 1, 1 ), 8 },
                                                { new DateOnly( 2024, 2, 1 ), 8 },
                                                { new DateOnly( 2024, 3, 1 ), 8 },
                                                { new DateOnly( 2024, 4, 1 ), 8 },
                                                { new DateOnly( 2024, 5, 1 ), 8 },
                                            },
                                            CompletedWorkloadHours = 71,
                                            RemoteAcademicHours = 0,
                                            CombinedAcademicHours = 0,
                                            RemainderHoursOfPlan = 1,
                                            PlanFailurePercent = 1.4f
                                        }
                                    },
                                    YearHoursByClass = 144,
                                    YearHoursBySubjectGroup = 144,
                                    HoursPerWeek = 2
                                }
                            }
                        }
                    }
                }
            }
        };
        
        // act
        byte[] document = new ActualAcademicHoursReportGenerator( new ReportTemplateFileInfoProvider() )
            .GenerateYearActualAcademicHoursReport( model );
        
        // assert
        Assert.That( 0, Is.Not.EqualTo( document.Length ) );
        
        System.IO.File.WriteAllBytes( "YearActualAcademicHoursReport.xlsx", document );
    }
}