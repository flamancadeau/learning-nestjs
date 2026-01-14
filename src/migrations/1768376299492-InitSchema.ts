import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1768376299492 implements MigrationInterface {
  name = 'InitSchema1768376299492';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "phone" character varying, "passwordHash" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'client', "status" character varying NOT NULL DEFAULT 'active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "lastLogin" TIMESTAMP, "companyId" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "registrationNo" character varying, "taxNo" character varying, "industry" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "rental_prices" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pricePerDay" numeric NOT NULL, "pricePerHour" numeric, "currency" character varying NOT NULL DEFAULT 'CNY', "startDate" TIMESTAMP, "endDate" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "rentalItemId" uuid, CONSTRAINT "PK_ded9c4da9597cd4206ede9b3614" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "rental_availabilities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "status" character varying NOT NULL DEFAULT 'available', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "rentalItemId" uuid, CONSTRAINT "PK_1d08979929bdc5a6c47771e4600" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "rental_items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "type" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "companyId" uuid, CONSTRAINT "PK_f612bed96ec3cb029dbf3705461" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "bookings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "totalPrice" numeric NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" uuid, "rentalItemId" uuid, CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "rental_prices" ADD CONSTRAINT "FK_df4528270280da945e4f914a01e" FOREIGN KEY ("rentalItemId") REFERENCES "rental_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rental_availabilities" ADD CONSTRAINT "FK_baaca33d29c39f8ea47888fe73b" FOREIGN KEY ("rentalItemId") REFERENCES "rental_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rental_items" ADD CONSTRAINT "FK_c8deac7d4c59586f6a3868f0ea4" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_ea203405627b9fb15023dd75661" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" ADD CONSTRAINT "FK_d3d914a730df2aea0eaf767363f" FOREIGN KEY ("rentalItemId") REFERENCES "rental_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_d3d914a730df2aea0eaf767363f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "bookings" DROP CONSTRAINT "FK_ea203405627b9fb15023dd75661"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rental_items" DROP CONSTRAINT "FK_c8deac7d4c59586f6a3868f0ea4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rental_availabilities" DROP CONSTRAINT "FK_baaca33d29c39f8ea47888fe73b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rental_prices" DROP CONSTRAINT "FK_df4528270280da945e4f914a01e"`,
    );
    await queryRunner.query(`DROP TABLE "bookings"`);
    await queryRunner.query(`DROP TABLE "rental_items"`);
    await queryRunner.query(`DROP TABLE "rental_availabilities"`);
    await queryRunner.query(`DROP TABLE "rental_prices"`);
    await queryRunner.query(`DROP TABLE "companies"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
