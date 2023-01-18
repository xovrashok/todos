import React from "react";
import { SelectedTodosLeft } from "../SelectedTodosLeft";
import { TodoStatuses } from "../TodoStatuses";
import {
  ClearCompletedButton,
  FooterContainer,
  StatusesContainer,
} from "./sytles";
import Button from "../Button";

interface FooterProps {
  activeCount: number;
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}
export const Footer = ({
  activeCount,
  filter,
  setFilter,
  clearCompleted,
}: FooterProps) => {
  return (
    <>
      <FooterContainer>
        <SelectedTodosLeft activeCount={activeCount} />
        <StatusesContainer>
          <TodoStatuses filter={filter} setFilter={setFilter} />
        </StatusesContainer>
        <ClearCompletedButton>
          <Button onClick={() => clearCompleted()}>Clear Completed</Button>
        </ClearCompletedButton>
      </FooterContainer>
    </>
  );
};
