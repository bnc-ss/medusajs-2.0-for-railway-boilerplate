import { WorkflowResponse, createWorkflow } from '@medusajs/workflows-sdk'

import { CreateMemberInviteDTO } from '@boxncase/framework'

import { createMemberInviteStep } from '../steps'

export const inviteMemberWorkflow = createWorkflow(
  'invite-member',
  function (input: CreateMemberInviteDTO) {
    return new WorkflowResponse(createMemberInviteStep(input))
  }
)
