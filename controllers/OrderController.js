class OrderController{
    static display = async(req,res)=>{
        try{
            res.render('orders/display')
        }
        catch(err){
            console.log(err);
        }
    } 
    static createorder = async(req,res)=>{
        try{
            res.render('orders/create')
        }
        catch(err){
            console.log(err);
        }
    } 
}
module.exports = OrderController