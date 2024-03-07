import { JobSearch } from "@/components/shared/job-search";
import React from "react";

const JobsPage = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center  py-3 px-6 lg:px-40">
                <JobSearch />
            </div>
            <section></section>
        </div>
    );
};

export default JobsPage;
