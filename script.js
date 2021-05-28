const price = document.querySelector('[name=price]')
const quantity = document.querySelector('[name=quantity]')
const total = document.querySelector('.total')



const calculateTotal = () => {
    const priceValue = price.value
    const quantityValue = quantity.value
    const cost = priceValue * quantityValue
    total.innerHTML = '$' + cost
}

calculateTotal()
price.addEventListener('input', calculateTotal)
quantity.addEventListener('input', calculateTotal)