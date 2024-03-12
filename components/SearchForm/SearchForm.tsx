"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "../ui/calendar";

import { BedDoubleIcon, CalendarIcon } from "lucide-react";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { formSchema } from "@/constants";

const SearchForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "",
      rooms: "1",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL("https://www.booking.com/searchresults.html");
    url.searchParams.set("ss", values.location);
    url.searchParams.set("group_adults", values.adults);
    url.searchParams.set("group_children", values.children);
    url.searchParams.set("no_rooms", values.rooms);
    url.searchParams.set("checkin", checkin);
    url.searchParams.set("checkout", checkout);

    router.push(`/search?url=${url.href}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto 
        justify-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="London, UK" {...field} />
                </FormControl>
                <div className="min-h-5 lg:min-h-10">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full lg:max-w-sm flex-1 m-0">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white flex">Dates</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant="outline"
                        className={cn(
                          "w-full lg:w-[300px] justify-start text-left font-normal",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            <>{format(field.value.from, "LLL dd, y")}</>
                          )
                        ) : (
                          <span>Choose dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 rounded-lg bg-white shadow-2xl"
                    align="start"
                  >
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
                <div className="min-h-5 lg:min-h-10">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full space-x-2">
          <div className="flex  flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2 flex-1">
            <div className="grid flex-1">
              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white flex">Adults</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Adults" {...field} />
                    </FormControl>
                    <div className="min-h-5 lg:min-h-10">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid flex-1">
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white flex">Children</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Children" {...field} />
                    </FormControl>
                    <div className="min-h-5 lg:min-h-10">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 lg:flex-row lg:space-x-2 flex-1">
            <div className="grid lg:flex-1">
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white flex">Rooms</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Rooms" {...field} />
                    </FormControl>
                    <div className="min-h-5 lg:min-h-10">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid mt-[22px]">
              <Button className="bg-blue-500 hover:bg-blue-600">Search</Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
