const express = require('express')
const router = express.Router()
const { createUser, login } = require('../Controller/auth-controller');
const signupSchema = require('../validator/auth-validator')
const validate = require('../Middlewares/validate-middleware')
const loginSchema = require('../validator/auth-login-validator')

router.route('/createUser').post(validate(signupSchema), createUser)
router.route('/login').post(validate(loginSchema),login)



module.exports = router;















// router.post('/createUser', async (req, res, next) => {

//     try {
//         const { name, email, password } = req.body
//         // console.log(req.body)

//         const userExist = await User.findOne({ email })

//         if (userExist) {
//             return res.status(400).json({ message: "User Already Exist..." })
//         }

//         const salt = await bcrypt.genSalt(10)
//         const secpass = await bcrypt.hash(req.body.password, salt)

//         const user = await User.create({
//             name, email, password: secpass
//         })

//         res.status(201).json({
//             msg: "Create Account Successfully...",
//             token: await user.generateToken(),
//             userId: user._id.toString(),
//         })
//     } catch (error) {
//         // return res.status(500).json("Internal server Error...")
//         next(error)
//     }
// })


// router.post('/login', async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         const userExist = await User.findOne({ email })

//         if (!userExist) {
//             return res.status(400).json("Invalid Credentails")
//         }

//         const user = await bcrypt.compare(password, userExist.password)

//         if (user) {
//             res.status(201).json({
//                 msg: "Login Successfully",
//                 token: await userExist.generateToken(),
//                 userId: userExist._id.toString()
//             })
//         } else {
//             return res.status(400).json("Invalid Email & Password")
//         }

//     } catch (error) {
//         // return res.status(500).json("Internal server Error...")
//         next(error)
//     }
// })