console.log('#19. TypeScript homework example file');
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
function createUser(name, age, isActive = true) {
    return {
        name,
        age,
        isActive
    };
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return 'Замовлення очікує на обробку';
        case OrderStatus.Shipped:
            return 'Замовлення було відправлено';
        case OrderStatus.Delivered:
            return 'Замовлення доставлено';
        case OrderStatus.Cancelled:
            return 'Замовлення скасовано';
        default:
            throw new Error('Невідомий статус замовлення');
    }
}
export { sumArray, createUser, OrderStatus, getOrderStatus };
//# sourceMappingURL=script.js.map