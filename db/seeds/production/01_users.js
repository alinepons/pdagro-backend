const bcrypt = require('bcrypt')

exports.seed = async function (knex) {

  const password = await bcrypt.hash('12345678', 10)

  return knex('tb_user').insert([
    makeUser(
      generateId,
      'Aline Pons',
      'alinepons@hotmail.com',
      password,
      '000000',
      true,
      true,
      false,
      'admin'
    )
  ])
}

const generateId = () => {
  const date = new Date()
  return date.toISOString().replace(/[-:\.TZ]/g, "")
}

function makeUser(id, fullname, email, password, confirmationCode, confirmed, active, blocked) {
  return { id, fullname, email, password, confirmationCode, confirmed, active, blocked }
}
