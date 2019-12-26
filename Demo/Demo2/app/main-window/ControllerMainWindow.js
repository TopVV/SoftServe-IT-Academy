import { ModelMainWindow } from './ModelMainWindow.js';
import { ViewMainWindow } from './ViewMainWindow.js';

export class ControllerMainWindow {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelMainWindow();
    this.view = new ViewMainWindow();
    this.subscribe = subscribe;
    this.notify = notify;
    this.subscribe('animals-data-updated', this.getFirstAnimalsPage.bind(this));
    this.subscribe('new-search-result', this.getSearchedPage.bind(this));
    this.subscribe('species-select-result', this.getSearchedPage.bind(this));
  }
  getFirstAnimalsPage(animalBase) {
    this.model.setNewAnimalBase(animalBase);
    this.getCustomAnimalsPage();
    this.view.addMainlWindowListner(this.handleMainWindowClick.bind(this));
  }

  getCustomAnimalsPage(pageN) {
    this.view.renderAnimalsList(this.model.getCustomData(pageN));
    this.view.renderNavBar(this.model.getNavArr(), this.model.getNavStat());
  }
  getSearchedPage(resultsArr) {
    this.model.setNewAnimalBase(resultsArr);
    this.getCustomAnimalsPage();
  }
  handleMainWindowClick(e) {
    if (e.target.closest('.add-to-cart-btn')) {
      this.notify(
        'add-to-cart',
        this.model.getAnimalById(
          Number(e.target.closest('.card').dataset.card_id)
        )
      );
    } else if (e.target.closest('.card')) {
      this.notify(
        'show-details',
        this.model.getAnimalById(
          Number(e.target.closest('.card').dataset.card_id)
        )
      );
    } else if (e.target.closest('.species-btn')) {
      this.notify(
        'species-select-new',
        e.target.closest('.species-btn').dataset.quick_species
      );
    } else if (
      e.target.dataset.page_n !== undefined &&
      e.target.classList.contains('page-link')
    ) {
      this.getCustomAnimalsPage(Number(e.target.dataset.page_n));
    }
  }
}
