export class ModelCart {
  constructor(subscribe, unsubscribe, notify) {
    this.animalsInCartArr = [];
    this.notify = notify;
    this.apiKey = '957348871:AAFs0H3FQZ4t3mRk7UiW37IhbmwIFeG5gU0';
    this.url = `https://api.telegram.org/bot${this.apiKey}`;
    this.myId = 312944163;
    this.groupChatId = -377489566;
    this.orderInformationObj = null;
  }
  addAnimalToCart(animalObj) {
    if (this.animalsInCartArr.every(obj => obj.id !== animalObj.id)) {
      const animalObjClone = { ...animalObj };
      this.animalsInCartArr.push(animalObjClone);
      this.setLocalStorageCopy();
      this.notify('animals-in-cart-update', this.animalsInCartArr);
    }
  }
  getAnimalsInCart() {
    return this.animalsInCartArr;
  }
  setAnimalsInCart(arr) {
    this.animalsInCartArr = [...arr];
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
  getTotalCartSum() {
    return (
      Math.round(
        this.animalsInCartArr.reduce((acc, cur) => acc + cur.price, 0) * 100
      ) / 100
    );
  }
  clearAnimalsInCart() {
    this.animalsInCartArr.length = 0;
    this.setLocalStorageCopy();
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
  getCartAnimalsQuantity() {
    return this.animalsInCartArr.length;
  }
  deleteAnimalFromCart(animalToDeleteId) {
    this.animalsInCartArr = this.animalsInCartArr.filter(
      animalObj => animalObj.id !== animalToDeleteId
    );
    this.setLocalStorageCopy();
    this.notify('animals-in-cart-update', this.animalsInCartArr);
  }
  checkIfInCart(id) {
    return this.animalsInCartArr.some(obj => obj.id === id);
  }
  sendMessage(message = 'test', id = this.myId, parseMode = 'MarkDown') {
    fetch(
      `${this.url}/sendMessage?chat_id=${id}&text=${encodeURIComponent(
        message
      )}&parse_mode=${parseMode}`
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
  getMessageForBot(
    orderObj = this.orderInformationObj,
    cartInfo = this.animalsInCartArr
  ) {
    const animalsIds =
      'Animals IDs: ' + cartInfo.map(animal => animal.id).join(', ');
    const buyerInfo = `
    First Name: ${orderObj.firstName}
    Last Name: ${orderObj.lastName}
    Phone Number: ${orderObj.phone}
    Address: ${orderObj.address}
    Email: ${orderObj.email}
    Notes: ${orderObj.notes}`;
    return animalsIds + buyerInfo;
  }
  setLocalStorageCopy(arr = this.animalsInCartArr) {
    localStorage.setItem('savedCart', JSON.stringify(this.animalsInCartArr));
  }
}
