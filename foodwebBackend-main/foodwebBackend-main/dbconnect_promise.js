const mongoose=require('mongoose');

const url = 'mongodb://0.0.0.0/foodweb';

mongoose.set('strictQuery', false);

mongoose.connect(url)
    .then((result) => {
        console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
    }).catch((err) => {
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
               process.exit();
    });


module.exports=mongoose;