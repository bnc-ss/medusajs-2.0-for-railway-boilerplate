"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250127073504 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250127073504 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "commission_rate" alter column "percentage_rate" type integer using ("percentage_rate"::integer);');
        this.addSql('alter table if exists "commission_rate" alter column "percentage_rate" drop not null;');
        this.addSql('alter table if exists "commission_rate" alter column "price_set_id" type text using ("price_set_id"::text);');
        this.addSql('alter table if exists "commission_rate" alter column "price_set_id" drop not null;');
        this.addSql('alter table if exists "commission_rate" alter column "max_price_set_id" type text using ("max_price_set_id"::text);');
        this.addSql('alter table if exists "commission_rate" alter column "max_price_set_id" drop not null;');
        this.addSql('alter table if exists "commission_rate" alter column "min_price_set_id" type text using ("min_price_set_id"::text);');
        this.addSql('alter table if exists "commission_rate" alter column "min_price_set_id" drop not null;');
    }
    async down() {
        this.addSql('alter table if exists "commission_rate" alter column "percentage_rate" type integer using ("percentage_rate"::integer);');
        this.addSql('alter table if exists "commission_rate" alter column "percentage_rate" set not null;');
        this.addSql('alter table if exists "commission_rate" alter column "price_set_id" type text using ("price_set_id"::text);');
        this.addSql('alter table if exists "commission_rate" alter column "price_set_id" set not null;');
        this.addSql('alter table if exists "commission_rate" alter column "max_price_set_id" type text using ("max_price_set_id"::text);');
        this.addSql('alter table if exists "commission_rate" alter column "max_price_set_id" set not null;');
        this.addSql('alter table if exists "commission_rate" alter column "min_price_set_id" type text using ("min_price_set_id"::text);');
        this.addSql('alter table if exists "commission_rate" alter column "min_price_set_id" set not null;');
    }
}
exports.Migration20250127073504 = Migration20250127073504;
//# sourceMappingURL=Migration20250127073504.js.map