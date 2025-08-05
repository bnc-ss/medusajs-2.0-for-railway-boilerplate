"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resend_1 = require("resend");
const utils_1 = require("@medusajs/framework/utils");
const email_templates_1 = require("./email-templates");
class ResendNotificationProviderService extends utils_1.AbstractNotificationProviderService {
    constructor(_, options) {
        super();
        this.validateModuleOptions(options);
        this.resendClient = new resend_1.Resend(options.api_key);
        this.options = options;
    }
    validateModuleOptions(options) {
        for (const key in options) {
            if (!options[key]) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `No ${key} was provided in the ${ResendNotificationProviderService.identifier} options. Please add one.`);
            }
        }
    }
    async send(notification) {
        const { data, error } = await this.resendClient.emails.send({
            from: notification.from?.trim() || this.options.from,
            to: notification.to,
            subject: notification.content?.subject,
            react: email_templates_1.emailTemplates[notification.template](notification.data)
        });
        if (error) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, error.message);
        }
        if (!data) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, 'No data returned by resend client');
        }
        return data;
    }
}
ResendNotificationProviderService.identifier = 'notification-resend';
exports.default = ResendNotificationProviderService;
//# sourceMappingURL=service.js.map