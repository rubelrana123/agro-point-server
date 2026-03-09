import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"

export const createToken = (payload: JwtPayload, secret: string, expiresIn: string) => {
    const token = jwt.sign(payload, secret, {
        expiresIn
    } as SignOptions)

    return token
}

export const verifyToken = (token: string, secret: string) => {
   console.log(token, secret , "from jwt.ts")
    const verifiedToken = jwt.verify(token, secret);
console.log(verifiedToken, "verIFIED TOKEN FROM JWT.TS")
    return verifiedToken
}