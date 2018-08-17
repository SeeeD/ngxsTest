import { Component, OnInit } from '@angular/core';
import {AddTutorial} from '../actions/tutorial.actions';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  addTutorial(name, url) {
    // this.store.dispatch(new AddTutorial({name: name, url: url}))
  }

  ngOnInit() {
  }

}
