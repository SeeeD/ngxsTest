import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Tutorial } from './../models/model';
import { Observable } from 'rxjs/Observable';
import { RemoveTutorial } from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial>

  constructor(private store: Store) {
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  deleteTutorial(tutorialId: string) {
    this.store.dispatch(new RemoveTutorial(tutorialId));
  }

  ngOnInit() {}

}
