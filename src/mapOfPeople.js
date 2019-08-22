'use strict';

function mapOfPeople(people) {
  const mapOfGuests = new Map();

  people.forEach(person => {
    if (mapOfGuests.has(person)) {
      mapOfGuests.delete(person);
    } else {
      mapOfGuests.set(person, people.lastIndexOf(person));
    }
  });

  return mapOfGuests;
}

module.exports = mapOfPeople;
