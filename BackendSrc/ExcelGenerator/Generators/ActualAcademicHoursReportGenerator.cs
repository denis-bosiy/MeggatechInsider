using ExcelGenerator.Data;
using ExcelGenerator.Models;
using OfficeOpenXml;

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
        ExcelRange teacherCategoryTypeCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + 1,
            excelRange.End.Row - 1,
            excelRange.Start.Column + 1 ];
        teacherCategoryTypeCells.Merge = true;
        teacherCategoryTypeCells.Value = teacherItem.TeacherContractType;

        //мержим ячейки суммы часов преподавателя
        ExcelRange sumHoursCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + 21,
            excelRange.End.Row - 1,
            excelRange.Start.Column + 21 ];
        sumHoursCells.Merge = true;
        sumHoursCells.Value = teacherItem.SumHours;

        //мержим ячейки суммы дистанц. часов преподавателя
        ExcelRange remoteHoursCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + 22,
            excelRange.End.Row - 1,
            excelRange.Start.Column + 22 ];
        remoteHoursCells.Merge = true;
        remoteHoursCells.Value = teacherItem.RemoteSumHours;

        //мержим ячейки суммы совмещ. часов преподавателя
        ExcelRange сombinedSumHoursCells = worksheet.Cells[ excelRange.Start.Row, excelRange.Start.Column + 23,
            excelRange.End.Row - 1,
            excelRange.Start.Column + 23 ];
        сombinedSumHoursCells.Merge = true;
        сombinedSumHoursCells.Value = teacherItem.RemoteSumHours;

        // идем по предметам
        int subjectRowOffset = 0;
        foreach ( YearActualAcademicHoursForClassesBySubject subject in teacherItem.YearAcademicHoursForSubjects )
        {
            int rowsForSubject = subject.YearAcademicHoursForClasses
                .SelectMany( classHours => classHours.YearAcademicHoursForSubgroups ).Count();
            ExcelRange subjectCells = worksheet.Cells[ excelRange.Start.Row + subjectRowOffset,
                excelRange.Start.Column + 2,
                excelRange.Start.Row + subjectRowOffset + rowsForSubject - 1,
                excelRange.Start.Column + 2 ];
            subjectCells.Merge = true;
            subjectCells.Value = subject.SubjectName;

            int classRowOffset = 0;
            foreach ( YearActualAcademicHoursForSubgroupsByClass classHours in subject.YearAcademicHoursForClasses )
            {
                int rowsForClass = classHours.YearAcademicHoursForSubgroups.Count;
                // выставляем значение для класса
                ExcelRange classCells = worksheet.Cells[ excelRange.Start.Row + subjectRowOffset + classRowOffset,
                    excelRange.Start.Column + 3,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + 3 ];
                classCells.Merge = true;
                classCells.Value = classHours.ClassName;

                // выставляем План часов в год -> по классам
                ExcelRange yearHoursByClassCells = worksheet.Cells[
                    excelRange.Start.Row + subjectRowOffset + classRowOffset, excelRange.Start.Column + 5,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + 5 ];
                yearHoursByClassCells.Merge = true;
                yearHoursByClassCells.Value = classHours.YearHoursByClass;

                // выставляем План часов в год -> план сумма
                ExcelRange yearHoursBySubjectGroupCells = worksheet.Cells[
                    excelRange.Start.Row + subjectRowOffset + classRowOffset, excelRange.Start.Column + 6,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + 6 ];
                yearHoursBySubjectGroupCells.Merge = true;
                yearHoursBySubjectGroupCells.Value = classHours.YearHoursBySubjectGroup;

                // выставляем План часов в год -> часов в неделю
                ExcelRange hoursPerWeekCells = worksheet.Cells[
                    excelRange.Start.Row + subjectRowOffset + classRowOffset, excelRange.Start.Column + 7,
                    excelRange.Start.Row + subjectRowOffset + classRowOffset + rowsForClass - 1,
                    excelRange.Start.Column + 7 ];
                hoursPerWeekCells.Merge = true;
                hoursPerWeekCells.Value = classHours.HoursPerWeek;

                int subgroupRowOffset = 0;
                foreach ( YearActualAcademicHoursForSubgroup subgroupHours in classHours.YearAcademicHoursForSubgroups )
                {
                    // выставляем План часов в год -> часов в неделю
                    int rowsForSubgroup = 1;
                    ExcelRange subgroupCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + 4,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + 4 ];
                    subgroupCells.Merge = true;
                    subgroupCells.Value = subgroupHours.SubgroupName;
                    int monthOffset = 0;
                    foreach ( KeyValuePair<DateOnly, int> hoursByDate in subgroupHours.AcademicHoursByDate )
                    {
                        ExcelRange monthCells = worksheet.Cells[
                            excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                            excelRange.Start.Column + 8 + monthOffset,
                            excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset +
                            rowsForSubgroup - 1,
                            excelRange.Start.Column + 8 + monthOffset ];
                        monthCells.Value = hoursByDate.Value;
                        monthOffset++;
                    }

                    ExcelRange completedWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + 18,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + 18 ];
                    completedWorkloadHoursCells.Merge = true;
                    completedWorkloadHoursCells.Value = subgroupHours.CompletedWorkloadHours;

                    ExcelRange remoteWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + 19,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + 19 ];
                    remoteWorkloadHoursCells.Merge = true;
                    remoteWorkloadHoursCells.Value = subgroupHours.RemoteAcademicHours;

                    ExcelRange combinedWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + 20,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + 20 ];
                    combinedWorkloadHoursCells.Merge = true;
                    combinedWorkloadHoursCells.Value = subgroupHours.CombinedAcademicHours;

                    ExcelRange remainderWorkloadHoursCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + 24,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + 24 ];
                    remainderWorkloadHoursCells.Merge = true;
                    remainderWorkloadHoursCells.Value = subgroupHours.RemainderHoursOfPlan;

                    ExcelRange planFailureCells = worksheet.Cells[
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset,
                        excelRange.Start.Column + 25,
                        excelRange.Start.Row + subjectRowOffset + classRowOffset + subgroupRowOffset + rowsForSubgroup -
                        1,
                        excelRange.Start.Column + 25 ];
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