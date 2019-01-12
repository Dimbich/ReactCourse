export default class Sponsors {
	constructor (sponsors) {
		this.sponsors = sponsors;
	}

	calcCash(own = 0, everyCash) {		
		return own + everyCash.filter(elem => !isNaN(elem))
							  .reduce((sum, cash) => sum + cash);
	}

	getSponsorInfo(own) {
		const {cash, eu, rus} = this.sponsors;
		return {
			cash : this.calcCash(own, cash),
			sumSponsors: [...eu, ...rus, 'unexpected sponsor'].join(' '),
			danger: eu[0]
		};
	}
}
