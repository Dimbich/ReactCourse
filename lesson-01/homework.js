const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(employer => employer)
																.map(employer => employer.toLowerCase().trim());

let sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

function calcCash(...cash) {
	let [ownCash, sponsorCash] = cash;
	ownCash = ownCash || 0;
	return ownCash + sponsorCash.filter(elem => !isNaN(elem))
															.reduce((sum, cash) => sum + cash);
}

const money = calcCash(null, sponsors.cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
	const { eu, rus, eu:[danger] } = sponsors;
	const sumSponsors = [...eu, ...rus, 'unexpected sponsor'].join(' ');
	console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. 
And our employers:${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${danger}. It's a huge risk.`);
}
makeBusiness('Sam', money, employersNames);