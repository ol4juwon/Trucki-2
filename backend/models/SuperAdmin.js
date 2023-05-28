const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('SuperAdmin', superAdminSchema);
