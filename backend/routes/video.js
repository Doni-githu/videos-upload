import { Router } from "express";
import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url"
import { v4 } from "uuid"

const router = Router()


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const storageVideo = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '/uploads/videos'))
    },
    filename: (req, file, callback) => {
        callback(null, `video-${v4()}-${file.originalname}`)
    },
})

const upload = multer({
    storage: storageVideo,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mkv' && ext !== '.mp4') {
            return cb(new Error("Only videos are allowed"), true)
        }
        cb(null, true)
    }
})


router.post('/add', upload.any(), (req, res) => {
    const file = req.files[0].filename
    res.status(200).json({ message: 'Success', src: 'http://localhost:8000/routes/uploads/videos/' + file })
})


export default router