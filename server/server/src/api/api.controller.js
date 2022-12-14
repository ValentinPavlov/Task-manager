const {
    registrUser,
    authUser,
    createTask,
    getAllTasks
} = require('./api.service')

const express = require('express');
const router = express.Router()

router.post("/user/register", async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        const registredUser = await registrUser(name, email, password)
        res.status(200).send(registredUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post("/user/auth", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        console.log(email,password);
        const loginedUser = await authUser(email, password)
        res.status(200).send({userid: loginedUser[0].id, username: loginedUser[0].name})
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post("/tasks/getall", async (req, res) => {
    try {
        const {
            userid
        } = req.body
        console.log(userid);
        const allTasks = await getAllTasks(userid)
        res.status(200).send(allTasks)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post("/tasks/getlast", async (req, res) => {
    try {
        const {
            userid
        } = req.body
        const lastTask = await getLastTask(userid)
        res.status(200).send(lastTask)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post("/tasks/create", async (req, res) => {
    try {
        const {
            taskText,
            userid
        } = req.body
        console.log(taskText,userid);
        const createdTask = await createTask(taskText,userid)
        res.status(200).send(createdTask)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post("/tasks/delete", async (req, res) => {
    try {
        const {
            userid,
            taskNumber,
        } = req.body
        const createdTask = await createTask(userid)
        res.status(200).send("task deleted success")
    } catch (error) {
        res.status(500).send(error.message)
    }
})
















router.get('/', async (req, res) => {
    try {

        res.status(200).send()
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router