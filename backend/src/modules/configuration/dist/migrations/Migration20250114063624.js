"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250114063624 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250114063624 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "configuration_rule" ("id" text not null, "rule_type" text check ("rule_type" in (\'global_product_catalog\', \'require_product_approval\', \'product_request_enabled\')) not null, "is_enabled" boolean not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "configuration_rule_pkey" primary key ("id"));');
        this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_configuration_rule_rule_type_unique" ON "configuration_rule" (rule_type) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_configuration_rule_deleted_at" ON "configuration_rule" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "configuration_rule" cascade;');
    }
}
exports.Migration20250114063624 = Migration20250114063624;
//# sourceMappingURL=Migration20250114063624.js.map