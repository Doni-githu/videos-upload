import { Router } from "express";
import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url"
import { v4 } from "uuid"

const router = Router()


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, `video-${v4()}-${file.originalname}`)
    },
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mkv' && ext !== '.mp4') {
            return cb(new Error("Only videos are allowed"), true)
        }
        cb(null, true)
    }
})


router.post('/add', upload.any('videos'), (req, res) => {
    console.log(req.body.name);
    res.status(200).json({ message: 'Success' })
})


export default router