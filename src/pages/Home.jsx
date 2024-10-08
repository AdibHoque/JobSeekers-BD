import Banner from "../components/Banner";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import JobTabs from "../components/JobTabs";
import Testimons from "../components/Testimons";

export default function Home() {
  return (
    <div className="space-y-12">
      <Banner></Banner>
      <JobTabs></JobTabs>
      <Testimons></Testimons>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
}
