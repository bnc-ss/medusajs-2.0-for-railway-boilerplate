import {
  WorkflowResponse,
  createWorkflow
} from '@medusajs/framework/workflows-sdk'

import { CreateWishlistDTO } from '@boxncase/framework'

import { createWishlistEntryStep } from '../steps'

export const createWishlistEntryWorkflow = createWorkflow(
  {
    name: 'create-wishlist'
  },
  function (input: CreateWishlistDTO) {
    return new WorkflowResponse(createWishlistEntryStep(input))
  }
)
