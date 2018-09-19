describe("using destructureing", function(){
    it("can destructure array", function(){
     

        function doWork(){
            return [1,2,3];
        }

        let [,x,y,z]=doWork();

        expect(x).toBe(2);
        expect(y).toBe(3);
        expect(z).toBeUndefined();
    });

    it("can destructure object", function(){
        function doWork(){
            return {
                fname : "Scott",
                lname : "Allen",
                handles:{
                    twitter : "odetocode",
                    fb : "facebook"
                }
               
            };
        };

        let{fname:n, handles : {twitter:t, fb : f}}=doWork();
        expect(t).toBe("odetocode");
        expect(n).toBe("Scott");
        expect(f).toBe("facebook");
    });

    it("works with pararmeter",function(){
        function doWork(url, {data,cache, header}){   
            return data;
        }

        let r = doWork("google.com",{data : "test", cache : false});

        expect(r).toBe("test");
    });
  });