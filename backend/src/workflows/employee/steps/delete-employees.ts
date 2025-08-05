import { createStep, StepResponse } from "@medusajs/workflows-sdk";
import { COMPANY_MODULE } from "../../../modules/company";

export const deleteEmployeesStep = createStep(
  "delete-employees-step",
  async (employeeIds: string[], { container }) => {
    const companyModuleService = container.resolve(COMPANY_MODULE);

    // Get employees before deletion for potential rollback
    const employees = await companyModuleService.listEmployees({ id: employeeIds });
    
    await companyModuleService.deleteEmployees(employeeIds);

    return new StepResponse({ deleted: true }, employees);
  },
  async (originalEmployees, { container }) => {
    if (!originalEmployees?.length) {
      return;
    }

    const companyModuleService = container.resolve(COMPANY_MODULE);
    
    // Recreate the deleted employees
    await companyModuleService.createEmployees(originalEmployees);
  }
);