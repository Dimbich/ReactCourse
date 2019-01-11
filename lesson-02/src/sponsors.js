let sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0, everyCash) {
   // [everyCash] = everyCash;
	return own + everyCash.filter(elem => !isNaN(elem))
						  .reduce((sum, cash) => sum + cash);
}

const money = calcCash(null, sponsors.cash);

export {sponsors, money};