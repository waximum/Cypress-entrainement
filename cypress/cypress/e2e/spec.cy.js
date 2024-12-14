

describe('api test', () => {
  beforeEach('enregistrement', () => {
    cy.login()
  })
 /it('test', () =>{
    cy.log('je suis connecté')
  })

  it('creation dun article', () => {

    cy.intercept('Post', 'https://conduit-api.bondaracademy.com/api/articles/').as('postarti')
    cy.get('a[routerlink="/editor"]').click()
    cy.get('input[placeholder="Article Title"]').type('Adebola c le titre')
    cy.get('input[formcontrolname="description"]').type('a new test c de koi parle larticle')
    cy.get('[formcontrolname="body"').type('ceci est à propos dun nouveau test. Je check que tout va bien.')
    cy.get('button[class="btn btn-lg pull-xs-right btn-primary"]').click()
    cy.wait('@postarti')
    cy.get('@postarti').then(xhr => {
      cy.log(xhr)
      let obj = xhr
      expect(obj.response.statusCode).to.equal(201)
      expect(obj.request.body.article.body).to.equal('ceci est à propos dun nouveau test. Je check que tout va bien.')
      expect(obj.request.body.article.title).to.equal("Adebola c le titre")
    })
   

  })
  
    })