import jwt from "jsonwebtoken"

const makeJsonWebToken = userId => {
    const token = jwt.sign(userId, process.env.SECRET_KEY)
    return token
}
const getJsonWebToken = token => {
    return jwt.decode(token, process.env.SECRET_KEY, {complete: true})
}
export {
    makeJsonWebToken,
    getJsonWebToken
}