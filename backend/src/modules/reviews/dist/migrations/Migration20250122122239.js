"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250122122239 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250122122239 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "review" ("id" text not null, "reference" text check ("reference" in (\'product\', \'seller\')) not null, "rating" integer not null, "customer_note" text null, "customer_id" text not null, "seller_note" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "review_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_review_deleted_at" ON "review" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "review" cascade;');
    }
}
exports.Migration20250122122239 = Migration20250122122239;
//# sourceMappingURL=Migration20250122122239.js.map