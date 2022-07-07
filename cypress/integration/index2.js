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

        // // it("Saerchfor_StartsWith_CustRef", () =>{
        
        // // cy.contains('Trace').click()
        
        // // cy.wait(1500)

        // // cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        // // cy.get('div ul li').contains('Cust Ref').click({force:true}).should('have.text', 'Cust Ref')
        // // cy.get('#trace_number:visible').clear()
        // // cy.get('#trace_number:visible').type('Test').should('have.value', 'Test')

        // // //cy.trigger('mouseover')
        // // cy.get('[onclick="kendoGridTrace()"]').trigger("mouseover").click()

        // // cy.wait(2000)

        // // cy.get('tr td:nth-child(5)').each(($el,index,$list) => {
        // //     const text = $el.text()    
        // //      //collecting text values from table and store it
        // // if(text.includes("Test"))
        // // {
        // //     cy.get("tr td:nth-child(5)").eq(index).then(function(po)
        // // {
        // //     const potext = po.text()
        // //     expect('Test').to.equal("Test")       
        // // })
        // // }
        // // // calling the same table elements and the index number if on 7th index, then move to next siblings using next()	
        
        // // })


        // //cy.get('#tmGrid_btn_search').click()
        // cy.contains('Trace').click()
        // cy.wait(2000)
        // })

    //     it("SearchBy_PO#_StartsWith",  () => 
    //     {
    //         cy.get('div ul li').contains('PO #').click({force:true}).should('have.text', 'PO #')
    //         cy.get('#trace_number:visible').clear()
    //         cy.get('#trace_number:visible').type('1235').should('have.value', '1235')
    //         cy.get('[onclick="kendoGridTrace()"]').trigger("mouseover").click()

    //         cy.wait(2000)


    //     cy.get('tr td:nth-child(6)').each(($el,index,$list) => {
    //         const text = $el.text()    
    //          //collecting text values from table and store it
    //     if(text.includes("1235"))
    //     {
    //         cy.get("tr td:nth-child(6)").eq(index).then(function(po)
    //     {
    //         const potext = po.text()
    //         expect('1235').to.equal("1235")       
    //     })
    //     }
    //     // calling the same table elements and the index number if on 7th index, then move to next siblings using next()	
        
    //     })
    //     cy.contains('Trace').click()
    //     cy.wait(2000)
    // })
  
    it("SearchBy_Release#_StartsWith", function () {
        cy.contains('Trace').click()
             cy.wait(2000)
        cy.get('tr:nth-child(2) td:nth-child(1):visible').click({multiple:true})
        cy.get('div ul li').contains('Release #').click({force:true}).should('have.text', 'Release #')
        cy.get('#trace_number:visible').clear()
      cy.get('#trace_number:visible').type('AD').should('have.value', 'AD')
      cy.get('[onclick="kendoGridTrace()"]').contains('Trace').click()
      cy.wait(2000)

    //   cy.get('tr td:nth-child(24)').each(($el,index,$list) => {
    //     const text = $el.text()    
    //      //collecting text values from table and store it
    // if(text.includes("AD"))
    // {
    //     cy.get("tr td:nth-child(24)").eq(index).then(function(po)
    // {
    //     const potext = po.text()
    //     expect('AD').to.equal("AD")       
    // })
    // }
    // // calling the same table elements and the index number if on 7th index, then move to next siblings using next()	
    
    // })
  //  cy.get('td:nth-child(24):visible').scrollIntoView()
  //cy.scrollTo('topRight')
  cy.scrollTo('right')
    cy.contains('a:visible','Release #').should('be.visible')
 //  cy.scrollTo(5000,0)
 //  cy.contains('tr:visible','Release #').should('be.visible')
  //  cy.contains('tr:visible','AD').should('be.visible')
  //    cy.get('table >tbody >tr td:visible').contains('td','AD').should('be.visible')
   //   cy.get('table >tbody >tr').contains('td','AD').should('be.visible')
     
    
      //cy.get('#tmGrid_btn_search').click()
      })

    it('Logout',() =>{
        cy.get('.k-menu-expand-arrow').trigger('mouseover')
        cy.contains('Logout').click()

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false    
 })
        

})


