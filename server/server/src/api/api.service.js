const {registrUserDB,authUserDB,createTaskDB,getAllTasksDB} = require('./api.repository')

const registrUser = async (name, email, password) => {
    const registredUserDB = await registrUserDB(name, email, password)
    return registredUserDB
}
const authUser = async (email, password) => {
    const authedUserDB = await authUserDB(email, password)
    return authedUserDB
}
const getAllTasks = async (userid) => {
    const AllTasksDB = await getAllTasksDB(userid)
    return AllTasksDB
}

const createTask = async (taskText,userid) => {
    const createdTaskDB = await createTaskDB(taskText,userid)
    return createdTaskDB
}


module.exports = {registrUser,authUser,createTask,getAllTasks}