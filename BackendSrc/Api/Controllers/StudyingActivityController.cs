using Api.Mappers.StudyuingActivity;
using Api.Models.StudyingActivityTimeModels.LessonTime;
using Api.Models.StudyingActivityTimeModels.PairTime;
using Api.Models.StudyingActivityTimeModels.ParadeTime;
using Application.Abstractions.StudyingActivityServices;
using Domain.TimetableEntities.GuidebookEntities;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Description;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/studying-activity" )]
    public class StudyingActivityController : ControllerBase
    {
        private readonly IPairTimeService _pairTimeService;

        public StudyingActivityController( IPairTimeService pairTimeService ) 
        { 
            _pairTimeService = pairTimeService;
        }

        [HttpGet( "pair" )]
        [ResponseType( typeof( PairTimeDto ) )]
        public IActionResult GetPairTime( [FromQuery] int year )
        {
            List<PairTime> pairTimes = _pairTimeService.GetPairTimes( year );

            if ( !pairTimes.Any() )
            {
                return NotFound();
            }

            List<PairTimeDto> pairTimeDtos = pairTimes.MapToDtos();

            return Ok( pairTimeDtos );
        }

        [HttpPost( "pair" )]
        public IActionResult AddPairTime( [FromBody] CreatePairTimeDto dto )
        {
            // mock
            return Ok();
        }

        [HttpDelete( "pair" )]
        public IActionResult DeletePairTime( [FromQuery] int id ) 
        {
            // mock
            return Ok();
        }

        [HttpGet( "lesson" )]
        public List<LessonTimeDto> GetLessonTime( [FromQuery] int year ) 
        {
            // mock
            LessonTimeDto mock = new LessonTimeDto
            {
                Id = 1,
                StartTime = new TimeOnly( hour: 8, minute: 0 ),
                EndTime = new TimeOnly( hour: 8, minute: 40 )
            };
            return new List<LessonTimeDto> { mock };
        }

        [HttpPost( "lesson" )]
        public IActionResult AddLessonTime( [FromBody] CreateLessonTimeDto dto )
        {
            // mock
            return Ok();
        }

        [HttpDelete( "lesson" )]
        public IActionResult DeleteLessonTime( [FromQuery] int id ) 
        {
            // mock
            return Ok();
        }

        [HttpGet( "parade" )]
        public List<ParadeTimeDto> GetParadeTime( [FromQuery] int year )
        {
            // mock
            ParadeTimeDto mock = new ParadeTimeDto
            {
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( hour: 8, minute: 0 ),
                EndTime = new TimeOnly( hour: 8, minute: 20 )
            };
            return new List<ParadeTimeDto> { mock };
        }

        [HttpPost( "parade" )]
        public IActionResult SetParadeTime( [FromBody] SetParadeTimeDto dto )
        {
            // mock
            return Ok();
        }

        [HttpPut( "parade" )]
        public IActionResult UpdateParadeTime( [FromBody] SetParadeTimeDto dto )
        {
            // mock
            return Ok();
        }

        [HttpGet( "days-of-week" )]
        public List<WeekDayDto> GetDaysOfWeek()
        {
            List<WeekDayDto> days = new List<WeekDayDto>
            {
                new WeekDayDto { WeekDay = DayOfWeek.Sunday, Text = "Воскресенье" },
                new WeekDayDto { WeekDay = DayOfWeek.Monday, Text = "Понедельник" },
                new WeekDayDto { WeekDay = DayOfWeek.Tuesday, Text = "Вторник" },
                new WeekDayDto { WeekDay = DayOfWeek.Wednesday, Text = "Среда" },
                new WeekDayDto { WeekDay = DayOfWeek.Thursday, Text = "Четверг" },
                new WeekDayDto { WeekDay = DayOfWeek.Friday, Text = "Пятница" },
                new WeekDayDto { WeekDay = DayOfWeek.Saturday, Text = "Суббота" }
            };
            return days;
        }
    }
}
