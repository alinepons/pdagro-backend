exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('tb_user', function (table) {
            table.string('id').notNullable().primary()
            table.text('fullname').notNullable()
            table.text('email').unique().notNullable()
            table.text('password').notNullable()
            table.string('mobile')
            table.string('avatar')
            table.string('cpf')
            table.string('confirmationCode').notNullable()
            table.boolean('confirmed').notNullable().defaultTo(false)
            table.boolean('active').notNullable().defaultTo(true)
            table.boolean('blocked').notNullable().defaultTo(false)
            table.string('role').notNullable().defaultTo("user")
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('deleted_at').defaultTo(null)
        }).raw(`
        CREATE OR REPLACE FUNCTION tb_user_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
        NEW."updated_at"=now(); 
        RETURN NEW;
        END;
        $$ language 'plpgsql';
        `)
            .raw(`
        CREATE TRIGGER tb_user_updated_at BEFORE UPDATE
        ON ?? FOR EACH ROW EXECUTE PROCEDURE 
        tb_user_updated_at_column();
        `, ['tb_user']
            ),
        knex.schema.createTable('tb_session', function (table) {
            table.string('id').notNullable().primary()
            table.string('user').notNullable()
            table.text('token').notNullable()
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
        }).raw(`
        CREATE OR REPLACE FUNCTION tb_session_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
        NEW."updated_at"=now(); 
        RETURN NEW;
        END;
        $$ language 'plpgsql';
        `)
            .raw(`
        CREATE TRIGGER tb_session_updated_at BEFORE UPDATE
        ON ?? FOR EACH ROW EXECUTE PROCEDURE 
        tb_session_updated_at_column();
        `, ['tb_session']
            ),
        knex.schema.createTable('tb_company', function (table) {
            table.string('id').notNullable().primary()
            table.string('user').notNullable()
            table.string('name').notNullable()
            table.string('cnpj').notNullable()
            table.string('phone').notNullable()
            table.string('email').notNullable()
            table.string('website')
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
            table.timestamp('deleted_at').defaultTo(null)
        }).raw(`
        CREATE OR REPLACE FUNCTION tb_company_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
        NEW."updated_at"=now(); 
        RETURN NEW;
        END;
        $$ language 'plpgsql';
        `)
            .raw(`
        CREATE TRIGGER tb_company_updated_at BEFORE UPDATE
        ON ?? FOR EACH ROW EXECUTE PROCEDURE 
        tb_company_updated_at_column();
        `, ['tb_company']
            )
    ])
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTableIfExists('tb_user'),
        knex.schema.dropTableIfExists('tb_session'),
        knex.schema.dropTableIfExists('tb_company')
    ])
};
