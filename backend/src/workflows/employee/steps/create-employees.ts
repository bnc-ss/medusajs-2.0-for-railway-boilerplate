import { createStep, StepResponse } from "@medusajs/workflows-sdk";
import { COMPANY_MODULE } from "../../../modules/company";
import { ModuleCreateEmployee } from "../../../types";

export const createEmployeesStep = createStep(
  "create-employees-step",
  async (data: ModuleCreateEmployee[], { container }) => {
    const companyModuleService = container.resolve(COMPANY_MODULE);

    const employees = await companyModuleService.createEmployees(data);

    return new StepResponse(employees, employees.map(e => e.id));
  },
  async (employeeIds, { container }) => {
    if (!employeeIds?.length) {
      return;
    }

    const companyModuleService = container.resolve(COMPANY_MODULE);
    
    await companyModuleService.deleteEmployees(employeeIds);
  }
);