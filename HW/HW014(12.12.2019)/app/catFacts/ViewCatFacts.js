export class ViewCatFacts {
    constructor() {
        this.catFactsDiv = document.querySelector(".catFacts");
        this.btnSearch = document.querySelector(".btn__search");
        this.inputNumb = document.querySelector(".inputNumber");
    };

    renderFacts(factsArr, picsArr) {
        let factsHtml = '';
        for (let i = 0; i < factsArr.length; i++) {
            factsHtml += this.prepareNewFact(factsArr[i].fact, picsArr[i].url, i + 1)
        }
        this.catFactsDiv.innerHTML = factsHtml;
    }

    prepareNewFact(fact, pic, iNum) {
        return `<div class="card m-5 p-3" style="width: 18rem;">
        <img src="${pic}" class="card-img-top" alt="Cat picture">
        <div class="card-body">
          <h5 class="card-title">Cat fact #${iNum}</h5>
          <p class="card-text">${fact}</p>
          <a href="${pic}" target="_blank" class="btn btn-primary">Open picture with the cat in the new window</a>
        </div>
      </div>`
    }
    addListners(searchFunc, handleEnterOnInput) {
        this.btnSearch.addEventListener('click', searchFunc);
        this.inputNumb.addEventListener('keyup', handleEnterOnInput);
    }
    checkInput() {
        return this.inputNumb.value;
    }
    resetInput() {
        this.inputNumb.value = "";
    }
}