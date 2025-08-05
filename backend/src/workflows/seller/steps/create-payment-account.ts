import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

import { CreatePayoutAccountDTO } from '@boxncase/framework'
import { PAYOUT_MODULE } from '@boxncase/payout'
import { PayoutModuleService } from '@boxncase/payout'

export const createPayoutAccountStep = createStep(
  'create-payout-account',
  async (input: CreatePayoutAccountDTO, { container }) => {
    const service = container.resolve<PayoutModuleService>(PAYOUT_MODULE)

    const payoutAccount = await service.createPayoutAccount(input)

    return new StepResponse(payoutAccount, payoutAccount.id)
  },
  async (id: string, { container }) => {
    if (!id) {
      return
    }

    const service = container.resolve<PayoutModuleService>(PAYOUT_MODULE)

    await service.deletePayoutAccounts(id)
  }
)
