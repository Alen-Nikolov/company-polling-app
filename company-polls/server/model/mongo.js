const url = 'mongodb://alen:alen@ds119080.mlab.com:19080/company-polls';
const db = require('monk')(url);
const collection = db.get('company-poll-answers');

module.exports = collection;
