import { Sequelize } from 'sequelize';

const db = new Sequelize('crud_image_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;

(async () => {
  db.sync();
})();