import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";
import {useEffect, useState} from "react";

export default function JobTabs() {
  const [data, setData] = useState([]);
  const onSite = data.filter((d) => d.category == "onsite");
  const remote = data.filter((d) => d.category == "remote");
  const partTime = data.filter((d) => d.category == "parttime");
  const hybrid = data.filter((d) => d.category == "hybrid");

  useEffect(() => {
    fetch("/jobs.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
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
            {onSite.map((t) => (
              <Card data={t}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {remote.map((t) => (
              <Card data={t}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {partTime.map((t) => (
              <Card data={t}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {hybrid.map((t) => (
              <Card data={t}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
