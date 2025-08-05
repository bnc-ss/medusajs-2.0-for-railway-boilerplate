"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250225083755 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250225083755 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "seller" add column if not exists "address_line" text null, add column if not exists "city" text null, add column if not exists "postal_code" text null, add column if not exists "country_code" text null, add column if not exists "tax_id" text null;');
        this.addSql('alter table if exists "member_invite" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member_invite" alter column "email" set not null;');
        this.addSql('alter table if exists "member" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member" alter column "email" drop not null;');
    }
    async down() {
        this.addSql('alter table if exists "seller" drop column if exists "address_line";');
        this.addSql('alter table if exists "seller" drop column if exists "city";');
        this.addSql('alter table if exists "seller" drop column if exists "postal_code";');
        this.addSql('alter table if exists "seller" drop column if exists "country_code";');
        this.addSql('alter table if exists "seller" drop column if exists "tax_id";');
        this.addSql('alter table if exists "member_invite" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member_invite" alter column "email" drop not null;');
        this.addSql('alter table if exists "member" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member" alter column "email" set not null;');
    }
}
exports.Migration20250225083755 = Migration20250225083755;
//# sourceMappingURL=Migration20250225083755.js.map