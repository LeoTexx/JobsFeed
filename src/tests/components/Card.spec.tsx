import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../../components/Card";
import { Job } from "../../types/api";

const mockedJob = {
  id: "fake-id",
  job_title: "Frontend Developer",
  organization_name: "Textkernel",
  location_coordinates: ["48.858093", "2.294694"],
} as Job;

describe("Card Component", () => {
  it("should render job data correctly", () => {
    const { getByText } = render(
      <Card job={mockedJob} onSelect={() => {}} onDelete={() => {}} />
    );

    expect(getByText(mockedJob.job_title)).toBeInTheDocument();
  });

  it("should have a button to find the job in the map", () => {
    const { getByText } = render(
      <Card job={mockedJob} onSelect={() => {}} onDelete={() => {}} />
    );

    expect(getByText("Find this Job!")).toBeInTheDocument();
  });
});
