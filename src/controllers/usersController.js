function getUsers(app){
    app.get("/users",(req,res)=>{
        res.send("Nova rota: usuario")
    })
}
function postUsers(app){
    app.post("/users",(req,res)=>{
        res.send("Nova rota: usuario em POST")
    })
}
module.exports = {getUsers, postUsers}