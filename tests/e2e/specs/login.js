describe('Login Page', () => {
	it('Contains email and password labels', () => {
		cy.visit('http://localhost:8080/#/login');
		cy.contains('Email');
		cy.contains('Password');
	});

	it('Accepts valid email and password', () => {
		cy.login();
		cy.url().should('eq', 'http://localhost:8080/#/roster');
	});
});
