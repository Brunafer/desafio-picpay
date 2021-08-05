class Assertions {
    shouldHaveStatus(response, status) {
        expect(response.status, `status is ${status}`).to.eq(status)
    }

    shouldUsersIdNotNull(response) {
        expect(response.body.data.id, 'id exists').to.not.be.null;

    }

    shouldUsersEmailExists(email, response) {
        expect(response.body.data).to.lengthOf(1);
        expect(response.body.data[0].email, 'email exists').to.exist;
        expect(response.body.data[0].email).to.eq(email);

    }

    shouldUserDataBeUpdated(response) {
        expect(response.body.data.name).to.eq(Cypress.env("name"));
    }

    shouldDurationBeFast(response) {
        expect(response.duration, 'response duration').lessThan(9000);

    }

    shouldListBeEmpty(response) {
        expect(response.body.data, 'email no exists').to.be.empty;
    }
}

export default new Assertions();