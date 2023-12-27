using System.Data;
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

    private void BuildBody( ExcelWorksheet worksheet, YearActualAcademicHoursModel model, ExcelNamedRangeCollection excelNamedRangeCollection )
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
        int subgroupsNumber = teacherItem.YearAcademicHoursForClasses
            .SelectMany( classes => classes.YearAcademicHoursForSubgroups ).Count();
        worksheet.InsertRow(currentCells.Start.Row, subgroupsNumber);

        using DataTable dataTable = GetTeacherItemDataTable( ref rowNumber, teacherItem );
        currentCells.LoadFromDataTable( dataTable, false );
        currentCells = MoveNextCurrentCell( worksheet, currentCells );
    }

    private DataTable GetTeacherItemDataTable( ref int rowNumber,
        YearActualAcademicHoursForSubjectsByTeacher teacherModel )
    {
        foreach ( YearActualAcademicHoursForClassesBySubject classItem in teacherModel.YearAcademicHoursForClasses )
        {
        }

        DataTable dt = new();
        dt.Columns.Add( "TeacherName" );
        dt.Columns.Add( "TeacherContractType" );
        dt.Columns.Add( "SubjectName" );
        dt.Columns.Add( "ClassName" );
        dt.Columns.Add( "SubgroupName" );
        dt.Columns.Add( "YearHoursByClass" );
        dt.Columns.Add( "YearHoursBySubjectGroup" );
        dt.Columns.Add( "HoursPerWeek" );
        dt.Columns.Add( "September" );
        dt.Columns.Add( "October" );
        dt.Columns.Add( "November" );
        dt.Columns.Add( "December" );
        dt.Columns.Add( "January" );
        dt.Columns.Add( "February" );
        dt.Columns.Add( "March" );
        dt.Columns.Add( "April" );
        dt.Columns.Add( "May" );
        dt.Columns.Add( "June" );
        dt.Columns.Add( "CompletedWorkloadHours" );
        dt.Columns.Add( "RemoteAcademicHours" );
        dt.Columns.Add( "CombinedAcademicHours" );
        dt.Columns.Add( "SumHours" );
        dt.Columns.Add( "RemoteSumHours" );
        dt.Columns.Add( "CombinedSumHours" );
        dt.Columns.Add( "RemainderHoursOfPlan" );
        dt.Columns.Add( "PlanFailurePercent" );

        DataRow row = dt.NewRow();
        row[ "TeacherName" ] = teacherModel.TeacherName;
        row[ "TeacherContractType" ] = teacherModel.TeacherContractType;
        row[ "SumHours" ] = teacherModel.SumHours;
        row[ "RemoteSumHours" ] = teacherModel.RemoteSumHours;
        row[ "CombinedSumHours" ] = teacherModel.CombinedSumHours;

        return dt;
    }

    private DataTable GetSubjectItemDataTable()
    {
        return new DataTable();
    }

    private static ExcelRange MoveNextCurrentCell( ExcelWorksheet worksheet, ExcelRange currentCell )
    {
        currentCell = worksheet.Cells[
            currentCell.Start.Row + 1,
            currentCell.Start.Column,
            currentCell.End.Row + 1,
            currentCell.End.Column ];
        return currentCell;
    }
}