using Api.Mappers.StudyuingActivity;
using Api.Models.StudyingActivityTimeModels.LessonTime;
using Api.Models.StudyingActivityTimeModels.PairTime;
using Api.Models.StudyingActivityTimeModels.ParadeTime;
using Application.Abstractions.StudyingActivityServices;
using Domain.TimetableEntities.GuidebookEntities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/studying-activity" )]
    public class StudyingActivityController : ControllerBase
    {
        private const int LiceumFoundationYear = 2022; // надо узнать точную дату, пока стоит заглушка

        private readonly IPairTimeService _pairTimeService;
        private readonly ILessonTimeService _lessonTimeService;
        private readonly IParadeTimeService _paradeTimeService;

        public StudyingActivityController(
            IPairTimeService pairTimeService,
            ILessonTimeService lessonTimeService,
            IParadeTimeService paradeTimeService )
        {
            _pairTimeService = pairTimeService;
            _lessonTimeService = lessonTimeService;
            _paradeTimeService = paradeTimeService;
        }

        [HttpGet( "pair" )]
        [ProducesResponseType<PairTimesDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetPairTime( [FromQuery] int year )
        {
            List<PairTime> pairTimes = _pairTimeService.GetPairTimesByYear( year );

            if ( !pairTimes.Any() )
            {
                return NotFound();
            }

            List<PairTimeDto> pairTimeDtos = pairTimes.MapToDtos();

            PairTimesDto pairTimesDto = new PairTimesDto
            {
                PairTimes = pairTimeDtos
            };

            return Ok( pairTimesDto );
        }

        [HttpPost( "pair" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        public IActionResult AddPairTime( [FromBody] CreatePairTimeDto dto )
        {
            if ( dto.Year < LiceumFoundationYear || dto.Year > DateTime.Now.Year + 1 )
            {
                return BadRequest( "Не найдено такого года" );
            }

            _pairTimeService.AddPair( dto.Year, dto.StartTime, dto.EndTime );
            return Ok();
        }

        [HttpDelete( "pair" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        [ProducesResponseType( StatusCodes.Status409Conflict )]
        public IActionResult DeletePairTime( [FromQuery] int id )
        {
            if ( !_pairTimeService.PairTimeExists( id ) )
            {
                return StatusCode( 409, "Нет заведённого времени для пары" );
            }
            _pairTimeService.DeletePairTime( id );
            return Ok();
        }

        [HttpGet( "lesson" )]
        [ProducesResponseType<LessonTimesDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetLessonTime( [FromQuery] int year )
        {
            List<LessonTime> lessonTimes = _lessonTimeService.GetLessonTimesByYear( year );

            if ( !lessonTimes.Any() )
            {
                return NotFound();
            }

            List<LessonTimeDto> lessonTimeDtos = lessonTimes.MapToDtos();

            LessonTimesDto lessonTimesDto = new LessonTimesDto
            {
                LessonTimes = lessonTimeDtos
            };

            return Ok( lessonTimesDto );
        }

        [HttpPost( "lesson" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        public IActionResult AddLessonTime( [FromBody] CreateLessonTimeDto dto )
        {
            if ( dto.Year < LiceumFoundationYear || dto.Year > DateTime.Now.Year + 1 )
            {
                return BadRequest( "Не найдено такого года" );
            }

            _lessonTimeService.AddLesson( dto.Year, dto.StartTime, dto.EndTime );
            return Ok();
        }

        [HttpDelete( "lesson" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        [ProducesResponseType( StatusCodes.Status409Conflict )]
        public IActionResult DeleteLessonTime( [FromQuery] int id )
        {
            if ( !_lessonTimeService.LessonTimeExists( id ) )
            {
                return StatusCode( 409, "Нет заведённого времени для урока" );
            }
            _lessonTimeService.DeleteLessonTime( id );
            return Ok();
        }

        [HttpGet( "parade" )]
        [ProducesResponseType<ParadeTimeDto>( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        [ProducesResponseType( StatusCodes.Status404NotFound )]
        public IActionResult GetParadeTime( [FromQuery] int year )
        {
            ParadeTime paradeTime = _paradeTimeService.GetParadeTimeByYear( year );
            if ( paradeTime == null )
            {
                return NotFound();
            }

            return Ok( paradeTime.MapToDto() );
        }

        [HttpPost( "parade" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        public IActionResult CreateParadeTime( [FromBody] SetParadeTimeDto dto )
        {
            if ( dto.Year < LiceumFoundationYear || dto.Year > DateTime.Now.Year + 1 )
            {
                return BadRequest( "Не найдено такого года" );
            }

            _paradeTimeService.CreateParadeTime( dto.Year, dto.WeekDay, dto.StartTime, dto.EndTime );
            return Ok();
        }

        [HttpPut( "parade" )]
        [ProducesResponseType( StatusCodes.Status200OK )]
        [ProducesResponseType( StatusCodes.Status400BadRequest )]
        public IActionResult UpdateParadeTime( [FromBody] SetParadeTimeDto dto )
        {
            if ( dto.Year < LiceumFoundationYear || dto.Year > DateTime.Now.Year + 1 )
            {
                return BadRequest( "Не найдено такого года" );
            }

            ParadeTime paradeTimeForRequestedYear = _paradeTimeService.GetParadeTimeByYear( dto.Year );
            if ( paradeTimeForRequestedYear == null )
            {
                return BadRequest( "Не найдено такого года" );
            }

            _paradeTimeService.UpdateParadeTime(
                paradeTimeForRequestedYear.Id, dto.Year, dto.WeekDay, dto.StartTime, dto.EndTime );
            return Ok();
        }

        [Obsolete( "Выпилится в MVP2" )]
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
