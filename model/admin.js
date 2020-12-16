const pool = require('../modules/pool');

module.exports = {
    readUsers : async() => {
        const query = 'SELECT * FROM user';
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('READ USERS ERROR : ', err);
            throw err;
        }
    },
    updateUserInfo : async(data) => {
        const query = `UPDATE user SET name = '${data.name}', department = '${data.department}', \`rank\` = '${data.rank}' WHERE id = '${data.id}'`;
        try{
            const result = await pool.queryParam(query);
            return result.affectedRows;
        }catch(err){
            console.log('UPDATE USER INFO ERROR : ', err);
            throw err;
        }
    }
}