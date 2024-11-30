const { renderAccountPage, renderProfileInformation, renderManageAddress, renderChangePassword } = require("./account-page-view")
const getAccountPage = (req, res) => {
    renderAccountPage(req, res);
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