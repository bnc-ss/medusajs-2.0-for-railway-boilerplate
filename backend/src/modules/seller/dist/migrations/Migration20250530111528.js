"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250530111528 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250530111528 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "seller" add column if not exists "store_status" text check ("store_status" in ('ACTIVE', 'INACTIVE', 'SUSPENDED')) not null default 'ACTIVE';`);
    }
    async down() {
        this.addSql(`alter table if exists "seller" drop column if exists "store_status";`);
    }
}
exports.Migration20250530111528 = Migration20250530111528;
//# sourceMappingURL=Migration20250530111528.js.map