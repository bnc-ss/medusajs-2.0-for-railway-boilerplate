import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/workflows-sdk";
import { ModuleCreateEmployee } from "../../../types";
import { createEmployeesStep } from "../steps";

export const createEmployeesWorkflow = createWorkflow(
  "create-employees",
  function (input: ModuleCreateEmployee[]) {
    const employees = createEmployeesStep(input);

    return new WorkflowResponse(employees);
  }
);