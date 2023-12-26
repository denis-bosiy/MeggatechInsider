namespace Api.Helpers
{
    public static class WeekHelpers
    {
        public static int GetStudyingWeekFromDate( DateOnly currentDate, int year )
        {
            DateTime studyYearStartDate = new DateTime( year: year, month: 9, day: 1 );
            TimeSpan timeSpan = currentDate.ToDateTime( new TimeOnly() ) - studyYearStartDate;
            return ( (int) timeSpan.TotalDays / 7 ) + 1;
        }

        public static DateOnly GetDateFromStudyingWeek( int studyingWeek, int year )
        {
            DateTime studyYearStartDate = new DateTime( year: year, month: 9, day: 1 );
            int daysPassed = studyingWeek * 7;
            DateTime currentDate = studyYearStartDate.AddDays( daysPassed );

            throw new NotImplementedException();
        }
    }
}
