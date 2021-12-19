const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedMovies = require('./movieData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedMovies();

  process.exit(0);
};

seedAll();