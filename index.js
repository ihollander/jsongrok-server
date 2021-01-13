#!/usr/bin/env node

const fetch = require("node-fetch");
const path = require("path");
const ngrok = require("ngrok");
const jsonServer = require("json-server");

(async () => {
  const file = process.argv[2];
  if (!file) {
    console.error("Must provide a json file.");
    return;
  }

  let remoteSource;
  if (file.match(/^https?:/)) {
    try {
      const response = await fetch(file);
      remoteSource = await response.json();
    } catch (err) {
      console.error("Error fetching json. Check the URL you provided.");
      return;
    }
  }

  const server = jsonServer.create();
  const router = remoteSource
    ? jsonServer.router(remoteSource)
    : jsonServer.router(path.join(__dirname, file));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);
  server.listen(4000, async () => {
    const url = await ngrok.connect(4000);
    console.log("Server is running:", url);
  });
})();
