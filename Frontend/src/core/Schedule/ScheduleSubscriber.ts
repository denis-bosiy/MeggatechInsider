import { ISubscriber } from "../ISubscriber";
import { ScheduleEvent } from "./ScheduleEvent";

export class ScheduleSubscriber implements ISubscriber {
  private _callback: (data: any) => void;
  private _scheduleEvent: ScheduleEvent;

  constructor(callback: (data: any) => void, event: ScheduleEvent) {
    this._callback = callback;
    this._scheduleEvent = event;
  }

  public notify(event: string, data: any): void {
    if (event === this._scheduleEvent) {
      this._callback(data);
    }
  }
}
