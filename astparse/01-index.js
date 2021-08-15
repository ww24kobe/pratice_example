const { parse, print } = require("recast");

let source = 'var a=1; let c = 2;console.log( a + b );function sum(a,b){return a + b;}'
// console.log( parse(source) );
// console.log( print(parse(source)).code );

const recast = require("recast");
// console.log(recast.print(recast.parse(source)).code);

let source2 = `import $ from 'jquery'`;
console.log(parse(source2));

/**
 * online: https://astexplorer.net/
 * 
 * 2.3 .1 AST 工作流

 1. Parse（ 解析） 将源代码转换成抽象语法树， 树上有很多的 estree 节点 
 2. Transform（ 转换） 对抽象语法进行转换

 3. Generate（ 代码生成） 将上一步经过转换过的抽象语法树生成新的代码
 */

