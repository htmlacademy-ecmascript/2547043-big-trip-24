import PointView from '../view/point-view';
import ListView from '../view/list-view';
import PointEditingView from '../view/point-editing-view';
import PointCreatingView from '../view/point-creating-view';

import { render, RenderPosition } from '../render';

export default class ListPresenter {
  constructor(listContainer) {
    this.container = listContainer;
  }

  listComponent = new ListView;
  pointCreatingComponent = new PointView;
  pointEditingComponent = new PointView;

  init() {
    render(this.listComponent, this.container);

    render(this.pointCreatingComponent, this.listComponent.getElement());
    render(new PointCreatingView, this.pointCreatingComponent.getElement(), RenderPosition.AFTERBEGIN);

    render(this.pointEditingComponent, this.listComponent.getElement());
    render(new PointEditingView, this.pointEditingComponent.getElement(), RenderPosition.AFTERBEGIN);

    render(new PointView, this.listComponent.getElement());
  }
}
