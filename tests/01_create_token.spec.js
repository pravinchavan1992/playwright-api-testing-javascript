const { test } = require("@playwright/test");
const { getToken } = require("../util/api");


test("Create Auth Token", async () => {
  const token = await getToken();
  console.log(token)
});
