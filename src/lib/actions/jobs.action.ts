"use server"

import { jobSchema } from "@/schema/jobSchema"
import { z } from "zod"
import { connectToDatabase } from "../db";
import Job from "@/models/job.model";

export const postNewJob = async (values: z.infer<typeof jobSchema>) => {
    await connectToDatabase();

    const validatefields = jobSchema.safeParse(values);
    if (!validatefields.success) throw new Error(`Validation failed ${validatefields.error.message}`);

    const newJob = await Job.create(values);

    return JSON.parse(JSON.stringify(newJob));
}