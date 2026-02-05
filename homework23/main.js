'use strict';

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }
  addResident(person) {
    if (person instanceof Person) {
      this.residents.push(person);
    } else {
      console.log('Only Person can be added');
    }
  }
}




class House {
  constructor(maxApartments) {
    this.maxApartments = maxApartments;
    this.apartments = [];
  }

  addApartment(apartment) {
    if (!(apartment instanceof Apartment)) {
      console.log('Only Apartment can be added');
      return;
    }

    if (this.apartments.length >= this.maxApartments) {
      console.log('Apartment limit exceeded');
      return;
    }

    this.apartments.push(apartment);
  }
}

const p1 = new Person('Valeria', 'female');
const p2 = new Person('Dmitro', 'male');

const a1 = new Apartment();
const a2 = new Apartment();

a1.addResident(p1);
a1.addResident(p2);

const house = new House(2);

house.addApartment(a1);

house.addApartment(a2);

const a3 = new Apartment();

house.addApartment(a3);
