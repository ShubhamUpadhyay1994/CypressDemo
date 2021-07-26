import {FirstTest  } from "../page/firsttest.po";

let firstPagePO = new FirstTest();

//Mostly used for Setup Part
before(function(){
    cy.fixture('google').then(function(data)
    {
        this.googleSearchTestData=data ;
    })
    })

beforeEach(function(){
    window.console.log('Enter the beforeEach function')
    Cypress.Cookies.preserveOnce('SESSION')
  firstPagePO.navigate('/');
})

it('google test', function(){
    firstPagePO.enterSearchText().type(this.googleSearchTestData.searchText);
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains(this.googleSearchTestData.seearchResult);   
})

it('google test 2', function(){
    firstPagePO.enterSearchText().type('Python');
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains('About');
})

it('google test 3', function(){
    // firstPagePO.enterSearchText().type('Hello');
    // firstPagePO.googleImapge().click();
    // firstPagePO.searchButton().click();
    // cy.wait(6000);
    // firstPagePO.verifySearchResult().contains('About');
    
    
    firstPagePO.enterSearchText().type('Java');
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains('About');
})

