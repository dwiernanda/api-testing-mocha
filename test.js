var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://swapi.co/api";
var util = require("util");

 describe('API test', function(){
    it('API test',function(done){
        request.get({url: baseUrl + '/people/1/'},
        function(error, respon, body){
            var bodyObj = JSON.parse(body);
            expect(bodyObj.name).to.equal("Luke Skywalker");
            expect(bodyObj.hair_color).to.equal("blond")
            expect(respon.statusCode).to.equal(200);
            console.log(body);
            done();
        });
    });
 });
 
    
    
 

