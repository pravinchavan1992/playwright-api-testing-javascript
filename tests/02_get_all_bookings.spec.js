const { test, expect } = require("@playwright/test");
const { Booking } = require("../service/bookings")

test("Get All Booking", async ({}) => {
  const response = await new Booking().getAllBookings();
  console.log(await response.json())
  expect (response.ok()).toBeTruthy()
  expect(response.status()).toBe(200);
});
 