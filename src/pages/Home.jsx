import {useState} from "react";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import JobTabs from "../components/JobTabs";
import Testimons from "../components/Testimons";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <JobTabs></JobTabs>
      <Testimons></Testimons>
      <FAQ></FAQ>
    </>
  );
}
