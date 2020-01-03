export class ModelCart {
  constructor(subscribe, unsubscribe, notify) {
    this.animalsInCartArr = [];
    this.notify = notify;
    this.apiKey = '957348871:AAFs0H3FQZ4t3mRk7UiW37IhbmwIFeG5gU0';
    this.url = `https://api.telegram.org/bot${this.apiKey}`;
    // https://api.telegram.org/bot<token>/METHOD_NAME
    this.myId = 312944163;
    this.groupChatId = -377489566;
    this.orderInformationObj = null;
    // this.sendMessage();
  }
  addAnimalToCart(animalObj) {
    if (this.animalsInCartArr.every(obj => obj.id !== animalObj.id)) {
      const animalObjClone = { ...animalObj };
      this.animalsInCartArr.push(animalObjClone);
      this.notify('animals-in-cart-update', this.animalsInCartArr);
    }
  }
  getAnimalsInCart() {
    return this.animalsInCartArr;
  }
  clearAnimalsInCart() {
    this.animalsInCartArr.length = 0;
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
  getCartAnimalsQuantity() {
    return this.animalsInCartArr.length;
  }
  deleteAnimalFromCart(animalToDeleteId) {
    this.animalsInCartArr = this.animalsInCartArr.filter(
      animalObj => animalObj.id !== animalToDeleteId
    );
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
  checkIfInCart(id) {
    return this.animalsInCartArr.some(obj => obj.id === id);
  }
  sendMessage(message = 'test', id = this.myId, parseMode = 'HTML') {
    fetch(
      `${this.url}/sendMessage?chat_id=${id}&text=${message}&parse_mode=${parseMode}`
    );
  }
  validateInput(inputObj) {
    const validator = {
      validateName(name) {
        return name.length > 0;
      },
      validatePhone(phone) {
        const regex = /^(\+380){1}\d{9}$/;
        return regex.test(phone);
      },
      validateAddress(address) {
        return address.length > 0;
      },
      validateEmail(email) {
        const regex = /^[\w\.]+@\w+\.\w+/;
        return regex.test(email);
      }
    };
    let result;
    const validationResultsArr = [
      { id: 'firstName', result: validator.validateName(inputObj.firstName) },
      { id: 'lastName', result: validator.validateName(inputObj.lastName) },
      { id: 'phone', result: validator.validatePhone(inputObj.phone) },
      { id: 'address', result: validator.validateAddress(inputObj.address) },
      { id: 'email', result: validator.validateEmail(inputObj.email) }
    ];
    const isAllValid = validationResultsArr.every(
      validCheck => validCheck.result
    );
    if (isAllValid) {
      this.orderInformationObj = { ...inputObj };
      result = 'valid';
    } else {
      result = validationResultsArr.find(
        validationResult => !validationResult.result
      ).id;
    }
    return result;
  }
  getMessageForBot(orderObj = this.orderInformationObj) {
    return JSON.stringify(orderObj);
  }
  /*return  `firstName: ${orderObj.firstName}
  lastName: ${orderObj.lastName}
  phone: ${orderObj.phone}
  address: ${orderObj.address}
  email: ${orderObj.email}
  notes: ${orderObj.notes}` */
}
