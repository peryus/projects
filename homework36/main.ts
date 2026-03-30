import { sumArray, createUser, OrderStatus, getOrderStatus } from './script.js'

console.log(sumArray([1, 2, 3, 4])) // 10
console.log(sumArray([])) // 0

console.log(createUser('Анна', 25, true))
console.log(createUser('Іван', 30))

console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus(OrderStatus.Cancelled))