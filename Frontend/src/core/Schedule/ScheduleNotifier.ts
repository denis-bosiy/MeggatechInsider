import { ISubscriber } from "../ISubscriber";
import { ScheduleEvent } from "./ScheduleEvent";

export class ScheduleSubscriber {
  private _subscribers: ISubscriber[] = [];
  private static _instance: ScheduleSubscriber;

  private constructor() {}

  public static getInstance(): ScheduleSubscriber {
    if (!ScheduleSubscriber._instance) {
      ScheduleSubscriber._instance = new ScheduleSubscriber();
    }

    return ScheduleSubscriber._instance;
  }

  public subscribe(subscriber: ISubscriber): void {
    ScheduleSubscriber._instance._subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: ISubscriber): void {
    const foundIndex: number = ScheduleSubscriber._instance._subscribers.findIndex(
      (sub: ISubscriber) => sub === subscriber
    );

    if (foundIndex !== -1) {
      ScheduleSubscriber._instance._subscribers.splice(foundIndex, 1);
    }
  }

  public notify(event: ScheduleEvent, data: any): void {
    ScheduleSubscriber._instance._subscribers.forEach((subscriber: ISubscriber) => subscriber.notify(event, data));
  }
}
