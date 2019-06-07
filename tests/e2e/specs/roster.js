describe('Roster Page', () => {
	beforeEach(() => {
		cy.login();
		cy.server();
		cy.route('GET', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:getPlayers.json');
	});

	it('Contains players', () => {
		cy.visit('http://localhost:8080/#/roster');
		cy.contains('Harry');
		cy.contains('Hermione');
		cy.contains('Ron');
	});
});
