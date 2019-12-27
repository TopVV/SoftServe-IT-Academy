import { TemplateDetails } from "./TemplateDetails.js";

export class ViewDetails {
  constructor() {
    this.template = new TemplateDetails();
    this.mainWindow = document.querySelector(".main-window");
    this.detailsSection = document.querySelector(".details-info");
  }
  renderDetailsWindow(objInfo) {
    this.mainWindow.classList.add("hidden");
    this.detailsSection.innerHTML = this.template.getDetailedCardTemplate(
      objInfo
    );
  }
  addDetailsWindowListener(func) {
    document.querySelector(".details-window").addEventListener("click", func);
  }
}
