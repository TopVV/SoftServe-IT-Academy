import { ModelMainWindow } from './ModelMainWindow.js';
import { ViewMainWindow } from './ViewMainWindow.js';

export class ControllerMainWindow {
  constructor({ subscribe, unsubscribe, notify }) {
    this.model = new ModelMainWindow();
    this.view = new ViewMainWindow();
    this.subscribe = subscribe;
    this.notify = notify;
    this.subscribe('animals-data-updated', this.getFirstAnimalsPage.bind(this));
    // this.subscribe('new-search-result', this.getSearchedPage.bind(this));
    this.subscribe('new-search-request', this.getSearchedPage.bind(this));
    this.subscribe(
      'species-select-result',
      this.getNewSpeciesSelected.bind(this)
    );
    this.subscribe(
      'animals-in-cart-update',
      this.updateAnimalsInCart.bind(this)
    );
  }
  getFirstAnimalsPage(animalBase) {
    this.model.setNewAnimalBase(animalBase);
    this.getCustomAnimalsPage();
    this.view.addMainWindowListener(this.handleMainWindowClick.bind(this));
    this.view.renderArrowUp();
    this.view.addScrollListener(this.handleScroll.bind(this));
  }
  getCustomAnimalsPage(pageN) {
    this.getSpeciesRendered();
    this.view.renderAnimalsList(this.model.getCustomData(pageN));
    this.view.renderNavBar(this.model.getNavArr(), this.model.getNavStat());
    // this.view.scrollToYPosition(this.model.getScrollYPosition());
    this.view.scrollToYPosition(this.model.getScrollYPosition());
  }
  getNewSpeciesSelected(resultsArr) {
    this.model.setNewAnimalBase(resultsArr);
    this.setSearchedDataBase();
    this.getCustomAnimalsPage();
  }
  getSearchedPage(searchRequest) {
    this.setSearchedDataBase(searchRequest);
    this.getCustomAnimalsPage();
  }
  setSearchedDataBase(searchRequest) {
    this.model.setSearchedData(searchRequest);
  }
  updateScrollYPosition() {
    this.model.setScrollYPosition(this.view.getScrollYPosition());
  }
  getSpeciesRendered() {
    this.view.renderQuickSpecies();
    this.view.renderActiveSpecies(this.model.getActiveSpecies());
  }
  updateAnimalsInCart(animalsArr) {
    this.model.setAnimalsInCart(animalsArr);
    this.getCustomAnimalsPage();
  }
  updateActiveSpecies(species) {
    this.model.setActiveSpecies(species);
  }
  handleMainWindowClick(e) {
    // change to switch?
    if (e.target.closest('.add-to-cart-btn')) {
      this.notify(
        'add-to-cart',
        this.model.getAnimalById(
          Number(e.target.closest('.card').dataset.card_id)
        )
      );
      this.getCustomAnimalsPage();
    } else if (e.target.closest('.remove-from-cart-btn')) {
      // debugger;
      this.notify(
        'remove-from-cart',
        Number(e.target.closest('.card').dataset.card_id)
      );
    } else if (e.target.closest('.card')) {
      this.notify(
        'show-details',
        this.model.getAnimalById(
          Number(e.target.closest('.card').dataset.card_id)
        )
      );
    } else if (e.target.closest('.species-btn')) {
      this.model.setActiveSpecies(
        e.target.closest('.species-btn').dataset.quick_species
      );
      this.notify(
        'species-select-new',
        e.target.closest('.species-btn').dataset.quick_species
      );
    } else if (
      e.target.dataset.page_n !== undefined &&
      e.target.classList.contains('page-link')
    ) {
      this.getCustomAnimalsPage(Number(e.target.dataset.page_n));
    } else if (e.target.closest('.arrow-up')) {
      this.view.scrollToTop();
    }
  }
  handleScroll() {
    const lastKnownScrollPosition = this.view.getScrollYPosition();
    this.model.setScrollYPosition(lastKnownScrollPosition);
    if (lastKnownScrollPosition > 700) {
      this.view.getToUpBtnDisplayed();
    } else {
      this.view.getToUpBtnHidden();
    }
  }
}
