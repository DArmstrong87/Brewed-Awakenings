import { getProducts, getEmployees, getOrders } from "./database.js"


// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()

// Function whose responsibility is to find the product for an order
const findProduct = (orders, products) => {
    let orderProduct = ''

    for (const product of products) {
        if (product.id === orders.productId) {
            orderProduct = product
        }
    }

    return orderProduct             //returns product array of id, name, price if product id matches order id
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (orders, employees) => {
    let orderEmployee = ''

    for (const employee of employees) {
        if (employee.id === orders.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee            // returns employee array if emplyoyee id matches order employee id
}

export const Orders = () => {
    let html = ""
    html += "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}