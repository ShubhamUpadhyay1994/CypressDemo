export class FirstTest{

    searchText = '.gLFyf';
    googleIMg = '.uU7dJb';
    search = '.FPdoLc > center > .gNO89b';
    result = '#result-stats';

    navigate(url: string){
        cy.visit(url);
    }

    enterSearchText(){
       return cy.get(this.searchText);

    }

    googleImapge(){
        return cy.get(this.searchText);
    }

    searchButton(){
        return cy.get(this.search);
      
    }

    verifySearchResult(){
       return cy.get(this.result);
    }

}