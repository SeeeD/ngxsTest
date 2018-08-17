export class RequestGeoInformationAction {
  static readonly type = '[GEO] RequestInformation';
  constructor(public searchTerm: string) {}
}
