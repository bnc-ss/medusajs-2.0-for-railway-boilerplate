"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250317132949 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250317132949 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "order_return_request" add column if not exists "shipping_option_id" text null;`);
    }
    async down() {
        this.addSql(`alter table if exists "order_return_request" drop column if exists "shipping_option_id";`);
    }
}
exports.Migration20250317132949 = Migration20250317132949;
//# sourceMappingURL=Migration20250317132949.js.map