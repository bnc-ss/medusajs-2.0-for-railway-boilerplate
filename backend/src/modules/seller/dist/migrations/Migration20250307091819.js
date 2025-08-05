"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250307091819 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250307091819 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "seller" add column if not exists "email" text null, add column if not exists "phone" text null, add column if not exists "state" text null;');
    }
    async down() {
        this.addSql('alter table if exists "seller" drop column if exists "email";');
        this.addSql('alter table if exists "seller" drop column if exists "phone";');
        this.addSql('alter table if exists "seller" drop column if exists "state";');
    }
}
exports.Migration20250307091819 = Migration20250307091819;
//# sourceMappingURL=Migration20250307091819.js.map