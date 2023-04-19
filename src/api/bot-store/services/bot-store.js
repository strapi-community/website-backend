'use strict';

/**
 * bot-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bot-store.bot-store');
