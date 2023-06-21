import { SECRET_DB_URL } from "$env/static/private";
import { error } from "@sveltejs/kit";

class DB {
  constructor() {
    this.req = {};
    this.time = new Date().getTime().toString();
  }

  setToken(token) {
    this.req = { ...this.req, token };
  }

  async fetchData() {
    const url = new URL(SECRET_DB_URL);
    url.searchParams.set("req", JSON.stringify(this.req));
    url.searchParams.set("time", this.time);
    // console.log("req->", this.req);

    try {
      const res = await fetch(url);
      const response = await res.json();

      if (response?.type && response?.type == "error") {
        const { status, type, ...err } = response;
        throw error(status || 400, err);
      }

      // console.log("respon->", response);
      return response;
    } catch (err) {
      console.log("err->", err.message || JSON.stringify(err, null, 2));
      throw error(err.status || 500, { message: err.message, ...err.body });
    }
  }

  collection(collection) {
    this.req = { ...this.req, collection };
    return this;
  }

  async login(username, option, callback) {
    this.req = {
      ...this.req,
      method: "login",
      username,
      ...option,
    };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async getToken(id, option, callback) {
    this.req = {
      ...this.req,
      method: "getToken",
      id,
      ...option,
    };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async logout(id, option, callback) {
    this.req = {
      ...this.req,
      method: "logout",
      id,
      ...option,
    };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async read(option, callback) {
    this.req = { ...this.req, method: "read", ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async readOne(id, option, callback) {
    this.req = { ...this.req, method: "readOne", id, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async createOne(body, option, callback) {
    this.req = { ...this.req, method: "createOne", body, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async updateOne(id, body, option, callback) {
    this.req = { ...this.req, method: "updateOne", id, body, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async deleteOne(id, option, callback) {
    this.req = { ...this.req, method: "deleteOne", id, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }
}

export const db = new DB();
