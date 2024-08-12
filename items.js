const express = require('express');
const router = express.Router();




let items = [
    {
        id:1,
        name: 'margiita',
        topping:'olives',
        crust: 'Soft',
        price:499
    },
    {
        id:2,
        name: 'Chilly pepper',
        topping:'onions',
        crust: 'Crispy',
        price:699
    },
    {
        id:3,
        name: 'Pepperoni',
        topping:'mushroom',
        crust: 'Crispy',
        price:599
    }
]





router.get("/", (req,res)=>{
    res.send(items);
})






router.get("/:id" , (req,res)=>{
    const id = req.params.id;
    filtered_items = items.filter(item => item.id == id);
    res.send(filtered_items);
})






router.delete("/:id" , (req,res)=>{
    const id = req.params.id;
    items = items.filter(item => item.id != id);
    res.send(items);
})


router.put("/:id" , (req,res)=>{
    const id = req.params.id;
    let filtered_users = items.filter((item=>item.id == id));
    if(filtered_users.length>0){
        let filtered_user = filtered_users[0];
        let name = req.query.name;
        let topping = req.query.topping;
        let crust = req.query.crust;
        let price = req.query.price;
        if(name){
            filtered_user.name = name;
        }
        if(topping){
            filtered_user.topping = topping;
        }
        if(crust){
            filtered_user.crust = crust;
        }
        if(price){
            filtered_user.price = price;
        }
        items = items.filter(item => item.id != id);
        items.push(filtered_user);
        res.send(`item with the id ${id} updated`);
    }else{
        res.send("Unable to find the item");
    }


})






router.post("/" , (req,res)=>{
    items.push({
        "name": req.query.name,
        "topping":req.query.topping,
        "crust":req.query.crust,
        "price":req.query.price
    });
    res.send("The item has been added...");
})






module.exports = router;
