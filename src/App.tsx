import { useCallback, useEffect, useState } from "react";
import { Footer, Header, Link, LoadingSpinner } from "@textkernel/oneui";
import { v4 as uuidv4 } from "uuid";

import { Card } from "./components/Card";
import { Map } from "./components/Map";
import { useApi } from "./hooks/useApi";

import { Job } from "./types/api";

import style from "./styles/Home.module.scss";
import { Position } from "./types/map";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [jobs, setJobs] = useState<Array<Job>>([] as Array<Job>);
  const [filteredJobs, setFilteredJobs] = useState<Array<Job>>(
    [] as Array<Job>
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job>({} as Job);
  const [jobLocation, setJobLocation] = useState<Position<number>>({
    lat: 52.390741909089954,
    lng: 4.937249840694807,
  });
  const { getJobs } = useApi();

  const fetchJobs = async () => {
    const data = await getJobs();
    const standardizedJobs = data.map((job) => {
      return { id: uuidv4(), ...job };
    });
    setJobs(standardizedJobs);
    setFilteredJobs(standardizedJobs);
  };

  const findJob = (job: Job) => {
    const coords = {
      lat: Number(job.location_coordinates[0]),
      lng: Number(job.location_coordinates[1]),
    };
    setJobLocation(coords);
    setSelectedJob(job);
  };

  const filterJobs = (search: string) => {
    const filter = jobs.filter((job) => {
      return (
        job?.organization_name?.toLowerCase().includes(search.toLowerCase()) ||
        job?.job_title?.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredJobs(filter);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchJobs();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <LoadingSpinner
        centerIn={undefined}
        context="brand"
        hidden={false}
        size={undefined}
      >
        Loading...
      </LoadingSpinner>
    );
  }

  return (
    <main className={style.container}>
      <Header
        logo={{
          link: "/",
          src: "https://www.jobfeed.nl/images/jobfeed-logo.svg",
          title: "Jobfeed",
        }}
      >
        An App from Leo Teixeira
      </Header>

      <section className={style.feed}>
        <div className={style.searchFeed}>
          <SearchBar onSearch={filterJobs} />
          <div className={style.scroll}>
            {filteredJobs.map((job: Job) => (
              <Card key={job.id} job={job} onSelect={findJob} />
            ))}
          </div>
        </div>
        <Map job={selectedJob} location={jobLocation} position={jobLocation} />
      </section>
      <Footer copyright={undefined}>
        Check the source code in
        <Link context="brand" dontDecorateOnHover={false} href="/">
          and a link
        </Link>
      </Footer>
    </main>
  );
}

export default App;
