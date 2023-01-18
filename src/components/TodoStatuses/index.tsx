import React from "react";
import { FILTER } from "../../constants";
import { TaskFilters, ButtonContainer } from "./styles";
import Button from "../Button";

interface TodoStatuses {
  filter: string;
  setFilter: SetFilter;
}

export const TodoStatuses = ({ filter, setFilter }: TodoStatuses) => {
  return (
    <TaskFilters>
      <ButtonContainer>
        <Button
          onClick={() => setFilter(FILTER.ALL)}
          className={filter === FILTER.ALL ? "selected" : ""}
        >
          {FILTER.ALL}
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button
          onClick={() => setFilter(FILTER.ACTIVE)}
          className={filter === FILTER.ACTIVE ? "selected" : ""}
        >
          {FILTER.ACTIVE}
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button
          onClick={() => setFilter(FILTER.COMPLETED)}
          className={filter === FILTER.COMPLETED ? "selected" : ""}
        >
          {FILTER.COMPLETED}
        </Button>
      </ButtonContainer>
    </TaskFilters>
  );
};
