



describe('api test', () => {
    it('enregistrement', () => {

        // faire une interception mettre la méthode mettre le non de la fin de route 
        //mettre le body avec les modification 
        // mettre l'aliase en .as

        cy.intercept('GET', '/api/tags',{ "body": {
            "tags": [
                "moussa",
                "bola",
                "Coding",
                "oyerinde",
                "wax",
                "fly",
                "Ypoooop",
                "Value-Focused",
                "Live Sessions",
                "Blog"
            ]
        }}).as('cond')

        //mettre l'url a visité
        cy.visit("https://conduit.bondaracademy.com/")
        
        // Récupérer l'aliase et retourner la promesse avec le .then
        // console log de l'object javascript
        cy.wait("@cond").then(Response=>{
            console.log(Response.response.body.tags[0])
            cy.visit('https://practice.automationtesting.in/')
           
        })
    
  
    })
  

    })
   
    
    
      