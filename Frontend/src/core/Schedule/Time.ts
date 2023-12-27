export class Time {
  public hours: number;
  public minutes: number;

  constructor(_hours: number, _minutes: number) {
    this.hours = _hours;
    this.minutes = _minutes;
  }

  public equalsTo(time: Time): boolean {
    return this.hours === time.hours && this.minutes === time.minutes;
  }

  public toString(): string {
    return (
      (this.hours < 10 ? "0" + this.hours : this.hours) + "." + (this.minutes < 10 ? "0" + this.minutes : this.minutes)
    );
  }
}
