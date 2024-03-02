"use client";
import { Combobox } from "@/components/shared/combobox";
import { cities, jobs } from "@/constants";
import { Button } from "@/components/ui/button";

export const JobSearch = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-4 p-4 rounded-md border mt-5">
            <Combobox className="w-full " title="job location" data={cities} />

            <Combobox className="w-full" title="job role" data={jobs} />
            <Button className="w-full ">Find Jobs</Button>
        </div>
    );
};
