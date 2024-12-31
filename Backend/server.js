const express = require('express');

const adminRouter = require("./routes/admin.js")


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected! to the database'));

app.use(cookieParser())
app.use(express.json());

app.get("/" , (req , res )=>{
    res.status(200).json("hello everyone");
})


emailreg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
app.post("/login" , async  (req , res )=>{
    let {email , name , password} = req?.body ;
    if(!emailreg.test(email)) {
        res.status(400).json("invalid email");
    }
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password , salt, async function(err, hash) {
            const data = new User ({
                name ,
                email , 
                password : hash,
            })
        const saveduser = await data.save()
        var token = jwt.sign({ email: email }, 'secretcode');
         // Set JWT as a cookie in the response
        res.cookie('token', token, {
            httpOnly: true,      
            secure: true,        
            sameSite: 'strict',  
            maxAge: 60 * 60 * 1000  
        } );
        res.status(200).json(saveduser);
        });
    });

})  

app.use("/api/v1/user")
app.use("/api/v1/admin" , adminRouter)


app.listen(3000 , ()=>{
    console.log("connected at port 3000");
})
