const { test, expect } = require("@playwright/test");
const { Booking } = require("../service/bookings");

test.describe
  .serial("Get all bookings and search details for first bookingid", async () => {
  var id = 0;
  const booking = new Booking()
  test("Get All Booking", async () => {
    const response = await booking.getAllBookings();
    id = (await response.json())[0].bookingid;
  });

  test("Get Booking Deatsil", async () => {
    const response = await booking.getBookingByID(id);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const res = await response.json();

    //expect(res).toHaveProperty("firstname", "Josh");
    //expect(res).toHaveProperty("lastname", "Allen");
    //expect(res).toHaveProperty("additionalneeds", "super bowls");
  });
});
