import { Request, Response } from 'express'
import getAllBooks from "../../controllers/book/getAllBooks.controllers";

const allBooks = async(req: Request, res: Response)=>{
    try {
        const books = await getAllBooks()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export default allBooks