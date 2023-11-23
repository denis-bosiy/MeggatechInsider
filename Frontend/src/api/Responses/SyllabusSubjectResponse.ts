export class SyllabusSubjectResponse {
  public id: number;
  public name: string;
  public financing: string;
  public type: string;
  public category: string;
  public surchargeForNotebooks: number;
  public numberOf10: number;
  public numberOfGroupsIn10: number;
  public numberOf11: number;
  public numberOfGroupsIn11: number;
  public isFinalExam: boolean;

  constructor(
    _id: number,
    _name: string,
    _financing: string,
    _type: string,
    _category: string,
    _surchargeForNotebooks: number,
    _numberOf10: number,
    _numberOfGroupsIn10: number,
    _numberOf11: number,
    _numberOfGroupsIn11: number,
    _isFinalExam: boolean
  ) {
    this.id = _id;
    this.name = _name;
    this.financing = _financing;
    this.type = _type;
    this.category = _category;
    this.surchargeForNotebooks = _surchargeForNotebooks;
    this.numberOf10 = _numberOf10;
    this.numberOfGroupsIn10 = _numberOfGroupsIn10;
    this.numberOf11 = _numberOf11;
    this.numberOfGroupsIn11 = _numberOfGroupsIn11;
    this.isFinalExam = _isFinalExam;
  }
}
