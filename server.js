const port=3911;
const express=require('express');
const bodyParser=require('body-parser');
const logger=require('morgan');
const cors=require('cors');
const session=require('express-session');

const config=require('./config');
const profCtrl=require('./controllers/profileCtrl');
const userCtrl=require('./controllers/userCtrl');



const app=express();

app.use(bodyParser.json());
const corsOptions={
  origin: 'http://localhost:'+port
};
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));


app.post('/api/login',userCtrl.login)

app.get('/api/profiles',profCtrl.getFriendsProfiles);


app.use(express.static(__dirname+'/public'));






app.listen(port, function(){
  console.log("Listening on port:",port);
});


//
