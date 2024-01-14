export const AmountToPay = (cart) => {
    if(cart.length<=0){
        return 0
    }
    let total = 0;
    let taxes = totalTaxes(cart)
    let shipping = totalShippingCharge(cart)
    try {
        cart.map((c)=>{
            total=total+(c.price*c.quantity)+taxes+shipping
        })
        return total
    } catch (error) {
        return 0
    }
}
export const totalCartValue = (cart) => {
    if(cart.length<=0){
        return 0
    }
    let total = 0;
    try {
        cart.map((c)=>{
            total=total+(c.price*c.quantity)
        })
        return total
    } catch (error) {
        return 0
    }
}

export const totalShippingCharge = (cart) => {
    let shippingCharge = 0;
    try {
        cart.map((p)=>{
            shippingCharge= shippingCharge+60
        })
        return shippingCharge
    } catch (error) {
        return 0;
    }
}

export const totalTaxes = (cart) => {
    let totalTax = 0;
    try {
        cart.map((p)=>{
            totalTax= totalTax+(1/100*(Number(p.price)*Number(p.quantity)))
        })
        return totalTax
    } catch (error) {
        return 0
    }
}