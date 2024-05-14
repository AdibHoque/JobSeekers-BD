import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";
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
    <div className="px-4 lg:px-24 mb-8">
      <div className="my-6">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
          Jobs by Category
        </h1>
        <p className="text-center my-1">
          Discover career opportunities tailored to your preferences by
          exploring jobs categorized by industry
        </p>
      </div>
      <Tabs>
        <TabList>
          <Tab>On Site</Tab>
          <Tab>Remote</Tab>
          <Tab>Part-Time</Tab>
          <Tab>Hybrid</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs
              .filter((d) => d.category == "Onsite")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs
              .filter((d) => d.category == "Remote")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs
              .filter((d) => d.category == "Part-Time")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs
              .filter((d) => d.category == "Hybrid")
              .map((t) => (
                <Card key={t._id} data={t}></Card>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
