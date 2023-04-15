import { Schema, model } from "mongoose";

const UploadSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    src: { type: String, required: true }
})

const Upload = model('Upload', UploadSchema)
export default Upload