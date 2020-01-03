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
    this.subscribe('back-to-main-page', this.getCustomAnimalsPage.bind(this));
  }
  getFirstAnimalsPage(animalBase) {
    this.model.setNewAnimalBase(animalBase);
    this.view.addScrollListener(this.handleScroll.bind(this));
    this.getCustomAnimalsPage();
    this.view.renderArrowUp();
    this.view.addMainWindowListener(this.handleMainWindowClick.bind(this));
  }
  getCustomAnimalsPage(pageN) {
    this.getSpeciesRendered();
    this.view.renderAnimalsList(this.model.getCustomData(pageN));
    this.view.renderNavBar(this.model.getNavArr(), this.model.getNavStat());
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
  /* updateScrollYPosition() {
    this.model.setScrollYPosition(this.view.getScrollYPosition());
  } */
  getSpeciesRendered() {
    this.view.renderQuickSpecies();
    this.view.renderActiveSpecies(this.model.getActiveSpecies());
  }
  updateAnimalsInCart(animalsArr) {
    this.model.setAnimalsInCart(animalsArr);
    // this.getCustomAnimalsPage();
  }
  updateActiveSpecies(species) {
    this.model.setActiveSpecies(species);
  }
  handleMainWindowClick(e) {
    const savedThis = this;
    const toCartHandler = {
      typeOfAction: null,
      conditionCheck(event) {
        return event.target.closest('.to-cart');
      },
      action(savedThis, event) {
        this.checkTypeOfAction(event);
        if (this.typeOfAction === 'add') {
          savedThis.notify(
            'add-to-cart',
            savedThis.model.getAnimalById(
              Number(event.target.closest('.card').dataset.card_id)
            )
          );
          // debugger;
          event.target.closest('.card').innerHTML = event.target
            .closest('.card')
            .innerHTML.replace(
              /<button.+add-to-cart-btn.+button>/,
              savedThis.view.renderRemoveFromCartBtn()
            );
        } else {
          savedThis.notify(
            'remove-from-cart',
            Number(event.target.closest('.card').dataset.card_id)
          );
          event.target.closest('.card').innerHTML = event.target
            .closest('.card')
            .innerHTML.replace(
              /<button.+remove-from-cart-btn.+button>/,
              savedThis.view.renderAddToCartBtn()
            );
        }
      },
      checkTypeOfAction(event) {
        this.typeOfAction = event.target
          .closest('.to-cart')
          .classList.contains('add-to-cart-btn')
          ? 'add'
          : 'remove';
      }
    };
    const cardDetailsHandler = {
      conditionCheck(event) {
        return event.target.closest('.card');
      },
      action(savedThis) {
        savedThis.notify(
          'show-details',
          savedThis.model.getAnimalById(
            Number(e.target.closest('.card').dataset.card_id)
          )
        );
      }
    };
    const speciesBtnHandler = {
      conditionCheck(event) {
        return event.target.closest('.species-btn');
      },
      action(savedThis) {
        savedThis.model.setActiveSpecies(
          e.target.closest('.species-btn').dataset.quick_species
        );
        savedThis.notify(
          'species-select-new',
          e.target.closest('.species-btn').dataset.quick_species
        );
      }
    };
    const arrowUpHandler = {
      conditionCheck(event) {
        return event.target.closest('.arrow-up');
      },
      action(savedThis) {
        savedThis.view.scrollToTop();
      }
    };
    const navBarHandler = {
      conditionCheck(event) {
        return (
          event.target.dataset.page_n !== undefined &&
          event.target.classList.contains('page-link')
        );
      },
      action(savedThis) {
        savedThis.getCustomAnimalsPage(Number(e.target.dataset.page_n));
      }
    };
    /* const sortByPriceHandler = {
      conditionCheck(event) {
        return event.target.closest('.sort-by-price');
      },
      action(savedThis, event) {

      }
    }; */

    const handlersArr = [
      toCartHandler,
      cardDetailsHandler,
      speciesBtnHandler,
      arrowUpHandler,
      navBarHandler
    ];

    handlersArr.some(handler => {
      if (handler.conditionCheck(e)) {
        handler.action(savedThis, e);
        return true;
      }
      return false;
    });
  }
  handleScroll() {
    const lastKnownScrollPosition = this.view.getScrollYPosition();
    if (lastKnownScrollPosition) {
      this.model.setScrollYPosition(lastKnownScrollPosition);
    }
    if (lastKnownScrollPosition > 700) {
      this.view.getToUpBtnDisplayed();
    } else {
      this.view.getToUpBtnHidden();
    }
  }
}
