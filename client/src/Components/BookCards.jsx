import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect,useState } from "react";
import { allBooksApi, eventApi } from "../api/apiConnections/apiConnection";
   
  export function BookCard() {
    const[books,setBooks]=useState([])
    useEffect(()=>{
        getAllBooks()
    },[])

    const getAllBooks=async()=>{
        const response=await allBooksApi()
        console.log(response);
        setBooks(response)
    }

    const handleEventChanger=async(currEvent,id)=>{
        console.log(currEvent,id);
        const response=await eventApi(currEvent,id)
console.log(response,'ij');
        const remainingBooks=books.filter((book)=>book._id!==id)
       


        setBooks([...remainingBooks,response])
    }
    return (
        <div className="flex  flex-wrap gap-3">
            {books.map((eachBook)=>{
                return (
      <Card key={eachBook._id} className="mt-6 w-80">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           Book ID : {eachBook.book_id}
          </Typography>
          <Typography className="flex flex-col">
            <div>
<Typography>
     Member ID : 

            {eachBook.member_id}
</Typography>
            </div>
            <div>
            <Typography>
DATE : 
            {eachBook.date}
</Typography>

            </div>

          </Typography>
        </CardBody>
        <CardFooter className="pt-0" >
            {eachBook.eventtype=='checkout'? <Button onClick={()=>handleEventChanger('return',eachBook._id)}>Check Out</Button>: <Button onClick={()=>handleEventChanger('checkout',eachBook._id)}>Return</Button>}
        </CardFooter>
      </Card>

                )
            })}

        </div>
    );
  }