exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('tb_abuse_report_type').del()
    .then(async function () {
      // Inserts seed entries
      return knex('tb_abuse_report_type').insert([
        makeAbuseReportType('201987376467846469810', 'Mensagens inapropriadas'),
        makeAbuseReportType('201987376467846469811', 'Fotos inadequadas'),
        makeAbuseReportType('201987376467846469812', 'Parece spam'),
        makeAbuseReportType('201987376467846469813', 'O usuário é menor de idade'),
        makeAbuseReportType('201987376467846469814', 'Outro')
      ])
    })
}

// Tools

function makeAbuseReportType(id, title) {
  return { id, title }
}
