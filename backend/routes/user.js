import { Router } from "express"
import multer from "multer"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { v4 } from "uuid"
import User from "../modules/User.js"
import bcrypt from "bcrypt"
import { getJsonWebToken, makeJsonWebToken } from "../jwt/token.js"
const router = Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/uploads/images'))
    },
    filename: (req, file, cb) => {
        cb(null, `image-${v4()}-${file.originalname}`)
    }
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpeg' && ext !== '.svg' && ext !== '.jpg') {
            cb(new Error('Only selected files or your file is not image'), false)
        }
        cb(null, true)
    }
})


router.post('/', upload.single('image'), async (req, res) => {
    const src = req.file.filename
    const { name, email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
        res.status(412).json({ message: 'The email has already been taken' })
        return
    }

    const candidateOfName = await User.findOne({ name })

    if (candidateOfName) {
        res.status(400).json({ message: 'The name has already been taken' })
        return
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = {
        name: name,
        email: email,
        src: `http://localhost:8000/routes/uploads/images/${src}`,
        password: hashPassword
    }
    const user = await User.create(newUser)
    const token = makeJsonWebToken(user._id.toString())
    res.status(201).json({ user, token })
})

router.post("/user", (req, res) => {
    console.log(req.body);
})

router.get('/', async (req, res) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.NjQzZThiYjRiODRlNjY1MzI2YmM2ZTNh.gPkYaFHgOAOhZH6efduEzy3lPwqnJrBAj-gLSifz1BA'
    const user = getJsonWebToken(token)
    console.log(user);
})

export default router