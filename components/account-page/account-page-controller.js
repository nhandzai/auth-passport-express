const { renderAccountPage, renderProfileInformation, renderManageAddress, renderChangePassword } = require("./account-page-view")
const { fetchUserById } = require("./account-page-model")
const getAccountPage = async (req, res) => {
    console.log("1111",req.user.id);
    const abc = await fetchUserById(req.user.id);
    console.log("abc",abc);
   
    renderAccountPage(req, res,abc);
};

const getProfileInformation = (req, res) => {
    renderProfileInformation(req, res);
};

const getManageAddress = (req, res) => {
    renderManageAddress(req, res);
};

const getChangePassword = (req, res) => {
    renderChangePassword(req, res);
};

module.exports = {
    getAccountPage, getProfileInformation, getManageAddress, getChangePassword
};  