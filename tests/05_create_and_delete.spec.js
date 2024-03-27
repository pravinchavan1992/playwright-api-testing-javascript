const { test, expect } = require("@playwright/test");
const { getBookingData } = require("../models/booking");
const { Booking } = require("../service/bookings");

test.describe.serial("Test create and delete booking", async () => {
  const data = await getBookingData();
  var bookingid = 0;
  test("Create Booking", async () => {
    const booking = new Booking();
    await test.step("Create booking", async () => {
      const response = await booking.createBooking(data);
      const res = await response.json();
      expect.soft(res.bookingid).not.toBeNull();
      bookingid = res.bookingid;
      expect.soft(res.booking.firstname).toBe(data.firstname);
      expect.soft(res.booking.lastname).toBe(data.lastname);
      expect.soft(res.booking.totalprice).toBe(data.totalprice);
      expect.soft(res.booking.depositpaid).toBe(data.depositpaid);
      expect.soft(res.booking.additionalneeds).toBe(data.additionalneeds);
    });
    await test.step("Get booking by ID and verify details", async () => {
      const response = await booking.getBookingByID(bookingid);
      const res = await response.json();
      expect.soft(res.firstname).toBe(data.firstname);
      expect.soft(res.lastname).toBe(data.lastname);
      expect.soft(res.totalprice).toBe(data.totalprice);
      expect.soft(res.depositpaid).toBe(data.depositpaid);
      expect.soft(res.additionalneeds).toBe(data.additionalneeds);
    });
    await test.step(`Delete booking id ${bookingid}`, async () => {
        const response = await booking.deleteBooking(bookingid);
     expect(response.status()).toBe(201)
      });
  });
});
