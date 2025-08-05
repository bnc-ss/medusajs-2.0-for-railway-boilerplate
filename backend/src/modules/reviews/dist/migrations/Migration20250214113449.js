"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250214113449 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250214113449 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "review" drop column if exists "customer_id";');
    }
    async down() {
        this.addSql('alter table if exists "review" add column if not exists "customer_id" text not null;');
    }
}
exports.Migration20250214113449 = Migration20250214113449;
//# sourceMappingURL=Migration20250214113449.js.map