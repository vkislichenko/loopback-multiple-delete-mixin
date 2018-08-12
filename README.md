# loopback-multiple-delete-mixin
A mixin to delete multiple data in a loopback Model by sending a list of ids.

INSTALL
=============

```
npm install --save loopback-multiple-delete-mixin
```

SERVER CONFIG
=============
Add the mixins property to your server/model-config.json:

```
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../node_modules/loopback-multiple-delete-mixin",
      "../common/mixins"
    ]
  }
}
```


MODEL CONFIG
=============

To use with your Models add the `mixins` attribute to the definition object of your model config.

```json
{
  "name": "player",
  "properties": {
    "name": "string",
    "type": "string",
  },
  "mixins": {
    "MultipleDelete": true,
  }
}
```

## USAGE

Using the `player` api URL (You have to use `Delete` Method)

`http://localhost:3000/api/players/delete?id=1&id=2&id=3`

OR

Example using restangular Custom method

```javascript

Player.customDELETE('delete', { id: [1, 2, 3] }) //where [1, 2, 3] is a list of ids

```

## LICENSE

MIT

