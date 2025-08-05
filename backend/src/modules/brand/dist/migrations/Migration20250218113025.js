"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250218113025 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250218113025 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "brand" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "brand_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_brand_deleted_at" ON "brand" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "brand" cascade;');
    }
}
exports.Migration20250218113025 = Migration20250218113025;
//# sourceMappingURL=Migration20250218113025.js.map