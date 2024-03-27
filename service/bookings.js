//@ts-check
const {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} = require("../util/api");
const { getToken } = require("../util/api");
exports.Booking = class Booking {
  
  constructor() {}

  async getAllBookings() {
    return await getRequest("/booking");
  }

  /**
   * @param {Number} id
   */
  async getBookingByID(id){
    return await getRequest(`/booking/${id}`);
  }

  /**
   * @param {Number} id
   */
  async deleteBooking(id){
    const token = await getToken();
    const header = {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`,
    };
    return await deleteRequest(`/booking/${id}`, header);
  }        

  /**
   * @param {JSON} data
   */
  async createBooking(data) {
    return await postRequest("/booking", data);
  }

  /**
   * @param {any} data
   * @param {Number} [bookingid]
   */
  async updateBooking(data, bookingid) {
    const token = await getToken();
    const header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: `token=${token}`,
    };
    return await putRequest(`/booking/${bookingid}`, data, {}, header);
  }

  /**
   * @param {any} data
   * @param {any} token
   * @param {Number} bookingid
   */
  async partialUpdatingBooking(data, token, bookingid) {
    const header = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: `token=${token}`,
    };
    return await patchRequest(`/booking/${bookingid}`, data, {}, header);
  }

  /**
   * @param {string} [token]
   */
  setToken(token){
    this.token = token
  }

  getToken(){
    return this.token
  }
};
