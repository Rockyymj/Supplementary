describe("demo",function(){
    describe("login",function(){
        before(function(){
            console.log("BeforeTest")
        })

        after(function(){
            console.log("AfterTest")
        })

        beforeEach(function(){
            console.log("EachTestBefore")
        })

        afterEach(function(){
            console.log("EachTestAfter")
        })

        context("conversation1",function(){
            it("iphone",function(){
                console.log()
            })

            it("Huawei",function(){
                console.log()
            })
        })
    })
})
