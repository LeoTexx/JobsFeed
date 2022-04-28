import React, { memo } from "react";
import { Button, StepperButton } from "@textkernel/oneui";

import { Job } from "../types/api";

import style from "../styles/Card.module.scss";

interface Props {
  job: Job;
  onSelect: (job: Job) => void;
  onDelete: (job: Job) => void;
}

function CardComponent({ job, onSelect, onDelete }: Props) {
  return (
    <div className={style.container}>
      <div className={style.removeJob}>
        <StepperButton
          disabled={false}
          icon="minus"
          onClick={() => onDelete(job)}
        />
      </div>
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
