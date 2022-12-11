import FiltersView from './view/filters-view';
import {render} from './render';
import ListPresenter from './presenter/list-presenter';

const siteHeaderElement = document.querySelector('.page-header');
const filtersContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const tripEventsContainerElement = document.querySelector('.trip-events');
const listPresenter = new ListPresenter({boardContainer: tripEventsContainerElement});

render(new FiltersView(), filtersContainerElement);
listPresenter.init();
