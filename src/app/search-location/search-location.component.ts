import { Component } from '@angular/core';
import {Store} from '@ngxs/store';
import {RequestGeoInformationAction} from '../actions/geo.actions';
import {Observable} from '../../../node_modules/rxjs/Observable';
import {GeocodeStateModel} from '../state/geocode.state';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent {
  geoInformation$: Observable<GeocodeStateModel>;

  constructor(private store: Store) {
    this.geoInformation$ = this.store.select(state => state.geocode);
  }

  searchForLocation(term: string) {
    this.store.dispatch(new RequestGeoInformationAction(term));
  }
}
