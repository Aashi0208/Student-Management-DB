import express from "express"
import mongoose from "mongoose"
import StudentRoute from "./Routes/Student.js";
import cors from 'cors'

mongoose.connect('mongodb+srv://ashasiva0208:asha0208@cluster0.8poerxc.mongodb.net/Mongodb2023');

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/message', (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.get('/cors',(req,res)=>{

    res.set('Access-Control-Allow-Origin','*');
    res.send({"msg": 'This has CORS-enabled '})
    
    })
    
app.use("/post",StudentRoute)
app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
  });