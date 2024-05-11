import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";

export default function JobTabs() {
  const {
    isPending,
    isError,
    error,
    data: jobs,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/jobs");
      return res.json();
    },
  });

  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="px-4 lg:px-24">
      <h1 className="text-4xl text-center md:text-5xl font-bold text-[#190D5B] my-6">
        Jobs By Category
      </h1>
      <Tabs>
        <TabList>
          <Tab>On Site</Tab>
          <Tab>Remote</Tab>
          <Tab>Part-Time</Tab>
          <Tab>Hybrid</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {jobs
              .filter((d) => d.category == "onsite")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {jobs
              .filter((d) => d.category == "remote")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {jobs
              .filter((d) => d.category == "parttime")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {jobs
              .filter((d) => d.category == "hybrid")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
