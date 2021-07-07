function getHistory(app){
    app.get("/history",(req,res)=>{
        res.send("Nova rota: historico")
    })
    
}
function postHistory(app){
    app.post("/history",(req,res)=>{
        res.send("Nova rota: historico em POST")
    })
    
}

module.exports = {getHistory, postHistory}