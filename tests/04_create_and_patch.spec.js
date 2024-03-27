const { test, expect } = require("@playwright/test");
const { getToken } = require("../util/api");
const { Booking } = require("../service/bookings");
const { getBookingData } = require("../models/booking");

test.describe
  .serial("Test create request and update first name and price", async () => {
  var token = "";
  var bookingid = 0;
  const booking = new Booking();
  test("Create Booking and save save booking id", async () => {
    await test.step("Get Token", async () => {
      token = await getToken();
    });

    await test.step("Create Booking", async () => {
      const data = await getBookingData();
      const response = await booking.createBooking(data);
      const res = await response.json();
      console.log("Create Req");
      console.log(res);
      expect.soft(res.bookingid).not.toBeNull();
      bookingid = res.bookingid;
      expect.soft(res.booking.firstname).toBe(data.firstname);
      expect.soft(res.booking.lastname).toBe(data.lastname);
      expect.soft(res.booking.totalprice).toBe(data.totalprice);
      expect.soft(res.booking.depositpaid).toBe(data.depositpaid);
      expect.soft(res.booking.additionalneeds).toBe(data.additionalneeds);
    });
  });

  test("Update first name and price", async () => {
    await test.step("Update booking", async () => {
      const data = {
        firstname: "Test User",
        totalprice: 5000,
      };
      const response = await booking.partialUpdatingBooking(
        data,
        token,
        bookingid
      );
      const res = await response.json();
      expect.soft(res.firstname).toBe(data.firstname);
      expect.soft(res.totalprice).toBe(data.totalprice);
    });
  });
});
