using Api.Models.EducationPlanByMonth.Comment;
using Api.Models.EducationPlanByMonth.CompleteControl;
using Api.Models.EducationPlanByMonth.Timesheet;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route( "api/education-plan-by-month" )]
    public class EducationPlanByMonthController : Controller
    {
        [HttpGet( "timesheet" )]
        public IActionResult GetTimesheet(TimesheetRequestDto timesheetRequestDto)
        {
            //mock

            if ( false )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого месяца" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого типа договора" );
            }

            return Ok(new TimesheetResponseDto()
            {
                StartingDayNumber = 1,
                DayCount = 2,
                Hours = new List<TimesheetHours> 
                {
                    new TimesheetHours 
                    {
                        Teacher = "Учитель 1",
                        Subjects = new List<TimesheetHoursSubject>
                        {
                            new TimesheetHoursSubject
                            {
                                Title = "матан",
                                Classes = new List<TimesheetHoursSubjectClass>
                                {
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-1",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    },
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-2",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    }
                                }
                            },
                            new TimesheetHoursSubject
                            {
                                Title = "физика",
                                Classes = new List<TimesheetHoursSubjectClass>
                                {
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-1",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    },
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-2",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    }
                                }
                            }

                        }

                    },
                    new TimesheetHours 
                    {
                        Teacher = "Учитель 2",
                        Subjects =  new List<TimesheetHoursSubject>
                        {
                            new TimesheetHoursSubject
                            {
                                Title = "матан",
                                Classes = new List<TimesheetHoursSubjectClass>
                                {
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-1",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    },
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-2",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    }
                                }
                            },
                            new TimesheetHoursSubject
                            {
                                 Title = "матан",
                                Classes = new List<TimesheetHoursSubjectClass>
                                {
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-1",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-1-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    },
                                    new TimesheetHoursSubjectClass
                                    {
                                        Number = "10-2",
                                        Groups = new List<TimesheetHoursSubjectClassGroup>
                                        {
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-1",
                                                Hours = { 1, 2, 3 },
                                                Combined = 1,
                                                Remoted = 1,
                                                Amount = 2
                                            },
                                            new TimesheetHoursSubjectClassGroup
                                            {
                                                Number = "10-2-2",
                                                Hours = { 1, 2, 3 },
                                                Combined = 2,
                                                Remoted = 2,
                                                Amount = 4
                                            }
                                        }
                                    }
                                }
                            }

                        }

                    }
                }
            });

        }

        [HttpGet( "comment" )]
        public IActionResult GetComment(CommentRequestDto commentRequestDto)
        {
            // mock

            if ( false )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого месяца" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого учителя" );
            }

            return Ok( new CommentResponseDto()
            {
                Id = "1",
                Message = "OK"
            }); 
        }

        [HttpPost( "comment" )]
        public IActionResult PostComment(PostCommentDto postCommentDto)
        {
            // mock

            if ( false )
            {
                return NotFound( "Не найдено такого учителя" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого месяца" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого года" );
            }

            return Ok();
        }

        [HttpDelete( "comment" )]
        public IActionResult DeleteComment(DeleteCommentRequestDto deleteCommentRequestDto)
        {
            // mock
            if ( false )
            {
                return NotFound( "Не найдено такого комментария" );
            }

            return Ok();
        }

        [HttpGet( "timesheet-exel" )]
        public IActionResult GetTimesheetExel(TimesheetRequestDto timesheetRequestDto)
        {

            //mock

            if ( false )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого месяца" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого типа договора" );
            }

            return Ok(); // exel \_0-0_/
        }

        [HttpGet( "complete-control" )]
        public IActionResult GetCompleteControl(TimesheetRequestDto timesheetRequestDto)
        {
            //mock

            if ( false )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого месяца" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого типа договора" );
            }

            List<CompleteControlContractDto> contracts = new()
            {
                new CompleteControlContractDto
                {
                    Type = "Тип договора 1",
                    Subject = "Subject 1",
                    Classes = new() { 1,2 },
                    RemoreHours = 1,
                    CombinedHours = 1,
                    TotalHours = 1
                },
                new CompleteControlContractDto
                {
                    Type = "Тип договора 2",
                    Subject = "Subject 2",
                    Classes = new() { 3,4 },
                    RemoreHours = 2,
                    CombinedHours = 2,
                    TotalHours = 2
                }
            };

            return Ok(new CompleteControlResponseDto()
            {
                Teacher = "Учитель 1",
                Total = 1,
                TotalRemoted = 1,
                TotalCombined = 1,
                Contracts = contracts
            });
        }

        [HttpGet( "complete-control-exel" )]
        public IActionResult GetCompleteControlExel(TimesheetRequestDto timesheetRequestDto)
        {
            //mock

            if ( false )
            {
                return NotFound( "Не найдено такого года" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого месяца" );
            }

            if ( false )
            {
                return NotFound( "Не найдено такого типа договора" );
            }

            return Ok(); // exel
        }
    }
}
