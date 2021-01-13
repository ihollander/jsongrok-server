# jsongrok-server

[ngrok](https://ngrok.com/) is a great tool that allows you to expose your local
server to the public internet.

[json-server](https://github.com/typicode/json-server) is a great tool that lets
you quickly prototype a REST API from a JSON file.

[jsongrok-server] is a mediocre tool that combines the power of those two tools
and lets you quickly expose your local json server with one easy command!

## Usage

You can use jsongrok-server to create a server from `.json` file on your
machine:

```sh
npx jsongrok-server db.json
```

You can also use jsongrok-server to create a server from a `.json` file
by providing a URL:

```sh
npx jsongrok-server https://raw.githubusercontent.com/ihollander/jsongrok-server/master/db.json
```
