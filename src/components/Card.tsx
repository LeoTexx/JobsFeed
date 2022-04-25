import { Job } from "../types/api";
import style from "../styles/Card.module.scss";
import { Button, Text } from "@textkernel/oneui";
import { memo } from "react";

interface Props {
  job: Job;
  onSelect: (job: Job) => void;
}

function CardComponent({ job, onSelect }: Props) {
  return (
    <div className={style.container}>
      <h1>{job.job_title}</h1>
      <h3>{job.organization_name}</h3>
      <p>
        <Button
          context="brand"
          disabled={false}
          isBlock={false}
          isInline={false}
          onClick={() => onSelect(job)}
          size="large"
          type="submit"
        >
          Find this Job!
        </Button>
      </p>
    </div>
  );
}

export const Card = memo(CardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
});
