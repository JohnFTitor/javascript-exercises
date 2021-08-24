const findTheOldest = function(people) {
    people.sort(function (previous, next) {
        let currentYear = new Date().getFullYear(); 
        let previousAge = (("yearOfDeath" in previous) ? previous.yearOfDeath : currentYear) - previous.yearOfBirth;
        let nextAge = (("yearOfDeath" in next) ? next.yearOfDeath : currentYear) - next.yearOfBirth;
        return previousAge > nextAge ? -1 : 1;
    })
    return people[0];
};

module.exports = findTheOldest;
