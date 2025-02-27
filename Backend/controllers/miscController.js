
export const miscController = {
    isValidToken : (req , res) => {
        if (req.userid) {
            res.status(200).json({
                status : "success" ,
                isValid : true ,
                message : "the data is valid"
            }) 
        }
}
}