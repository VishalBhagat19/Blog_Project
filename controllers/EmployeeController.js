class EmployeeController{
    static home = async(req,res)=>{
        res.render('home')
    }
    static about = async(req,res)=>{
        res.render('about')

    }
    static ourteam = async(req,res)=>{
        res.render('ourteam')
    }
    static contactus = async(req,res)=>{
        res.render('contactus')
    }
    static login = async(req,res)=>{
        res.render('login')
    }
    
}
module.exports = EmployeeController