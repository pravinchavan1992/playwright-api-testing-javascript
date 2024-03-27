const { faker } = require("@faker-js/faker");

export async function getBookingData() {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int(5000),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: faker.person.zodiacSign(),
  };
}

export async function getUpdateBookingData() {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int(5000),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: faker.person.zodiacSign(),
  };
}
