using ExcelGenerator.Data;
using ExcelGenerator.Models;
using OfficeOpenXml;
using TemplateConstants = ExcelGenerator.Data.YearActualAcademicHoursReportTemplateConstants;

namespace ExcelGenerator.Generators;

public class ActualAcademicHoursReportGenerator : IActualAcademicHoursReportGenerator
{
    public IReportTemplateFileInfoProvider _reportTemplateFileInfoProvider;

    public ActualAcademicHoursReportGenerator( IReportTemplateFileInfoProvider reportTemplateFileInfoProvider )
    {
        _reportTemplateFileInfoProvider = reportTemplateFileInfoProvider;
    }

    public byte[] GenerateYearActualAcademicHoursReport( YearActualAcademicHoursModel model )
    {
        using ( ExcelPackage document = new ExcelPackage(
                   _reportTemplateFileInfoProvider.GetOutputFileInfo( ReportTemplateType
                       .YearActualAcademicHoursReportTemplate ),
                   _reportTemplateFileInfoProvider.GetTemplateFileInfo( ReportTemplateType
                       .YearActualAcademicHoursReportTemplate ) )
              )
        {
            ExcelWorksheet worksheet = document.Workbook.Worksheets[ "Result" ];

            BuildHeader( worksheet, model, document.Workbook.Names );

            BuildBody( worksheet, model, document.Workbook.Names );

            return document.GetAsByteArray();
        }
    }

    public byte[] GenerateMonthActualAcademicHoursReport( MonthActualAcademicHoursModel model ) =>
        throw new NotImplementedException();

    private void BuildHeader( ExcelWorksheet worksheet, YearActualAcademicHoursModel model,
        ExcelNamedRangeCollection excelNamedRangeCollection )
    {
        worksheet.Cells[ "Year" ].Value = String.Format(
            worksheet.Cells[ "Year" ].Value.ToString() ?? String.Empty,
            $"{model.Year}-{model.Year + 1}" );
    }

    private void BuildBody( ExcelWorksheet worksheet, YearActualAcademicHoursModel model,
        ExcelNamedRangeCollection excelNamedRangeCollection )
    {
        ExcelRange currentCells = worksheet.Cells[ "TableData" ];
        int rowNumber = 1;

        foreach ( YearActualAcademicHoursForSubjectsByTeacher teacherItem in model
                     .YearAcademicHoursForSubjectsByTeachers )
        {
            BuildTeacherItem( worksheet, ref currentCells, ref rowNumber, teacherItem );
        }
    }

    private void BuildTeacherItem( ExcelWorksheet worksheet, ref ExcelRange currentCells, ref int rowNumber,
        YearActualAcademicHoursForSubjectsByTeacher teacherItem )
    {
        // считаем количество подгрупп
        int subgroupsNumber = (
            from subjectHours in teacherItem.YearAcademicHoursForSubjects
            from classHours in subjectHours.YearAcademicHoursForClasses
            from subgroupHours in classHours.YearAcademicHoursForSubgroups
            select subgroupHours ).Count();
        worksheet.InsertRow( currentCells.Start.Row, subgroupsNumber );

        //получаем ExcelRange
        ExcelRange excelRange = currentCells[ currentCells.Start.Row, currentCells.Start.Column,
            currentCells.End.Row + subgroupsNumber,
            currentCells.End.Column ];

        //мержим ячейки преподавателя
        ExcelRange teacherCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column,
            excelRange.End.Row - 1,
            excelRange.Start.Column ];
        teacherCells.Merge = true;
        teacherCells.Value = teacherItem.TeacherName;

        //мержим ячейки типа преподавателя
        ExcelRange teacherCategoryTypeCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + TemplateConstants.TEACHER_CATEGORY_TYPE_COLUMN_OFFSET,
            excelRange.End.Row - 1,
            excelRange.Start.Column + TemplateConstants.TEACHER_CATEGORY_TYPE_COLUMN_OFFSET ];
        teacherCategoryTypeCells.Merge = true;
        teacherCategoryTypeCells.Value = teacherItem.TeacherContractType;

        //мержим ячейки суммы часов преподавателя
        ExcelRange sumHoursCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + TemplateConstants.TEACHER_SUM_HOURS_COLUMN_OFFSET,
            excelRange.End.Row - 1,
            excelRange.Start.Column + TemplateConstants.TEACHER_SUM_HOURS_COLUMN_OFFSET ];
        sumHoursCells.Merge = true;
        sumHoursCells.Value = teacherItem.SumHours;

        //мержим ячейки суммы дистанц. часов преподавателя
        ExcelRange remoteHoursCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + TemplateConstants.TEACHER_REMOTE_HOURS_COLUMN_OFFSET,
            excelRange.End.Row - 1,
            excelRange.Start.Column + TemplateConstants.TEACHER_REMOTE_HOURS_COLUMN_OFFSET ];
        remoteHoursCells.Merge = true;
        remoteHoursCells.Value = teacherItem.RemoteSumHours;

        //мержим ячейки суммы совмещ. часов преподавателя
        ExcelRange сombinedSumHoursCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + TemplateConstants.TEACHER_COMBINED_HOURS_COLUMN_OFFSET,
            excelRange.End.Row - 1,
            excelRange.Start.Column + TemplateConstants.TEACHER_COMBINED_HOURS_COLUMN_OFFSET ];
        сombinedSumHoursCells.Merge = true;
        сombinedSumHoursCells.Value = teacherItem.RemoteSumHours;

        // идем по предметам
        int subjectRowOffset = 0;
        foreach ( YearActualAcademicHoursForClassesBySubject subject in teacherItem.YearAcademicHoursForSubjects )
        {
            int rowsForSubject = subject.YearAcademicHoursForClasses
                .SelectMany( classHours => classHours.YearAcademicHoursForSubgroups ).Count();
            ExcelRange subjectCells = worksheet.Cells[ excelRange.Start.Row + subjectRowOffset,
                excelRange.Start.Column + TemplateConstants.SUBJECT_NAME_COLUMN_OFFSET,
                excelRange.Start.Row + subjectRowOffset + rowsForSubject - 1,
                excelRange.Start.Column + TemplateConstants.SUBJECT_NAME_COLUMN_OFFSET ];
            subjectCells.Merge = true;
            subjectCells.Value = subject.SubjectName;

            int classRowOffset = 0;
            foreach ( YearActualAcademicHoursForSubgroupsByClass classHours in subject.YearAcademicHoursForClasses )
            {
                int rowsForClass = classHours.YearAcademicHoursForSubgroups.Count;
                // выставляем значение для класса
                ExcelRange classCells = worksheet.Cells[ excelRange.Start.Row + subjectRowOffset + classRowOffset,
                    excelRange.Start.Column + TemplateConstants.CLASS_NAME_COLUMN_OFFSET,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + TemplateConstants.CLASS_NAME_COLUMN_OFFSET ];
                classCells.Merge = true;
                classCells.Value = classHours.ClassName;

                // выставляем План часов в год -> по классам
                ExcelRange yearHoursByClassCells = worksheet.Cells[
                    excelRange.Start.Row + subjectRowOffset + classRowOffset, excelRange.Start.Column + TemplateConstants.YEAR_HOURS_BY_CLASS_COLUMN_OFFSET,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + TemplateConstants.YEAR_HOURS_BY_CLASS_COLUMN_OFFSET ];
                yearHoursByClassCells.Merge = true;
                yearHoursByClassCells.Value = classHours.YearHoursByClass;

                // выставляем План часов в год -> план сумма
                ExcelRange yearHoursBySubjectGroupCells = worksheet.Cells[
                    excelRange.Start.Row + subjectRowOffset + classRowOffset, excelRange.Start.Column + TemplateConstants.YEAR_HOURS_BY_SUBJECT_GROUP_COLUMN_OFFSET,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + TemplateConstants.YEAR_HOURS_BY_SUBJECT_GROUP_COLUMN_OFFSET ];
                yearHoursBySubjectGroupCells.Merge = true;
                yearHoursBySubjectGroupCells.Value = classHours.YearHoursBySubjectGroup;

                // выставляем План часов в год -> часов в неделю
                ExcelRange hoursPerWeekCells = worksheet.Cells[
                    excelRange.Start.Row + subjectRowOffset + classRowOffset, excelRange.Start.Column + TemplateConstants.HOURS_PER_WEEK_COLUMN_OFFSET,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + TemplateConstants.HOURS_PER_WEEK_COLUMN_OFFSET ];
                hoursPerWeekCells.Merge = true;
                hoursPerWeekCells.Value = classHours.HoursPerWeek;

                int subgroupRowOffset = 0;
                foreach ( YearActualAcademicHoursForSubgroup subgroupHours in classHours.YearAcademicHoursForSubgroups )
                {
                    // выставляем План часов в год -> часов в неделю
                    int rowsForSubgroup = 1;
                    ExcelRange subgroupCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + TemplateConstants.SUBGROUP_NAME_COLUMN_OFFSET,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + TemplateConstants.SUBGROUP_NAME_COLUMN_OFFSET ];
                    subgroupCells.Merge = true;
                    subgroupCells.Value = subgroupHours.SubgroupName;
                    int monthOffset = 0;
                    foreach ( KeyValuePair<DateOnly, int> hoursByDate in subgroupHours.AcademicHoursByDate )
                    {
                        ExcelRange monthCells = worksheet.Cells[
                            excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                            excelRange.Start.Column + TemplateConstants.HOURS_BY_DATE_START_COLUMN_OFFSET + monthOffset,
                            excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset +
                            rowsForSubgroup - 1,
                            excelRange.Start.Column + TemplateConstants.HOURS_BY_DATE_START_COLUMN_OFFSET + monthOffset ];
                        monthCells.Value = hoursByDate.Value;
                        monthOffset++;
                    }

                    ExcelRange completedWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + TemplateConstants.COMPLETED_WORKLOAD_HOURS_COLUMN_OFFSET,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + TemplateConstants.COMPLETED_WORKLOAD_HOURS_COLUMN_OFFSET ];
                    completedWorkloadHoursCells.Merge = true;
                    completedWorkloadHoursCells.Value = subgroupHours.CompletedWorkloadHours;

                    ExcelRange remoteWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + TemplateConstants.REMOTE_ACADEMIC_HOURS_COLUMN_OFFSET,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + TemplateConstants.REMOTE_ACADEMIC_HOURS_COLUMN_OFFSET ];
                    remoteWorkloadHoursCells.Merge = true;
                    remoteWorkloadHoursCells.Value = subgroupHours.RemoteAcademicHours;

                    ExcelRange combinedWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + TemplateConstants.COMBINED_ACADEMIC_HOURS_COLUMN_OFFSET,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + TemplateConstants.COMBINED_ACADEMIC_HOURS_COLUMN_OFFSET ];
                    combinedWorkloadHoursCells.Merge = true;
                    combinedWorkloadHoursCells.Value = subgroupHours.CombinedAcademicHours;

                    ExcelRange remainderWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + TemplateConstants.REMAINDER_HOURS_OF_PLAN_COLUMN_OFFSET,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + TemplateConstants.REMAINDER_HOURS_OF_PLAN_COLUMN_OFFSET ];
                    remainderWorkloadHoursCells.Merge = true;
                    remainderWorkloadHoursCells.Value = subgroupHours.RemainderHoursOfPlan;

                    ExcelRange planFailureCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + TemplateConstants.PLAN_FAILURE_PERCENT_COLUMN_OFFSET,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + TemplateConstants.PLAN_FAILURE_PERCENT_COLUMN_OFFSET ];
                    planFailureCells.Merge = true;
                    planFailureCells.Value = subgroupHours.PlanFailurePercent;

                    subgroupRowOffset += 1;
                }

                classRowOffset += rowsForClass;
            }

            subjectRowOffset += rowsForSubject;
        }

        currentCells = MoveNextCurrentCell( worksheet, currentCells, subgroupsNumber );
    }

    private static ExcelRange MoveNextCurrentCell( ExcelWorksheet worksheet, ExcelRange currentCell, int offset )
    {
        currentCell = worksheet.Cells[
            currentCell.Start.Row + offset,
            currentCell.Start.Column,
            currentCell.Start.Row + offset,
            currentCell.End.Column ];
        return currentCell;
    }
}