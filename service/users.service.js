const pool= require('../db');

class UsersService {
    async getAllUser() {
        await pool.connect((err) => {
            if (err) throw err;
        })
        const wew = await pool.query('SELECT * FROM blogger.blog b ')
        console.log(wew.rows)
        return wew.rows
    }
}

module.exports = UsersService;