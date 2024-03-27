//@ts-check
const { expect, request } = require("@playwright/test");

export async function getToken() {
  const data = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  };
  const response = await postRequest("/auth", data);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  const token = responseBody.token;
  console.log("New Token is: " + token);
  return token;
}
/**
 * @param {string} endpoint
 */
export async function getRequest(endpoint) {
  const requestContext = await request.newContext();
  return await requestContext.get(endpoint);
}

/**
 * @param {string} endpoint
 */
export async function deleteRequest(endpoint, header = {}) {
  const requestContext = await request.newContext();
  const options = {};
  if (header) {
    options.headers = header;
  }
  return await requestContext.delete(endpoint, options);
}

/**
 * @param {string} endpoint
 * @param {any} data
 */
export async function postRequest(endpoint, data, param = {}, header = {}) {
  const options = {};
  if (header) {
    options.headers = header;
  }
  if (param) {
    options.params = param;
  }
  if (data) {
    options.data = data;
  }
  const requestContext = await request.newContext();
  return await requestContext.post(endpoint, options);
}

/**
 * @param {string} endpoint
 * @param {any} data
 */
export async function putRequest(endpoint, data, param = {}, header = {}) {
  const requestContext = await request.newContext();
  const options = {};
  if (header) {
    options.headers = header;
  }
  if (param) {
    options.params = param;
  }
  if (data) {
    options.data = data;
  }
  return await requestContext.put(endpoint, options);
}

/**
 * @param {string} endpoint
 * @param {any} data
 */
export async function patchRequest(endpoint, data, param = {}, header = {}) {
  const requestContext = await request.newContext();
  const options = {};
  if (header) {
    options.headers = header;
  }
  if (param) {
    options.params = param;
  }
  if (data) {
    options.data = data;
  }
  return await requestContext.patch(endpoint, options);
}
