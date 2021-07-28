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

it('test 1', function(){
    firstPagePO.enterSearchText().type(this.googleSearchTestData.searchText);
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains(this.googleSearchTestData.seearchResult);   
})

it('test 2', function(){
    firstPagePO.enterSearchText().type('Python');
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains('About');
})

it('test 3', function(){
  firstPagePO.enterSearchText().type('webdriver io');
    firstPagePO.googleImapge().type('{enter}');
    firstPagePO.verifySearchResult().contains('About');
})

it('test 4', function(){
    firstPagePO.enterSearchText().type('Karate Framework');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })

  it('test 5', function(){
    firstPagePO.enterSearchText().type('RestApi');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })

  it('test 6', function(){
    firstPagePO.enterSearchText().type('Postman');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })

  it('test 7', function(){
    firstPagePO.enterSearchText().type('Jenkins');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })


  it('test 8', function(){
    firstPagePO.enterSearchText().type('Katalon');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })


  it('test 9', function(){
    firstPagePO.enterSearchText().type('Cyber security');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })


  it('test 10', function(){
    firstPagePO.enterSearchText().type('Mysql');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })


  it('test 11', function(){
    firstPagePO.enterSearchText().type('Matlab');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })


  it('test 12', function(){
    firstPagePO.enterSearchText().type('CSS');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })

  it('test 13', function(){
    firstPagePO.enterSearchText().type('HTML');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })


  it('test 14', function(){
    firstPagePO.enterSearchText().type('C++');
      firstPagePO.googleImapge().type('{enter}');
      firstPagePO.verifySearchResult().contains('About');
  })



