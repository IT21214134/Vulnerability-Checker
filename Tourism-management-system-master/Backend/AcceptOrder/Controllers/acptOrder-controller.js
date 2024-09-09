import acptOrders from '../Models/acptOrder-model.js'
import moment from 'moment'


export const orderAccept = async (req, res) => {
    try {
        const data = req.body;

        const Dates = req.body.Resevation_Date;
        const formatedDate = moment(Dates).format("DD/DD/YYYY")

        const orderConfirm = new acptOrders({
            Order_ID:data.Order_ID,
            Seller_ID:data.Seller_ID,
            Customer_Name:data.Customer_Name,
            Phone_number:data.Phone_number,
            Email:data.Email,
            Total_Amount:data.Total_Amount,
            No_Of_Persons:data.No_Of_Persons,
            Trip_Name:data.Trip_Name,
            Resevation_Date:formatedDate,
        })

        const result = await orderConfirm.save()
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

export const getAcptOrder = async(req,res) => {
    try{
        const details = await acptOrders.find({Seller_ID : req.body.Seller_ID})   
        if(details){
            res.status(200).json({
                message:"Fetched..!",
                payload:details
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

export const deleteacptOrder = async (req, res) => {
    let Order_ID = req.body.Order_ID
    try{

        const success = await acptOrders.findOneAndDelete({ Order_ID : Order_ID })
        if (success) {
            const newdata = await acptOrders.find({Seller_ID : req.body.Seller_ID})
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