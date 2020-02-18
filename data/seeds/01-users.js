const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'RogerRabbit',
      password: bcrypt.hashSync('I<3J3ss!c4', 12),
      department: 'Talent'
    },
    {
      username: 'BabyHerman',
      password: bcrypt.hashSync('I<3c!g4rs', 12),
      department: 'Talent'
    },
    {
      username: 'JessicaRabbit',
      password: bcrypt.hashSync('I<3R0g3r!', 12),
      department: 'Accounting'
    },
    {
      username: 'EddieValiant',
      password: bcrypt.hashSync('D3t3ct1v3', 12),
      department: 'Legal'
    },
    {
      username: 'JudgeDoom',
      password: bcrypt.hashSync('Ruthl3ss1', 12),
      department: 'Legal'
    },
    {
      username: 'BennyTheCab',
      password: bcrypt.hashSync('Vr00m!', 12),
      department: 'Transportation'
    },
    {
      username: 'Dolores',
      password: bcrypt.hashSync('0rd3rUp!', 12),
      department: 'Food Service'
    },
    {
      username: 'LtSantino',
      password: bcrypt.hashSync('L13ut3n4nt', 12),
      department: 'Legal'
    },
    {
      username: 'TeddyValiant',
      password: bcrypt.hashSync('D34db33f', 12),
      department: 'Legal'
    },
    {
      username: 'RKMaroon',
      password: bcrypt.hashSync('C4rt00n$', 12),
      department: 'Executive'
    },
    {
      username: 'MarvinAcme',
      password: bcrypt.hashSync('G4gK1ng', 12),
      department: 'Executive'
    },
  ]);
};
