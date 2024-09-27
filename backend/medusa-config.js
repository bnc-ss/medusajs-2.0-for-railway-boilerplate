import { loadEnv, Modules, defineConfig } from '@medusajs/utils';

const isDev = process.env.NODE_ENV === 'development';

loadEnv(process.env.NODE_ENV, process.cwd());

const backendUrl = process.env.RAILWAY_PUBLIC_DOMAIN_VALUE || 'http://localhost:9000';

const plugins = [
  // 'medusa-fulfillment-manual'

  // Added plugins from B2B template
];

const modules = {
  [Modules.FILE]: {
    resolve: '@medusajs/file',
    options: {
      providers: [
        {
          resolve: '@medusajs/file-local-next',
          id: 'local',
          options: {
            backend_url: `${backendUrl}/static`
          }
        }
      ]
    }
  },
  [Modules.EVENT_BUS]: {
    resolve: "@medusajs/event-bus-redis",
    options: { 
      redisUrl: process.env.REDIS_URL
    }
  }
};
  modules[Modules.PAYMENT] = {
    resolve: '@medusajs/payment',
    options: {
      providers: [
        {
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: stripeApiKey,
            webhookSecret: stripeWebhookSecret
          }
        }
      ]
    }
  };
  modules[Modules.NOTIFICATION] = {
    resolve: '@medusajs/notification',
    options: {
      providers: [
        {
          resolve: '@medusajs/notification-sendgrid',
          id: 'sendgrid',
          options: {
            channels: ['email'],
            api_key: sendgridApiKey,
            from: sendgridFrom
          }
        }
      ]
    }

  // Added modules from B2B template
  companyModuleService: {
    resolve: "./modules/company",
  },
  };
const modules = {
  [Modules.FILE]: {
    resolve: '@medusajs/file',
    options: {
      providers: [
        {
          resolve: '@medusajs/file-local-next',
          id: 'local',
          options: {
            backend_url: `${backendUrl}/static`
          }
        }
      ]
    }
  },
  [Modules.EVENT_BUS]: {
    resolve: "@medusajs/event-bus-redis",
    options: { 
      redisUrl: process.env.REDIS_URL
    }
  }
};
  modules[Modules.PAYMENT] = {
    resolve: '@medusajs/payment',
    options: {
      providers: [
        {
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: stripeApiKey,
            webhookSecret: stripeWebhookSecret
          }
        }
      ]
    }
  };
  modules[Modules.NOTIFICATION] = {
    resolve: '@medusajs/notification',
    options: {
      providers: [
        {
          resolve: '@medusajs/notification-sendgrid',
          id: 'sendgrid',
          options: {
            channels: ['email'],
            api_key: sendgridApiKey,
            from: sendgridFrom
          }
        }
      ]
    }

  // Added modules from B2B template
  companyModuleService: {
    resolve: "./modules/company",
  },
  };
const modules = {
  [Modules.FILE]: {
    resolve: '@medusajs/file',
    options: {
      providers: [
        {
          resolve: '@medusajs/file-local-next',
          id: 'local',
          options: {
            backend_url: `${backendUrl}/static`
          }
        }
      ]
    }
  },
  [Modules.EVENT_BUS]: {
    resolve: "@medusajs/event-bus-redis",
    options: { 
      redisUrl: process.env.REDIS_URL
    }
  }
};
  modules[Modules.PAYMENT] = {
    resolve: '@medusajs/payment',
    options: {
      providers: [
        {
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: stripeApiKey,
            webhookSecret: stripeWebhookSecret
          }
        }
      ]
    }
  };
  modules[Modules.NOTIFICATION] = {
    resolve: '@medusajs/notification',
    options: {
      providers: [
        {
          resolve: '@medusajs/notification-sendgrid',
          id: 'sendgrid',
          options: {
            channels: ['email'],
            api_key: sendgridApiKey,
            from: sendgridFrom
          }
        }
      ]
    }

  // Added modules from B2B template
  companyModuleService: {
    resolve: "./modules/company",
  },
  };

// Stripe payment provider
const stripeApiKey = process.env.STRIPE_API_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripeConfigured = stripeApiKey && stripeWebhookSecret;
if (stripeConfigured) {
  console.log('Stripe api key and webhook secret found, enabling stripe payment provider');
const modules = {
  [Modules.FILE]: {
    resolve: '@medusajs/file',
    options: {
      providers: [
        {
          resolve: '@medusajs/file-local-next',
          id: 'local',
          options: {
            backend_url: `${backendUrl}/static`
          }
        }
      ]
    }
  },
  [Modules.EVENT_BUS]: {
    resolve: "@medusajs/event-bus-redis",
    options: { 
      redisUrl: process.env.REDIS_URL
    }
  }
};
  modules[Modules.PAYMENT] = {
    resolve: '@medusajs/payment',
    options: {
      providers: [
        {
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: stripeApiKey,
            webhookSecret: stripeWebhookSecret
          }
        }
      ]
    }
  };
  modules[Modules.NOTIFICATION] = {
    resolve: '@medusajs/notification',
    options: {
      providers: [
        {
          resolve: '@medusajs/notification-sendgrid',
          id: 'sendgrid',
          options: {
            channels: ['email'],
            api_key: sendgridApiKey,
            from: sendgridFrom
          }
        }
      ]
    }

  // Added modules from B2B template
  companyModuleService: {
    resolve: "./modules/company",
  },
  };
}

// SendGrid notification provider
const sendgridApiKey = process.env.SENDGRID_API_KEY;
const sendgridFrom = process.env.SENDGRID_FROM_EMAIL;
const sendgridConfigured = sendgridApiKey && sendgridFrom;
if (sendgridConfigured) {
  console.log('SendGrid api key and from address found, enabling SendGrid notification provider');
const modules = {
  [Modules.FILE]: {
    resolve: '@medusajs/file',
    options: {
      providers: [
        {
          resolve: '@medusajs/file-local-next',
          id: 'local',
          options: {
            backend_url: `${backendUrl}/static`
          }
        }
      ]
    }
  },
  [Modules.EVENT_BUS]: {
    resolve: "@medusajs/event-bus-redis",
    options: { 
      redisUrl: process.env.REDIS_URL
    }
  }
};
  modules[Modules.PAYMENT] = {
    resolve: '@medusajs/payment',
    options: {
      providers: [
        {
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: stripeApiKey,
            webhookSecret: stripeWebhookSecret
          }
        }
      ]
    }
  };
  modules[Modules.NOTIFICATION] = {
    resolve: '@medusajs/notification',
    options: {
      providers: [
        {
          resolve: '@medusajs/notification-sendgrid',
          id: 'sendgrid',
          options: {
            channels: ['email'],
            api_key: sendgridApiKey,
            from: sendgridFrom
          }
        }
      ]
    }

  // Added modules from B2B template
  companyModuleService: {
    resolve: "./modules/company",
  },
  };
}

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  http: {
    adminCors: process.env.ADMIN_CORS,
    authCors: process.env.AUTH_CORS,
    storeCors: process.env.STORE_CORS,
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET
  },
  redisUrl: process.env.REDIS_URL,
  database_url: process.env.DATABASE_URL,
  database_type: 'postgres'
};

const completeConfig = {
  projectConfig,
  plugins,
  modules,
  admin: {
    ...!isDev && { backendUrl }
  }
};

export default defineConfig(completeConfig);
export { backendUrl };

// Added modules from B2B template
    companyModuleService: {
      resolve: "./modules/company",
    },

// Added plugins from B2B template
