using Api.Models.StudyingActivityTimeModels.LessonTimeModels;
using Api.Models.StudyingActivityTimeModels.PairTimeModels;
using Api.Models.StudyingActivityTimeModels.ParadeTimeModels;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/studying-activity" )]
    public class StudyingActivityController : ControllerBase
    {
        [HttpGet( "pair" )]
        public List<PairTimeDto> GetPairTime( [FromQuery] int year )
        {
            // mock
            var mock = new PairTimeDto
            {
                Id = 1,
                StartTime = new TimeOnly( hour: 8, minute: 0 ),
                EndTime = new TimeOnly( hour: 9, minute: 45 )
            };
            return new List<PairTimeDto> { mock };
        }

        [HttpPost( "pair" )]
        public IActionResult AddPairTime( CreatePairTimeDto dto )
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
        public LessonTimeDto GetLessonTime( [FromQuery] int year ) 
        {
            // mock
            return new LessonTimeDto
            {
                Id = 1,
                StartTime = new TimeOnly( hour: 8, minute: 0 ),
                EndTime = new TimeOnly( hour: 8, minute: 40 )
            };
        }

        [HttpPost( "lesson" )]
        public IActionResult AddLessonTime( CreateLessonTimeDto dto )
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
            var mock = new ParadeTimeDto
            {
                WeekDay = DayOfWeek.Monday,
                StartTime = new TimeOnly( hour: 8, minute: 0 ),
                EndTime = new TimeOnly( hour: 8, minute: 20 )
            };
            return new List<ParadeTimeDto> { mock };
        }

        [HttpPost( "parade" )]
        public IActionResult SetParadeTime( SetParadeTimeDto dto )
        {
            // mock
            return Ok();
        }

        [HttpPut( "parade" )]
        public IActionResult UpdateParadeTime( SetParadeTimeDto dto )
        {
            // mock
            return Ok();
        }

        [HttpGet( "days-of-week" )]
        public List<WeekDayDto> GetAllParadeTimes()
        {
            var days = new List<WeekDayDto>
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
