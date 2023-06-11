import * as Joi from '@hapi/joi'

import { validatorFactory } from '../../utils/validate'

const createUser = validatorFactory(
  Joi.object({
    login: Joi.string().required(),
    pass: Joi.string().required(),
  }),
)

export const userValidators = {
  createUser,
}
