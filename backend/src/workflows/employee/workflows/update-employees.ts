import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/workflows-sdk";
import { ModuleUpdateEmployee } from "../../../types";
import { updateEmployeesStep } from "../steps";

export const updateEmployeesWorkflow = createWorkflow(
  "update-employees",
  function (input: { selector: any; update: ModuleUpdateEmployee }) {
    const employees = updateEmployeesStep(input);

    return new WorkflowResponse(employees);
  }
);