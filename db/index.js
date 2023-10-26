const Sequelize = require('sequelize')


sequelize = new Sequelize(
    'deadtests',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        define: {
            timestamps: false
        }
    }
);

// db entities representation
const db= {}
db.answers = require('../models/answer.model')(sequelize)
db.questions = require('../models/question.model')(sequelize)
db.results = require('../models/result.model')(sequelize)
db.tests = require('../models/test.model')(sequelize)
db.users = require('../models/user.model')(sequelize)


// relations
db.questions.hasMany(db.answers, {onDelete: "cascade"})
db.tests.hasMany(db.questions, {onDelete: "cascade"})
db.tests.hasMany(db.results, {onDelete: "cascade"})
db.users.hasMany(db.results, {onDelete: "cascade"})


sequelize.sync().then(()=>{
    console.log("Tables have been created");
}).catch(err=>console.log(err));


module.exports = {
    sequelize: sequelize,
    db: db
}
