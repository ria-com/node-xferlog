node-xferlog
============
xferlog parser 0.0.1

example
=======

**Parse one line from xferlog file

```javascript
var xferlog = require('xferlog'),
    line = 'Fri Jul 17 15:17:06 2015 1 10.1.20.112 13335 /storage/resized1/img/archive/photos/auto/photo/13460/1346091/134609123/134609123bl.jpg b _ i r img ftp 0 * c';
console.log(xferlog(line));
```
