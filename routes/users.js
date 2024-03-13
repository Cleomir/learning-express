const express = require("express");
const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("GET /api/users");
});

router.get("/users/:id", (req, res) => {
  res.send(`GET /api/users/${req.params.id}`);
});

router.post("/users", (req, res) => {
  res.send("POST /api/users");
});

router.patch("/users/:id", (req, res) => {
  res.send(`PATCH /api/users/${req.params.id}`);
});

router.delete("/users/:id", (req, res) => {
  res.send(`DELETE /api/users/${req.params.id}`);
});

module.exports = router;
