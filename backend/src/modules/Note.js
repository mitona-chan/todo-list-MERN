import mongoose from "mongoose"




// create schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{ timestamps: true} //createdAt, updatedAt
);


//model based of the schema
const Note = mongoose.model("Note", noteSchema)

export default Note