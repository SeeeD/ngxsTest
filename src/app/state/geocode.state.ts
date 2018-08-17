import { State, Action, StateContext, Selector } from '@ngxs/store';
import {RequestGeoInformationAction} from '../actions/geo.actions';
import {HttpClient} from '@angular/common/http';

export class GeocodeStateModel {
  longName: string;
  longitude: string;
  latitude: string;
}

@State<GeocodeStateModel>({
  name: 'geocode',
  defaults: {
      longName: '',
      longitude: '',
      latitude: ''
  }
})

export class GeocodeState {
  constructor(private http: HttpClient) {}

  @Selector()
  static getGeocode(state: GeocodeStateModel) {
    return state;
  }

  @Action(RequestGeoInformationAction)
  requestGeoInformation({getState, patchState}: StateContext<GeocodeStateModel>, { searchTerm }: RequestGeoInformationAction) {
    patchState({
      longName: 'pending',
      latitude: '-',
      longitude: '-'
    });
    const apiKey = 'AIzaSyBjBpiuCOZA7nt1UFeEJuw3dxFFwKxXCVc';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${apiKey}`;

    this.http.get(url).subscribe((data: any) => {
      patchState({
        longName: data.results[0].address_components[0].long_name,
        latitude: data.results[0].geometry.location.lat,
        longitude: data.results[0].geometry.location.lng
      });
    });
  }
}
