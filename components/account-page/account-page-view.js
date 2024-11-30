async function renderAccountPage(req, res) {
  res.render('account-page', {
    title: 'Account Page',
  });
};

async function renderProfileInformation(req, res) {
  res.render('profile-information', {
    title: 'Profile Information',
  });
};

async function renderManageAddress(req, res) {
  res.render('manage-address', {
    title: 'Manage Address',
  });
};

async function renderChangePassword(req, res) {
  res.render('change-password', {
    title: 'Change Password',
  });
};

module.exports = {
  renderAccountPage, renderProfileInformation, renderManageAddress, renderChangePassword
};
