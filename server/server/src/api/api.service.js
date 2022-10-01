const {registrUserDB,authUserDB,createTaskDB} = require('./api.repository')

const registrUser = async (name, email, password) => {
    const registredUserDB = await registrUserDB(name, email, password)
    return registredUserDB
}
const authUser = async (email, password) => {
    const authedUserDB = await authUserDB(email, password)
    return authedUserDB
}

const createTask = async (taskText, taskNumber,taskOwner) => {
    const createdTaskDB = await createTaskDB(taskText, taskNumber,taskOwner)
    return createdTaskDB
}


module.exports = {registrUser,authUser,createTask}