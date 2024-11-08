const express = require('express')
require('./db/Config')
const cors=require('cors');
const User = require('./db/User');

const app= express();
const CompanyPdetails=require("./db/CompanyInfo")
const JobSpecication=require("./db/JobSpecification")
const CompanyCandidates=require("./db/AddCompanyCandidate")
// const Candidateinfo=require("./db/CandidateInfo")
const CandidateReview=require("./db/CandidateReview")
const CandidateInfodb=require("./db/CandidteInfodb")
app.use(express.json());
app.use(cors());


{/**the below codes are for NextGen-Hore Backend */}

//this code is to take the personl info of te company
app.post('/company-info',async(req,resp)=>{
    let compnaypdetails=new CompanyPdetails(req.body)
    let result=await compnaypdetails.save();
    resp.send(result)
})


//this code is to intake the job specification of the company
app.post('/add-jobspecification',async(req,resp)=>{
    let jobspecify=new JobSpecication(req.body)
    let result=await jobspecify.save();
    resp.send(result)
})

//this code is to intake the company candidate details
app.post('/add-companycandiadte',async(req,resp)=>{
    let companycandidates=new CompanyCandidates(req.body)
    let result=await companycandidates.save();
    resp.send(result)
})


// this is to take input of information about the seniors
app.post('/add-seniorInfo',async(req,resp)=>{
    let candidateinfo=new CandidateInfodb(req.body)
    let result=await candidateinfo.save();
    resp.send(result)
})


//the below code is to show the freshers data to the senior developers
app.get('/freshers',async(req,resp)=>{
    let companycandidates=await CompanyCandidates.find();
    if(companycandidates.length>0){
        resp.send(companycandidates)
    }else{
        resp.send({candidates:"No candidates found"})
    }
})

//this code is to take the input reviews from the interview taker to the freshers
app.post('/add-review',async(req,resp)=>{
    let candireview=new CandidateReview(req.body)//Book here is the model name
    let result=await candireview.save();
    resp.send(result)
})

//this code tis to take the information from the senior about themselves
app.post('/add-seniorInfo',async(req,resp)=>{
    let candidateinfo=new CandidateInfodb(req.body)//Book here is the model name
    let result=await candidateinfo.save();
    resp.send(result)
})


//this code is to show the reviews provided by the interview taker
app.get('/overview',async(req,resp)=>{
    let candidatereview=await CandidateReview.find();
    if(candidatereview.length>0){
        resp.send(candidatereview)
    }else{
        resp.send({candidate:"No reviews found"})
    }
})
//filtering Domain
app.get("/search/:key",async (req,resp)=>{
    let result=await CompanyCandidates.find({
        "$or":[
            {applicantDomain:{$regex:req.params.key}}
        ]
    })
    resp.send(result)
})

//past domain to show to company the intervied candidate even before the registering part
app.get("/searchs/:key",async (req,resp)=>{
    let result=await CandidateReview.find({
        "$or":[
            {domain:{$regex:req.params.key}}
        ]
    })
    resp.send(result)
})

app.get('/candidateDetails',async(req,resp)=>{
    let candidateinfo=await CandidateInfodb.find();
    if(candidateinfo.length>0){
        resp.send(candidateinfo)
    }else{
        resp.send({candidate:"No Aluminis found"})
    }
})



















app.post("/register",async(req,resp)=>{//used in the signup page
    let user=new User(req.body);//User here is the model
    let result=await user.save();
    // console.log(req.body) use this to see the output
    resp.send(result)
})

app.post("/login",async (req,resp)=>{
    if(req.body.password&&req.body.email){
        let user=await User.findOne(req.body).select("-password");// This is a common security practice because passwords should not be sent to clients or logged unnecessarily.
        if(user){
            resp.send(user)
        }else{
            resp.send({result:"No User Found"})
        }
    }else{
        resp.send({result:"no main user found"})
    }
})

app.post('/add-book',async(req,resp)=>{
    let book=new Book(req.body)//Book here is the model name
    let result=await book.save();
    resp.send(result)
})

app.get('/books',async(req,resp)=>{
    let books=await Book.find();
    if(books.length>0){
        resp.send(books)
    }else{
        resp.send({book:"No books found"})
    }
})

//the below two node code is for the updateBook feature
app.get("/book/:id",async (req,resp)=>{//this particular code is to find the particular book
    let result=await Book.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({mesaage:"No Book found"})
    }
})

app.put("/book/:id",async (req,resp)=>{//this code is to update the book contents,updateOne accepts 2 values
    let result=await Book.updateOne(
        {_id:req.params.id},
        {$set:req.body}// $set operator to update the fields in the document with the values from req.body.
    )
    resp.send(result)
})

app.delete("/book/:id",async(req,resp)=>{
    let result=await Book.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.listen(5000)