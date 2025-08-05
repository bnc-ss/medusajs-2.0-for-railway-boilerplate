"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250324131111 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250324131111 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "configuration_rule" drop constraint if exists "configuration_rule_rule_type_check";`);
        this.addSql(`alter table if exists "configuration_rule" add constraint "configuration_rule_rule_type_check" check("rule_type" in ('global_product_catalog', 'require_product_approval', 'product_request_enabled', 'product_import_enabled'));`);
    }
    async down() {
        this.addSql(`alter table if exists "configuration_rule" drop constraint if exists "configuration_rule_rule_type_check";`);
        this.addSql(`alter table if exists "configuration_rule" add constraint "configuration_rule_rule_type_check" check("rule_type" in ('global_product_catalog', 'require_product_approval', 'product_request_enabled'));`);
    }
}
exports.Migration20250324131111 = Migration20250324131111;
//# sourceMappingURL=Migration20250324131111.js.map