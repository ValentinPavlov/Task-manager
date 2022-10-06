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

const createTask = async (taskText,taskOwner) => {
    const createdTaskDB = await createTaskDB(taskText,taskOwner)
    return createdTaskDB
}


module.exports = {registrUser,authUser,createTask,getAllTasks}