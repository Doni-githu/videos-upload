import { model, Schema } from "mongoose"
const VideoSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    src: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String, required: true}
})

const Video = model('Video', VideoSchema)

export default Video