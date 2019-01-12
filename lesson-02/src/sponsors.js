export default class Sponsors {
	constructor (sponsors) {
		this.sponsors = sponsors;
	}

	calcCash(own = 0, everyCash) {		
		return own + everyCash.filter(elem => !isNaN(elem))
							  .reduce((sum, cash) => sum + cash);
	}

	getSponsorInfo() {
		const {cash, eu, rus} = this.sponsors;
		return {
			cash : this.calcCash(null, cash),
			sumSponsors: [...eu, ...rus, 'unexpected sponsor'].join(' '),
			danger: eu[0]
		};
	}
}
