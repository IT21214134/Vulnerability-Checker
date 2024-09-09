import history from '../Models/triphistory-model.js'

export const HistoryAdd = async (req, res) => {
    console.log(req.body)

    try {
        const data = req.body;
        const newhistory = new history({
            Order_ID:data.Order_ID,
            Seller_ID: data.Seller_ID,
            Customer_Name:data.Customer_Name,
            Phone_number:data.Phone_number,
            Email:data.Email,
            Total_Amount:data.Total_Amount,
            No_Of_Persons:data.No_Of_Persons,
            Trip_Name:data.Trip_Name,
            Resevation_Date:data.Resevation_Date,

        })

        const result = await newhistory.save()
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

export const getHistory = async(req,res) => {
    try{
        const details = await history.find({Seller_ID : req.body.Seller_ID})   
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