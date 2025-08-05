import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/workflows-sdk";
import { deleteEmployeesStep } from "../steps";

export const deleteEmployeesWorkflow = createWorkflow(
  "delete-employees",
  function (input: string[]) {
    const result = deleteEmployeesStep(input);

    return new WorkflowResponse(result);
  }
);