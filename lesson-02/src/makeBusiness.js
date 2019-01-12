import Sponsors from './sponsors';
import Employers from './employers';

const sponsors = {
        cash: [40000, 5000, 30400, 12000],
        eu: ['SRL', 'PLO', 'J&K'],
        rus: ['RusAuto', 'SBO']
    };
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

class makeBusiness{
    constructor(owner,sponsor, emp, director = 'Victor') {
        this.owner = owner;
        this.sponsor = sponsor;
        this.emp = emp;
        this.director = director;       
    }
    
	aboutBussines() {       
        const {owner, sponsor:{cash,sumSponsors,danger}, emp, director} = this;
        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. 
And our employers:${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${danger}. It's a huge risk.`)}
}

const emp = new Employers(employers);
const propsSponsor =new Sponsors(sponsors).getSponsorInfo(13);
const business = new makeBusiness('Sam',  propsSponsor, emp.getEmployersNames());

export {business};
