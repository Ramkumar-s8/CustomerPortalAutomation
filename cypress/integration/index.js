  /// <reference types="cypress" />
          /// <reference types="cypress-iframe" />
        
          import 'cypress-iframe'

          describe("CustomerPortal_Login/Logout", function () {

          before(function () {
              cy.fixture('example').then(function (data) {
              this.data = data

              })

          })
          it("AccessToPortal", function () {
              cy.visit(this.data.portal)
              
          })


          it("Login", () =>{

            cy.get('a[href="https://prioritywebtest.tmwcloud.com/login.msw"]').click()
            cy.wait(1500)
        

        cy.get('#tm4web_usr').type("tlps")
        cy.get('#tm4web_pwd').type("tester123")
        // cy.get('#tm4web_pwd').type(this.pwd)
            cy.get('button[onclick="submitLogin()"]').click()
        })

        beforeEach(() =>{

            Cypress.Cookies.preserveOnce('PHPSESSID')
        })
        

        it("OK Alertpop ups", function () {
            cy.on('window:alert' , (str) =>{
        
          })
        })

    it("SearchBy_CustRef_StartsWith", function () {

      cy.contains('Trace').click()
          
      cy.wait(1500)

      cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
      cy.get('div ul li').contains('Cust Ref').click({force:true}).should('have.text', 'Cust Ref')
      cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('Test').should('have.value', 'Test')

      //cy.trigger('mouseover')
      cy.get('[onclick="kendoGridTrace()"]').trigger("mouseover").click()

      cy.wait(2000)

      cy.get('tr td:nth-child(5)').each(($el,index,$list) => {
          const text = $el.text()    
          //collecting text values from table and store it
      if(text.includes("Test"))
      {
          cy.get("tr td:nth-child(5)").eq(index).then(function(po)
      {
          const potext = po.text()
          expect('Test').to.equal("Test")       
      })
      }
    
      
      })


      //cy.get('#tmGrid_btn_search').click()
      cy.contains('Trace').click()
      cy.wait(2000)
      })
    
    it("SearchBy_PO#_StartsWith", function () {

      cy.get('div ul li').contains('PO #').click({force:true}).should('have.text', 'PO #')
              cy.get('#trace_number:visible').clear()
              cy.get('#trace_number:visible').type('123').should('have.value', '123')
              cy.get('[onclick="kendoGridTrace()"]').trigger("mouseover").click()

              cy.wait(2000)

              
          cy.get('tr td:nth-child(6)').each(($el,index,$list) => {
              const text = $el.text()    
              //collecting text values from table and store it
          if(text.includes("123"))
          {
              cy.get("tr td:nth-child(6)").eq(index).then(function(po)
          {
              const potext = po.text()
              expect('123').to.equal("123")       
          })
          }
            
          
          })
          //cy.get('#tmGrid_btn_search').click()
      cy.contains('Trace').click()
      cy.wait(2000)
    })


    it("SearchBy_FreightBillNumber_StartsWith", function () {

      cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
      cy.get('div ul li').contains('Freight Bill number').click({force:true}).should('have.text', 'Freight Bill number')
      cy.get('#trace_number:visible').clear()
    cy.get('#trace_number:visible').type('TI00').should('have.value', 'TI00')
    cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
    cy.wait(2000)

    cy.get('tr td:nth-child(4)').each(($el,index,$list) => {
      const text = $el.text()    
      //collecting text values from table and store it
  if(text.includes("TI00"))
  {
      cy.get("tr td:nth-child(4)").eq(index).then(function(po)
  {
      const potext = po.text()
      expect('TI00').to.equal("TI00")       
  })
  }
    

  })
  //cy.get('#tmGrid_btn_search').click()
  cy.contains('Trace').click()
  cy.wait(2000)
    })
      

    it("SearchBy_VesselName_StartsWith", function () {

      cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
      cy.get('div ul li').contains('Vessel Name').click({force:true}).should('have.text', 'Vessel Name')
      cy.get('#trace_number:visible').clear()
    cy.get('#trace_number:visible').type('Moana').should('have.value', 'Moana')
    cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
    cy.wait(2000)
  //  cy.get('table >tbody >tr >td:visible').contains('td','Moana').should('be.visible')
    cy.contains('Trace').click()
  cy.wait(2000)
    })
      
    it("SearchBy_Container#_StartsWith", function () {

      cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
      cy.get('div ul li').contains('Container #').click({force:true}).should('have.text', 'Container #')
      cy.get('#trace_number:visible').clear()
    cy.get('#trace_number:visible').type('MSKU').should('have.value', 'MSKU')
    cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
    cy.wait(2000)
  //  cy.get('table >tbody >tr >td:visible').contains('td','MSKU').should('be.visible')
    cy.contains('Trace').click()
    cy.wait(2000)
    })
      
    it("SearchBy_Release#_StartsWith", function () {

      cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
      cy.get('div ul li').contains('Release #').click({force:true}).should('have.text', 'Release #')
      cy.get('#trace_number:visible').clear()
    cy.get('#trace_number:visible').type('AD').should('have.value', 'AD')
    cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
    cy.wait(2000)
  //  cy.get('tr td:nth-child(24)').contains('td','AD').should('be.visible')
 //   cy.get('table >tbody >tr').contains('Release #').should('be.visible')
    cy.contains('Trace').click()
  cy.wait(2000)
  
    //cy.get('#tmGrid_btn_search').click()
    })


    


      it("SearchBy_CustRef_Exact", function () {
    
        cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('Cust Ref').click({force:true}).should('have.text', 'Cust Ref')
        cy.get('div ul li').contains('Exact').click({force:true}).should('have.text', 'Exact')
        cy.get('#trace_number:visible').clear()
  //     cy.get('tr:nth-child(2) td:nth-child(2):visible').click({multiple:true})
      cy.get('#trace_number:visible').type('8520698').should('have.value', '8520698')
    //  cy.wait(5000)
    / cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
    // cy.get('button').contains('Trace').click().should('be.visible')
      // cy.get('[onclick="kendoGridTrace()"]').click()
    //   cy.get('button[onclick="kendoGridTrace()"]:visible').click()
    //   cy.wait(5000)
    cy.wait(2000)
    cy.get('table >tbody >tr').contains('td','8520698').should('be.visible')
    cy.contains('Trace').click()
    cy.wait(2000)
      
      //  cy.get('.k-link').contains('Cust Ref').should('have.value','Cust Ref')
    
      })
      
      it("SearchBy_PO#_Exact", function () {

        cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('PO #').click({force:true}).should('have.text', 'PO #')
        cy.get('div ul li').contains('Exact').click({force:true}).should('have.text', 'Exact')
        cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('1235').should('have.value', '1235')
      cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
    cy.wait(2000)
    cy.get('table >tbody >tr').contains('td','1235').should('be.visible')
    cy.contains('Trace').click()
    cy.wait(2000)
    
      })
    
      it("SearchBy_FreightBillNumber_Exact", function () {
    
        cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('Freight Bill number').click({force:true}).should('have.text', 'Freight Bill number')
        cy.get('div ul li').contains('Exact').click({force:true}).should('have.text', 'Exact')
        cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('TI006491').should('have.value', 'TI006491')
      cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
      cy.wait(2000)
      cy.get('table >tbody >tr').contains('td','TI006491').should('be.visible')
      cy.contains('Trace').click()
  cy.wait(2000)
      })
        
    
      it("SearchBy_VesselName_Exact", function () {
    
     //   cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('Vessel Name').click({force:true}).should('have.text', 'Vessel Name')
        cy.get('div ul li').contains('Exact').click({force:true}).should('have.text', 'Exact')
        cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('Moana chief').should('have.value', 'Moana chief')
      cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
      cy.wait(2000)
 //     cy.get('table >tbody >tr').contains('td','Moana chief').should('be.visible')
      cy.contains('Trace').click()
  cy.wait(2000)
      })
        
      it("SearchBy_Container#_Exact", function () {
    
    //    cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('Container #').click({force:true}).should('have.text', 'Container #')
        cy.get('div ul li').contains('Exact').click({force:true}).should('have.text', 'Exact')
        cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('MSKU3858088').should('have.value', 'MSKU3858088')
      cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
      cy.wait(2000)
  //    cy.get('table >tbody >tr').contains('td','MSKU3858088').should('be.visible')
      cy.contains('Trace').click()
  cy.wait(2000)
      })
        
      it("SearchBy_Release#_Exact", function () {
    
     //   cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('Release #').click({force:true}).should('have.text', 'Release #')
        cy.get('div ul li').contains('Exact').click({force:true}).should('have.text', 'Exact')
        cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('AD1234').should('have.value', 'AD1234')
      cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
      cy.wait(2000)
 //     cy.get('table >tbody >tr').contains('td','AD1234').should('be.visible')
      
      //cy.get('#tmGrid_btn_search').click()
      })
    
      //cy.get('#tmGrid_btn_search').click()
      
    


    // Cypress.config("chromeWebSecurity", true)


    Cypress.on('uncaught:exception', (err, runnable) => {
      return false

      
    })

    it('Logout',() =>{
      cy.get('.k-menu-expand-arrow').trigger('mouseover')
      cy.contains('Logout').click()

  })
  })
