const express = require('express')
const FrontController = require('../Controllers/FrontController')
const AdminController = require('../Controllers/admin/AdminController')
const route = express.Router()
const checkAuth = require('../middleware/auth')
const CourseController = require('../Controllers/CourseController')
const ContactContoller = require('../Controllers/ContactController')
const adminrole = require('../middleware/adminrole')
const isLogin = require('../middleware/islogin')

//Frontcontroller routing
route.get('/home', checkAuth, FrontController.home) //path
route.get('/about', checkAuth, FrontController.about)
route.get('/', isLogin, FrontController.login)
route.get('/register', FrontController.register)
route.get('/contact', checkAuth, FrontController.contact)


// insert data
route.post('/insertStudent', FrontController.studentInsert)
// verifylogin
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)
// profile
route.get('/profile', checkAuth, FrontController.profile)
route.post('/changePassword', checkAuth, FrontController.changePassword)
route.post('/updateProfile', checkAuth, FrontController.updateProfile)


// AdminController
route.get('/admin/dashboard', checkAuth, adminrole('admin'), AdminController.dashboard)
route.get('/admin/studentDisplay', checkAuth, adminrole('admin'), AdminController.studentDisplay)
route.get('/admin/studentView/:id', checkAuth, adminrole('admin'), AdminController.studentView)
route.get('/admin/studentDelete/:id', checkAuth, adminrole('admin'), AdminController.studentDelete)
route.get('/admin/studentEdit/:id', checkAuth, adminrole('admin'), AdminController.studentEdit)
route.post('/admin/studentUpdate/:id', checkAuth, adminrole('admin'), AdminController.studentUpdate)
route.post('/admin/insertStudent', checkAuth, adminrole('admin'), AdminController.studentInsert)
route.get('/admin/courseDisplay', checkAuth, adminrole('admin'), AdminController.courseDisplay)
route.post('/update_status/:id', checkAuth, adminrole('admin'), AdminController.update_status)
route.get('/admin/profile', checkAuth, adminrole('admin'), AdminController.profile)
route.post('/admin/updateProfile', adminrole('admin'), checkAuth, AdminController.updateProfile)
route.get('/admin/password', checkAuth, adminrole('admin'), AdminController.password)
route.post('/admin/changePassword', checkAuth, adminrole('admin'), AdminController.changePassword)



// coursecontroller
route.post('/course_insert', checkAuth, CourseController.courseinsert)
route.get('/coursedisplay', checkAuth, CourseController.coursedisplay)
route.get("/courseView/:id", checkAuth, CourseController.courseView)
route.get("/courseEdit/:id", checkAuth, CourseController.courseEdit)
route.post("/courseUpdate/:id", checkAuth, CourseController.courseUpdate)
route.get("/courseDelete/:id", checkAuth, CourseController.courseDelete)

// contactcontoller
route.post('/contact_insert', checkAuth, ContactContoller.contactinsert)
route.get('/admin/contactdisplay', checkAuth, adminrole('admin'), AdminController.contactdisplay)

// forget password
route.post('/forgot_Password', FrontController.forgetPasswordVerify)
route.get('/reset-password', FrontController.reset_Password)
route.post('/reset_Password1', FrontController.reset_Password1)

// verify email
route.get('/verify', FrontController.verifyMail)


module.exports = route  