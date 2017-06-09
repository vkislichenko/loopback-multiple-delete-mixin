# loopback-multiple-delete-mixin
A mixin to delete multiple data in a loopback Model by sending a list of ids.

## INSTALL

```
npm install --save loopback-multiple-delete-mixin
```

###### you can enable mixin by editing `server.js`:

In your server/server.js file add the following line before the boot(app, __dirname); line.

```js
...
var app = module.exports = loopback();
...
// Add multiple-delete-mixin to loopback
require('loopback-multiple-delete-mixin')(app);

boot(app, __dirname, function(err) {
  'use strict';
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
```


## CONFIG

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

