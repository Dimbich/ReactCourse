export default class Employers {
    constructor(employers) {
        this.employers = employers;
    }
    getEmployersNames() {
        return this.employers.filter(employer => employer)
                 .map(employer => employer.toLowerCase().trim());
    }
}
