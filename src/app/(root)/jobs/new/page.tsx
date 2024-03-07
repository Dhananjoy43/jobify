"use client";

import { useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { jobSchema } from "@/schema/jobSchema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { postNewJob } from "@/lib/actions/jobs.action";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";

const NewJob = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof jobSchema>>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            title: "",
            company: "",
            location: "",
            description: "",
            openings: 1,
            lpa: 5,
            experience: 0,
            deadline: undefined,
            skills: "",
        },
    });
    const onSubmit = (values: z.infer<typeof jobSchema>) => {
        console.log(values);

        startTransition(() => {
            postNewJob(values);
        });
    };
    return (
        <div className="flex flex-col items-center justify-center py-3 px-6 lg:px-40">
            <h1 className="text-2xl font-semibold mb-6">New Job</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full md:w-3/5 flex flex-col space-y-6"
                >
                    <div className="space-y-4">
                        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Job Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Web Developer"
                                                disabled={isPending}
                                            />
                                            {/* <Combobox
                                                {...field}
                                                data={jobs}
                                                title="jobs"
                                                className="w-full"
                                            /> */}
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Google"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Job Location</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Job location"
                                                disabled={isPending}
                                            />
                                            {/* <Combobox
                                                data={cities}
                                                title="city"
                                                className="w-full"
                                            /> */}
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lpa"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>LPA</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Lakh per annum"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
                            <FormField
                                control={form.control}
                                name="experience"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Experience</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Experience of the candidate"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="openings"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Openings</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Number of openings"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="w-full flex flex-col md:flex-row items-center gap-6">
                            <FormField
                                control={form.control}
                                name="deadline"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2 flex flex-col gap-2">
                                        <FormLabel>Deadline</FormLabel>
                                        <Popover>
                                            <PopoverTrigger
                                                className="w-full"
                                                asChild
                                            >
                                                <FormControl className="w-full">
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date >
                                                            new Date(
                                                                "2050-01-01"
                                                            ) ||
                                                        date < new Date()
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="skills"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Skills</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Skills required for this role"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="A brief description of the job role..."
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full"
                    >
                        Submit Job Role
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default NewJob;
