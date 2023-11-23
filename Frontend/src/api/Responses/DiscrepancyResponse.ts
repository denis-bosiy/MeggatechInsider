export class DiscrepancyResponse {
  public name: string;
  public groupCount: number;
  public groupCountByPlan: number;

  constructor(_name: string, _groupCount: number, _groupCountByPlan: number) {
    this.name = _name;
    this.groupCount = _groupCount;
    this.groupCountByPlan = _groupCountByPlan;
  }
}
