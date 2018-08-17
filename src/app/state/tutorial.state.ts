import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from '../models/model';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.actions';
import {Guid} from '../utils/guid';

export class TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})

export class TutorialState {

  // Section 4
  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }

  // Section 5
  @Action(AddTutorial)
  add({getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    payload.id = Guid.newGuid().toString();
    const state = getState();

    patchState({
      tutorials: [...state.tutorials, payload]
    });
  }

  @Action(RemoveTutorial)
  remove({getState, patchState }: StateContext<TutorialStateModel>, { tutorialId }: RemoveTutorial) {
    patchState({
      tutorials: getState().tutorials.filter(a => a.id !== tutorialId)
    });
  }
}
