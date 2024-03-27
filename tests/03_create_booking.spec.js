const { test, expect } = require("@playwright/test");
const { Booking } = require('../service/bookings');
const { getBookingData, getUpdateBookingData } = require("../models/booking");

test.describe.serial("Test Create and update booking", async () => {
  test("Create Booking Test", async () => {
    var bookingid = 0;
    const booking = new Booking()
    await test.step("Create booking", async () => {
      const data = await getBookingData();
      const response = await booking.createBooking(data);
      const res = await response.json();
      console.log("Create Req");
      console.log(res);
      expect.soft(res.bookingid).not.toBeNull();
      bookingid = res.bookingid;
      expect.soft(res.booking.firstname).toBe(data.firstname);
      expect.soft(res.booking.lastname).toBe(data.lastname);
      expect.soft(res.booking.totalprice).toBe(data.totalprice)
      expect.soft(res.booking.depositpaid).toBe(data.depositpaid);
      expect.soft(res.booking.additionalneeds).toBe(data.additionalneeds);
    });

    await test.step("Update booking", async () => {
      const data = await getUpdateBookingData();
      const response = await booking.updateBooking(data, bookingid);
      const res = await response.json();
      console.log("Update Req");
      console.log(res);
      expect.soft(res.bookingid).not.toBeNull();
      expect.soft(res.firstname).toBe(data.firstname);
      expect.soft(res.lastname).toBe(data.lastname);
      expect.soft(res.totalprice).toBe(data.totalprice)
      expect.soft(res.depositpaid).toBe(data.depositpaid);
      expect.soft(res.additionalneeds).toBe(data.additionalneeds);
    });
  });
});
