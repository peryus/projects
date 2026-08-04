import { isProductionMode } from './config.js'
import { getUserGreeting } from './greeting.js'



const productionMode = isProductionMode()
const greeting = getUserGreeting()
console.log(`Production mode: ${productionMode}`)
console.log(greeting)