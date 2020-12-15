const pool = require('../modules/pool');

module.exports = {
    readUsers : async() => {
        const query = 'SELECT * FROM user';
        try{
            const result = await pool.queryParam(query);
            return result
        }catch(err){
            console.log('READ USERS ERROR : ', err);
            throw err;
        }
    }
}