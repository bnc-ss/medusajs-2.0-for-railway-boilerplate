"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250612144913 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250612144913 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "payout_reversal" ("id" text not null, "currency_code" text not null, "amount" numeric not null, "data" jsonb null, "payout_id" text not null, "raw_amount" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payout_reversal_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_reversal_payout_id" ON "payout_reversal" (payout_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_reversal_deleted_at" ON "payout_reversal" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "payout_reversal" add constraint "payout_reversal_payout_id_foreign" foreign key ("payout_id") references "payout" ("id") on update cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "payout_reversal" drop constraint if exists "payout_reversal_payout_id_foreign";`);
        this.addSql(`drop table if exists "payout_reversal" cascade;`);
    }
}
exports.Migration20250612144913 = Migration20250612144913;
//# sourceMappingURL=Migration20250612144913.js.map