import {sponsors, money} from './sponsors';
import {employersNames} from './employers';

const { eu, rus, eu:[danger] } = sponsors,
      sumSponsors = [...eu, ...rus, 'unexpected sponsor'].join(' '); 

class makeBusiness{
    constructor(owner, cash, emp, director = 'Victor') {
        this.owner = owner;
        this.cash = cash;
        this.emp = emp;
        this.director = director;
    }
    
	aboutBussines() {
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. 
And our employers:${this.emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${danger}. It's a huge risk.`)}
}

const business = new makeBusiness('Sam', money, employersNames);

export {business};
