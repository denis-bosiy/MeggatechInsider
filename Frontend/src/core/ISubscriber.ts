export interface ISubscriber {
  notify(event: string, data: any): void;
}
