"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250428150914 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250428150914 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "request" drop constraint if exists "request_status_check";`);
        this.addSql(`alter table if exists "request" add constraint "request_status_check" check("status" in ('draft', 'pending', 'accepted', 'rejected'));`);
    }
    async down() {
        this.addSql(`alter table if exists "request" drop constraint if exists "request_status_check";`);
        this.addSql(`alter table if exists "request" add constraint "request_status_check" check("status" in ('pending', 'accepted', 'rejected'));`);
    }
}
exports.Migration20250428150914 = Migration20250428150914;
//# sourceMappingURL=Migration20250428150914.js.map