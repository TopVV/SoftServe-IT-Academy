export class TemplateSearch {
    constructor() {
        
    }
    getSearchTemplate(){
        return `<input type="text" class="form-control search-input" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
            <div class="input-group-append">
            <button class="btn btn-outline-secondary search-btn" type="button">Search</button>
        </div>`
    }
}