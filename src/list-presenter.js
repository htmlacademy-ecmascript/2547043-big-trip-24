import WaypointView from './view/waypoint-view';
import ListView from './view/list-view';
import EditingFormView from './view/editing-form-view';

import { render, RenderPosition } from './render';

export default class ListPresenter {
  constructor(listContainer) {
    this.container = listContainer;
  }

  listComponent = new ListView;
  waypointComponent = new WaypointView;

  init() {
    render(this.listComponent, this.container);
    render(this.waypointComponent, this.listComponent.getElement());
    render(new EditingFormView, this.waypointComponent.getElement(), RenderPosition.AFTERBEGIN);
    for (let i = 0; i < 2; i++) {
      render(new WaypointView, this.listComponent.getElement());
    }
  }
}
