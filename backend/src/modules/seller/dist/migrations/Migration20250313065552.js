"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250313065552 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250313065552 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "seller_onboarding" drop constraint if exists "seller_onboarding_seller_id_unique";`);
        this.addSql(`drop index if exists "seller_onboarding_seller_id_unique";`);
        this.addSql(`drop index if exists "IDX_seller_onboarding_seller_id";`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_seller_onboarding_seller_id_unique" ON "seller_onboarding" (seller_id) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop index if exists "IDX_seller_onboarding_seller_id_unique";`);
        this.addSql(`alter table if exists "seller_onboarding" add constraint "seller_onboarding_seller_id_unique" unique ("seller_id");`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_seller_onboarding_seller_id" ON "seller_onboarding" (seller_id) WHERE deleted_at IS NULL;`);
    }
}
exports.Migration20250313065552 = Migration20250313065552;
//# sourceMappingURL=Migration20250313065552.js.map