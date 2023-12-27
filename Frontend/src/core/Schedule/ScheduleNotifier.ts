import { ISubscriber } from "../ISubscriber";
import { ScheduleEvent } from "./ScheduleEvent";

export class ScheduleNotifier {
  private _subscribers: ISubscriber[] = [];
  private static _instance: ScheduleNotifier;

  private constructor() {
    //
  }

  public static getInstance(): ScheduleNotifier {
    if (!ScheduleNotifier._instance) {
      ScheduleNotifier._instance = new ScheduleNotifier();
    }

    return ScheduleNotifier._instance;
  }

  public subscribe(subscriber: ISubscriber): void {
    ScheduleNotifier._instance._subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: ISubscriber): void {
    const foundIndex: number = ScheduleNotifier._instance._subscribers.findIndex(
      (sub: ISubscriber) => sub === subscriber
    );

    if (foundIndex !== -1) {
      ScheduleNotifier._instance._subscribers.splice(foundIndex, 1);
    }
  }

  public notify(event: ScheduleEvent, data: any): void {
    ScheduleNotifier._instance._subscribers.forEach((subscriber: ISubscriber) => subscriber.notify(event, data));
  }
}
