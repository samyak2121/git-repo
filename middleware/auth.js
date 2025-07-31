const auth = (req,res,next) =>{

    let password = 123;
    let authorization = password === 1323;

    if(!authorization){
        res.status(200).send("maan this is wrong ")       
    }
    else {
        next();
    }
}



const user =  (req,res,next) =>{

    let password = 123;
    let authorization = password === 1283;

    if(!authorization){
        res.status(403).send("user not found")       
    }
    else {
        next();
    }
}

module.exports = {auth,user}