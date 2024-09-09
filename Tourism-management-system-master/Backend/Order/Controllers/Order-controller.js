import order from '../Models/revOrders-model.js'

export const newOrder = async (req, res) => {
    console.log(req.body)

    try {
        const prefix = 'OID'
        const OID = (prefix + Date.now());


        const data = req.body;
        const neworder = new order({
            Order_ID:OID,
            Seller_ID:data.Seller_ID,
            Customer_Name:data.Customer_Name,
            Phone_number:data.Phone_number,
            Email:data.Email,
            Total_Amount:data.Total_Amount,
            No_Of_Persons:data.No_Of_Persons,
            Trip_Name:data.Trip_Name,
            Resevation_Date:data.Resevation_Date
        })

        const result = await neworder.save()
        if(result){
            res.status(201).json({
                message: "Data adding successfull..!",
                payload: result
            })
        }else {
            res.status(401).json({
              message: "Somthing Went Wrong In data adding..!"
            })
          }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Somthing Went Wrong..!",
            error: error
        })
    }
}


export const getOrder = async(req,res) => {
    try{
        const post = await order.find({Seller_ID : req.body.Seller_ID})   
        if(post){
            res.status(200).json({
                message:"Fetched..!",
                payload:post
            })
        }else{
            res.status(400).json({
                message:"error..!"
            })
        }
    }catch(error){
        res.status(500).json({
            message:"server crashed..!"
        })
    }
}

export const deleteOrder = async (req, res) => {
    let Order_ID = req.body.Order_ID
    try{

        const success = await order.findOneAndDelete({ Order_ID : Order_ID })
        if (success) {
            const newdata = await order.find({Seller_ID : req.body.Seller_ID})
            res.status(200).json({
                message: "Delete successfull..!",
                payload:newdata
            })
    
        } else {
            res.status(400).json({
                message: "Delete unsuccessfull..!"
            })
        }
    }catch(error){
        res.status(500).json({
            message:"server error..!"
        })
    }
}


export const newOrderFirst = async (req, res) => {
    console.log(req.body)

    try {
        const prefix = 'OID'
        const OID = (prefix + Date.now());


        const data = req.body;
        const neworder = new order({
            Order_ID:OID,
            Seller_ID:data.Seller_ID,
            Customer_Name:data.Customer_Name,
            Phone_number:data.Phone_number,
            Email:data.Email,
            No_Of_Persons:data.No_Of_Persons,
            Resevation_Date:data.Resevation_Date
        })

        const result = await neworder.save()
        if(result){
            res.status(201).json({
                message: "Data adding successfull..!",
                payload: result
            })
        }else {
            res.status(401).json({
              message: "Somthing Went Wrong In data adding..!"
            })
          }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Somthing Went Wrong..!",
            error: error
        })
    }
}
