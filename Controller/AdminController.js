const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const adminModel = require('../model/admin');

module.exports = {
    // 유저 전체 조회
    readUsers : async(req, res) => {
        try{
            const result = await adminModel.readUsers();
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_SUCCESS, result));
        }catch(err){
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, err.message));
        }
    },
    // 유저 정보 수정
    updateUserInfo : async(req, res) => {

    }
}
