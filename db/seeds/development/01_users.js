const bcrypt = require('bcrypt')

exports.seed = async function (knex) {

  const password = await bcrypt.hash('12345678', 10)
  return knex('tb_user').insert([

    makeUser(
      generateId,
      'Adriana',
      'adriana@reacaosistemas.com.br',
      password,
      true,
      '01/01/1990',
      'F',
      '',
      -29.9795976,
      -51.1889283,
      'A',
      18,
      70,
      10,
      true,
      true,
      false,
      false,
      true,
      [
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        "https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      ])
  ])
}

// Tools

function makeUser(id, firstname, lastname, email, password, confirmed, birth, sex, about, latitude, longitude, lookingFor, minAge, maxAge, maxDistance, showAge, showDistance, invisible, online, active, photos) {
  return { id, firstname, lastname, email, password, confirmed, birth, sex, about, latitude, longitude, lookingFor, minAge, maxAge, maxDistance, showAge, showDistance, invisible, online, active, photos }
}
