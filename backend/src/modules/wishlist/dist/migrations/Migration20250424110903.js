"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250424110903 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250424110903 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "wishlist" ("id" text not null, "reference" text check ("reference" in ('product')) not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "wishlist_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_wishlist_deleted_at" ON "wishlist" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "wishlist" cascade;`);
    }
}
exports.Migration20250424110903 = Migration20250424110903;
//# sourceMappingURL=Migration20250424110903.js.map