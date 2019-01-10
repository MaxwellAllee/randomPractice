var db = require("../models");
var request = require("request");
var express = require("express")

module.exports = function (app,io) {
    app.post("/api/change", function(req, res){
        console.log(req.body.rand)
        db.Bar.update(
            {name:req.body.rand},
            {where:{
                id: 1
            }}
        ).then(function(){
         sendChange(1)
         res.sendStatus(200);
        }).catch(function (err) {
            console.log(err);
            res.json(err);
          });

    })
    function sendChange(updated){
        console.log(updated)
        db.Bar.findOne({
            where: {id:updated}
        }).then( function(updates){
            io.emit('chat message', updates);
        }
            
        )
    }
};