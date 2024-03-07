import { coerce, date, string, z } from "zod";

export const jobSchema = z.object({
    title: string().min(1, {
        message: "Job title is required.",
    }),
    company: string().min(1, {
        message: "Company name is required.",
    }),
    location: string().min(1, {
        message: "Job location is required.",
    }),
    description: string().min(5, {
        message: "Job description must be at least 5 characters long.",
    }),
    experience: coerce.number(),

    lpa: coerce.number(),
    openings: coerce.number(),
    deadline: date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    skills: string().min(1, {
        message: "Skills field cannot be empty.",
    }),
});