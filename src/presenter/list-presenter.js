import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import {render} from '../render.js';
import {RenderPosition} from '../render.js';

export default class ListPresenter {
  tripListComponent = new TripEventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer.firstElementChild, RenderPosition.AFTEREND);


    render(this.tripListComponent, this.boardContainer);
    render(new EditPointView(), this.tripListComponent.getElement());
    render(new AddNewPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripListComponent.getElement());
    }
  }
}
