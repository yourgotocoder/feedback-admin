const mongoose = require("mongoose");

const ExitFeedbackSchema = mongoose.Schema({
    po1: { id: Number, title: String, question: String, rating: String },
    po2: { id: Number, title: String, question: String, rating: String },
    po3: { id: Number, title: String, question: String, rating: String },
    po4: { id: Number, title: String, question: String, rating: String },
    po5: { id: Number, title: String, question: String, rating: String },
    po6: { id: Number, title: String, question: String, rating: String },
    po7: { id: Number, title: String, question: String, rating: String },
    po8: { id: Number, title: String, question: String, rating: String },
    po9: { id: Number, title: String, question: String, rating: String },
    po10: { id: Number, title: String, question: String, rating: String },
    po11: { id: Number, title: String, question: String, rating: String },
    po12: { id: Number, title: String, question: String, rating: String },
    pso1: { id: Number, question: String, rating: String },
    pso2: { id: Number, question: String, rating: String },
    futurePlans: {
        selection: String,
        detail: String,
    },
    strengths: {
        strength_one: String,
        strength_two: String,
        strength_three: String,
    },
    weakness: {
        weakness_one: String,
        weakness_two: String,
        weakness_three: String,
    },
    satifaction: {
        selection: String,
        detail: String,
    },
    detailed_comments: String,
});

module.exports = mongoose.model(
    "exitfeedback",
    ExitFeedbackSchema,
    "exit-feedback"
);
