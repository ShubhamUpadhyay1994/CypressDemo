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

it('google test3-1', function(){
    firstPagePO.enterSearchText().type(this.googleSearchTestData.searchText);
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains(this.googleSearchTestData.seearchResult);   
})

it('google test3-2', function(){
    firstPagePO.enterSearchText().type('Slack');
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains('About');
})

it('google test3-3', function(){
    firstPagePO.enterSearchText().type('Automation');
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains('About');
    cy.log('log the result')

})

