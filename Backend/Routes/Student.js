import express from 'express'
import {postInsert,getpost} from "../Controller/Student.js"
const route =express.Router()

route.post('/',postInsert)
route.get("/",getpost)
export default route