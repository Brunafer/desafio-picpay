const { v4: uuidv4 } = require('uuid')
const API_KEY = Cypress.env('API_KEY')

class Requests {

    getAllUsers(response) {
        const email = response.body.data.email

        return cy.request({
            method: 'GET',
            url: 'users',
            headers: {
                Authorization: API_KEY
            },
            qs: {
                email: email
            }

        })
    }

    getSingleUser(response) {
        const id = response.body.data.id

        return cy.request({
            method: 'GET',
            url: `users/${id}`,
            headers: {
                Authorization: API_KEY
            }
        })
    }

    postUsers() {

        const id = uuidv4().substring(0, 8)

        return cy.request({
            method: 'POST',
            url: '/users',
            headers: {
                Authorization: API_KEY
            },
            body: {
                "name": "Bruna teste",
                "email": `${id}@gmail.com`,
                "gender": "male",
                "status": "Active"
            }
        })
    }

    updateUser(response) {
        const id = response.body.data.id
        Cypress.env("name", "Romeu da Silva")

        return cy.request({
            method: 'PUT',
            url: '/users/' + id,
            headers: {
                Authorization: API_KEY
            },
            body: {
                "name": Cypress.env("name"),

            }
        })
    }

    deleteUser(response) {
        const id = response.body.data.id

        return cy.request({
            method: 'DELETE',
            url: '/users/' + id,
            headers: {
                Authorization: API_KEY
            },

        })
    }






}

export default new Requests();