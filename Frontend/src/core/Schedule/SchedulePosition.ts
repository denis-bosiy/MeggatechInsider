import { EnglishAlphabet } from "./EnglishAlphabet";

export class SchedulePosition {
  public horizontalGeneralPosition: EnglishAlphabet;
  public horizontalSpecificPosition: number;
  public verticalGeneralPosition: EnglishAlphabet;
  public verticalSpecificPosition: number;

  constructor(
    _horizontalGeneralPosition: EnglishAlphabet,
    _horizontalSpecificPosition: number,
    _verticalGeneralPosition: EnglishAlphabet,
    _verticalSpecificPosition: number
  ) {
    this.horizontalGeneralPosition = _horizontalGeneralPosition;
    this.horizontalSpecificPosition = _horizontalSpecificPosition;
    this.verticalGeneralPosition = _verticalGeneralPosition;
    this.verticalSpecificPosition = _verticalSpecificPosition;
  }
}
