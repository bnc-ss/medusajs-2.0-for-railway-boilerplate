import { createStep, StepResponse } from "@medusajs/workflows-sdk";
import { COMPANY_MODULE } from "../../../modules/company";
import { ModuleUpdateEmployee } from "../../../types";

export const updateEmployeesStep = createStep(
  "update-employees-step",
  async (data: { selector: any; update: ModuleUpdateEmployee }, { container }) => {
    const companyModuleService = container.resolve(COMPANY_MODULE);

    const employees = await companyModuleService.updateEmployees(data.selector, data.update);

    return new StepResponse(employees, data);
  },
  async (originalData, { container }) => {
    if (!originalData) {
      return;
    }

    const companyModuleService = container.resolve(COMPANY_MODULE);
    
    // Revert the update (simplified approach)
    await companyModuleService.updateEmployees(originalData.selector, originalData.update);
  }
);