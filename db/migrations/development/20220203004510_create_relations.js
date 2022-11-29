
exports.up = function(knex) {
	return Promise.all([
		knex.schema.table('tb_session', function (table) {
			table.foreign('user').references('tb_user.id')
		}),
		knex.schema.table('tb_company', function (table) {
			table.foreign('user').references('tb_user.id')
		})
	])
};

exports.down = function(knex) {
	return Promise.all([
		knex.schema.table('tb_session', function (table) {
			table.dropForeign('user')
		}),
		knex.schema.table('tb_company', function (table) {
			table.dropForeign('user')
		})
	])
};
