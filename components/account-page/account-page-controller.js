const { renderAccountPage, renderProfileInformation, renderManageAddress, renderChangePassword } = require("./account-page-view")
const { fetchUserById } = require("./account-page-model")
const getAccountPage = async (req, res) => {
    const user = await fetchUserById(req.user.id);
    renderAccountPage(req, res, user);
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