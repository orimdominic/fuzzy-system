"use strict";

const express = require("express");
const app = express();
const axios = require("axios").default;
const ErrorResponse = require('./ErrorResponse')

app.use(express.json());
app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,");
  next();
});

app.get("/api/rates", async (req, res) => {
  const { base, currency } = req.query;
  if (!base || !currency) {
  	const errResp = new ErrorResponse(400, 'Bad request. "base" or "currency" not included')
    return res
      .status(errResp.status)
      .send(errResp.message);
  }
  try {
    const { data } = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`
    );
    return res.json({
      results: { ...data },
    });
  } catch (err) {
  	const errResp = new ErrorResponse(err.response.status, err.response.data.error)
        return res
      .status(errResp.status)
      .send(errResp.message);
  }
});

module.exports = app;
