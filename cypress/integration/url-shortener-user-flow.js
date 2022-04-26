describe('url shortener app', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.intercept("GET", "http://localhost:3003/api/v1/urls", {
          "urls": [
                {
                "id": 1,
                "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                "short_url": "http://localhost:3001/useshorturl/1",
                "title": "Awesome photo"
                }
          ]
      }).as('get-urls')
    })
  
  it('shows the page title and the exisiting shortened URLs when the user visits the page', () => {
      cy.get("h1").should('have.text', 'URL Shortener')

      cy.get(".url-title").first()
      .should('have.text', "Awesome photo")

      cy.get(".id").first()
      .should('have.text', "Id: 1")

      cy.get(".short-url").first()
      .should('have.text', "http://localhost:3001/useshorturl/1")

      cy.get(".long-url").first()
      .should('have.text', "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
    })

  it('shows the form with proper inputs', () => {
    cy.get("input.url-form-title").should('exist')
    cy.get("input.url-to-shorten").should('exist')
  })

  it('reflects the correct information in the fields when the user fills out the form', () => {
    cy.get(".url-form-title").type("test")
.contains("test")
    cy.get(".url-to-shorten").type("images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
    cy.get(".url-to-shorten").contains("images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")

  })

  it('shows a new shortened URL when a user fills out and submits the form', () => {
    cy.get(".url-form-title").type("test6")
    cy.get(".url-to-shorten").type("images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
    .get('button').click()
    .get("test6").click
  })

  })
