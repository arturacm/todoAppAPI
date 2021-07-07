 function getBacklog(app){
    app.get("/backlog",(req,res)=>{
    res.send("Nova rota: backlog em GET")
})
}
function postBacklog(app){
    app.post("/backlog",(req,res)=>{
    res.send("Nova rota: backlog em POST")
})
}

module.exports = { getBacklog, postBacklog }