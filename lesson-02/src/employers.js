const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(employer => employer)
                                .map(employer => employer.toLowerCase().trim());
                
export {employersNames};