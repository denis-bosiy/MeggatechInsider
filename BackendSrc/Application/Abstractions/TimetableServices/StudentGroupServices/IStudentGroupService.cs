namespace Application.Abstractions.TimetableServices.StudentGroupServices
{
    public interface IStudentGroupService
    {
        List<string> GetClassGuidsByStudentGroupGuid( string studentGroupGuid );
    }
}
