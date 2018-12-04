var expect = require("chai").expect;

var request = require("superagent");
decribe('anscy demo',function(){
    it('get info',function(done){
        request
            .get('apiurl')
            .end(function(err,res){
                except(res).to.be.an('object');
                done();
            })
    })
})
