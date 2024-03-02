import { Schema, model, models } from "mongoose";

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    lpa: {
        type: Number,
        required: true

    },
    openings: {
        type: Number,
        required: true
    },
    joining: {
        type: Date,
        required: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Job = models?.Job || model("Job", JobSchema);

export default Job;