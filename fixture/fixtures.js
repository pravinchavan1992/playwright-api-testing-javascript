const { test } = require('@playwright/test');
const { Booking } = require('../service/bookings');
const { getToken } = require("../util/api");

exports.test = test.extend({
    booking: async ({  }, use) => {
        const booking = new Booking()
        booking.setToken(await getToken())
        await use(new Booking());
      },
})

exports.expect = test.expect;