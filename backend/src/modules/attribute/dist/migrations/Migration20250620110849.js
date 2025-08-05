"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250620110849 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250620110849 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "attribute" add column if not exists "is_filterable" boolean not null default true;`);
    }
    async down() {
        this.addSql(`alter table if exists "attribute" drop column if exists "is_filterable";`);
    }
}
exports.Migration20250620110849 = Migration20250620110849;
//# sourceMappingURL=Migration20250620110849.js.map