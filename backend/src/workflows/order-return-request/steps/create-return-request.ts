import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

import { CreateOrderReturnRequestDTO } from '@boxncase/framework'
import { ORDER_RETURN_MODULE } from '@boxncase/order-return-request'
import { OrderReturnModuleService } from '@boxncase/order-return-request'

export const createOrderReturnRequestStep = createStep(
  'create-order-return-request',
  async (input: CreateOrderReturnRequestDTO, { container }) => {
    const service =
      container.resolve<OrderReturnModuleService>(ORDER_RETURN_MODULE)

    // @ts-expect-error Expects existing line item ids
    const request = await service.createOrderReturnRequests(input)

    return new StepResponse(request, request.id)
  }
)
