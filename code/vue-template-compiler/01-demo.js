const compiler = require('vue-template-compiler')

let tag = `<div>
                    <ul> 
                        <li v-if="true">11</li>
                        <li>22</li>
                    </ul>
            </div>`

let result = compiler.compile(tag)

console.log(result)