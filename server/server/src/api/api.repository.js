const {
    pool
} = require("../db")

const registrUserDB = async (name, email, password) => {
  
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        console.log(name,email,password);
        const sqlCreateUser = `
        INSERT INTO users (name,email,password) 
        VALUES ($1,$2,$3) RETURNING users.*
        `
        const createdUser = (await client.query(sqlCreateUser, [name, email, password])).rows;

        const sqlAllUsers = `SELECT * from users`

        const allUsers = (await client.query(sqlAllUsers, )).rows;

        if (!createdUser.length) throw new Error('Некорректный ввод');
        await client.query('COMMIT')
    
        return allUsers
    } catch (error) {
        console.log('error in UserCreateDB')
        await client.query('ROLLBACK')
    }
}

const authUserDB = async (email, password) => {
    
    const client = await pool.connect()
    console.log(client);
    try {
        await client.query('BEGIN') 

        const searchUserSQL = `SELECT * FROM users where email = $1 and password = $2`
        const searchUser = (await client.query(searchUserSQL, [email, password])).rows;
        if (!searchUser.length) throw new Error('Неправильная почта или пароль');
        await client.query('COMMIT')
        return searchUser
    } catch (error) {  
        await client.query('ROLLBACK')
        return error.message
    }
}

const createTaskDB = async (taskText,taskOwner) => {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')

        const sqlCreateTask = `
        INSERT INTO tasks (task,owner_id) 
        VALUES ($1,$2) RETURNING tasks.*
        `
        const createdTask = (await client.query(sqlCreateTask, [taskText, taskOwner])).rows;

        if (!createdTask.length) throw new Error('Некорректный ввод');
        await client.query('COMMIT')
        return createdTask
    } catch (error) {
        console.log('error in TaskCreateDB')
        await client.query('ROLLBACK')
    }
}
const getAllTasksDB = async (userid) => {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')

        const getAllTasksSql = `
        SELECT * FROM tasks where owner_id = $1`
        const userAllTasks = (await client.query(getAllTasksSql, [userid])).rows;

        if (!userAllTasks.length) throw new Error('Пользователь не имеет запланированных задач');
        await client.query('COMMIT')

        return userAllTasks
    } catch (error) {
        console.log(`Error in getAllTasksDB: ${error.message} by user: ${userid}`)
        await client.query('ROLLBACK')
    }
}

module.exports = {registrUserDB,authUserDB,createTaskDB,getAllTasksDB}