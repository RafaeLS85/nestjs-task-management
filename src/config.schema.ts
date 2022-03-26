import * as joi from 'joi';

export const configSchema = joi.object().keys({
  PORT: joi.number().default(3000),
  STAGE: joi.string().valid('dev', 'prod').required(),
  DB_HOST: joi.string().required(),
  DB_PORT: joi.number().default(5432).required(),
  DB_USERNAME: joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  DB_DATABASE: joi.string().required(),
  JWT_SECRET: joi.string().required(),
});
