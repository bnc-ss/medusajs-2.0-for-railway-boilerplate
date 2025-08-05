import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

import { CreateRequestDTO } from '@boxncase/framework'
import { REQUESTS_MODULE, RequestsModuleService } from '@boxncase/requests'

export const createRequestStep = createStep(
  'create-request',
  async (input: CreateRequestDTO | CreateRequestDTO[], { container }) => {
    const service = container.resolve<RequestsModuleService>(REQUESTS_MODULE)

    const toCreate = Array.isArray(input) ? input : [input]

    const requests = await service.createRequests(toCreate)

    return new StepResponse(requests)
  }
)
