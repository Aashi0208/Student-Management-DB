import Student from "../Model/Student.js"

export const postInsert=async(req,res)=>{
    const data= req.body;
    console.log(data)
    const post= new Student ({
        name:data.name,
        age:data.age,
        rollno:data.rollno,
        phone:data.phone,
        branch:data.branch,
        gender:data.gender,
        address:data.address,
        email:data.email
    })
    try{
        await post.save();
        res.send(post)
    }
    catch (err)
    {
        console.log(err)
    }
}
export  const getpost=async(req,res)=>{
    try{
        const post= await Student.find()
        res.status(200).send(post)
    }
    catch(err)
    {
        console.log(err)
        res.send(err);
    }
}