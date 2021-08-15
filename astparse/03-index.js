var MagicString = require('magic-string');
var s = new MagicString('problems = 99');

console.log( s.overwrite(0, 8, 'answer') );
console.log( s.toString() ); // 'answer = 99' 

 s.overwrite(11, 13, '42'); // character indices always refer to the original string
console.log( s.toString() ); // 'answer = 42'

 s.prepend('var ').append(';'); // most methods are chainable
 console.log( s.toString() ); // 'var answer = 42;'

var map = s.generateMap({
    source: 'source.js',
    file: 'converted.js.map',
    includeContent: true
}); // generates a v3 sourcemap

require('fs').writeFileSync('converted.js', s.toString());
require('fs').writeFileSync('converted.js.map', map.toString());

/*  
 https://www.npmjs.com/package/magic-string
*/