import WaypointView from '../view/waypoint-view';
import ListView from '../view/list-view';
import EditingFormView from '../view/editing-form-view';
import CreatingFormView from '../view/creating-form-view';

import { render, RenderPosition } from '../render';

export default class ListPresenter {
  constructor(listContainer) {
    this.container = listContainer;
  }

  listComponent = new ListView;
  waypointCreatingComponent = new WaypointView;
  waypointEditingComponent = new WaypointView;

  init() {
    render(this.listComponent, this.container);
    render(this.waypointCreatingComponent, this.listComponent.getElement());
    render(new CreatingFormView, this.waypointCreatingComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(this.waypointEditingComponent, this.listComponent.getElement());
    render(new EditingFormView, this.waypointEditingComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(new WaypointView, this.listComponent.getElement());
  }
}
