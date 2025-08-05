"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("@medusajs/framework/utils");
const _1 = require(".");
const models_1 = require("./models");
// 7 days in ms
const DEFAULT_VALID_INVITE_DURATION = 1000 * 60 * 60 * 24 * 7;
class SellerModuleService extends (0, utils_1.MedusaService)({
    MemberInvite: models_1.MemberInvite,
    Member: models_1.Member,
    Seller: models_1.Seller,
    SellerOnboarding: models_1.SellerOnboarding,
}) {
    constructor({ configModule }) {
        super(...arguments);
        this.httpConfig_ = configModule.projectConfig.http;
        const moduleDef = configModule.modules?.[_1.SELLER_MODULE];
        const options = typeof moduleDef !== "boolean"
            ? moduleDef?.options
            : null;
        this.config_ = {
            validInviteDuration: options?.validInviteDuration ?? DEFAULT_VALID_INVITE_DURATION,
        };
    }
    async validateInviteToken(token) {
        const jwtSecret = this.httpConfig_.jwtSecret;
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret, {
            complete: true,
        });
        const invite = await this.retrieveMemberInvite(decoded.payload.id, {});
        if (invite.accepted) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "The invite has already been accepted");
        }
        if (invite.expires_at < new Date()) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "The invite has expired");
        }
        return invite;
    }
    // @ts-expect-error: createInvites method already exists
    async createMemberInvites(input, sharedContext = {}) {
        const data = Array.isArray(input) ? input : [input];
        const expires_at = new Date();
        expires_at.setMilliseconds(new Date().getMilliseconds() + DEFAULT_VALID_INVITE_DURATION);
        const toCreate = data.map((invite) => {
            return {
                ...invite,
                expires_at: new Date(),
                token: "placeholder",
            };
        });
        const created = await super.createMemberInvites(toCreate, sharedContext);
        const toUpdate = Array.isArray(created) ? created : [created];
        const updates = toUpdate.map((invite) => {
            return {
                ...invite,
                id: invite.id,
                expires_at,
                token: this.generateToken({ id: invite.id }),
            };
        });
        // @ts-ignore
        await this.updateMemberInvites(updates, sharedContext);
        return updates;
    }
    generateToken(data) {
        const jwtSecret = this.httpConfig_.jwtSecret;
        return jsonwebtoken_1.default.sign(data, jwtSecret, {
            expiresIn: this.config_.validInviteDuration / 1000,
        });
    }
    async isOnboardingCompleted(seller_id) {
        const { onboarding } = await this.retrieveSeller(seller_id, {
            relations: ["onboarding"],
        });
        if (!onboarding) {
            return false;
        }
        return (onboarding.locations_shipping &&
            onboarding.products &&
            onboarding.store_information &&
            onboarding.stripe_connection);
    }
}
__decorate([
    (0, utils_1.InjectTransactionManager)()
    // @ts-expect-error: createInvites method already exists
    ,
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SellerModuleService.prototype, "createMemberInvites", null);
exports.default = SellerModuleService;
//# sourceMappingURL=service.js.map