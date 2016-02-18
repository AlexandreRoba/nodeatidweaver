var mocha = require("mocha");
var chai = require("chai");
var supertest = require("supertest");

var expect = chai.expect;

describe("The Homepage",function(){
    var app = require("../server");
    var request = require("supertest").agent(app.listen());
    
    it("should return a status 200",function(done){
        request.get("/")
        .expect(200)
        .end(done);
    });
    
    it("should return Hello world!", function(done){
        request.get("/")
        .expect("Hello world!")
        .end(done);
    })
})
