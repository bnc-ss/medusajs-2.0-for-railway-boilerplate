"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250716063044 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250716063044 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "order_return_request_line_item" add column if not exists "reason_id" text null;`);
    }
    async down() {
        this.addSql(`alter table if exists "order_return_request_line_item" drop column if exists "reason_id";`);
    }
}
exports.Migration20250716063044 = Migration20250716063044;
//# sourceMappingURL=Migration20250716063044.js.map