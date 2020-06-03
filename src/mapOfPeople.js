'use strict';

function mapOfPeople(people) {
  const peopleInRoom = new Map();

  people.forEach((person, i) => {
    if (peopleInRoom.has(person)) {
      peopleInRoom.delete(person);
    } else {
      peopleInRoom.set(person, i);
    }
  });

  return peopleInRoom;
}

module.exports = mapOfPeople;
