const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  reviewTitle: { type: String, required: true },
  ename: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
