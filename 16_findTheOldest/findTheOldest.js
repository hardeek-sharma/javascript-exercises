const findTheOldest = function(people) {
    // people.sort((b, a) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
  let currentYear = new Date().getFullYear();

    people.sort((b, a) => (('yearOfDeath' in a ?  a.yearOfDeath : currentYear) - a.yearOfBirth) - (('yearOfDeath' in b ?  b.yearOfDeath : currentYear) - b.yearOfBirth));

    return people[0];    
};

// Do not edit below this line
module.exports = findTheOldest;
