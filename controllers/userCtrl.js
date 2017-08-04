let users=[
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  },
  {
    name: 'asdf',
    password: '1234',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports={
  login(req,res,next){
    console.log(req.body);
    if(!req.body.name||!req.body.password){
      res.json({userFound:false})
      return;
    }
    let currentUser=users.find(cur=>cur.name==req.body.name)
    if(!currentUser){
      res.json({userFound:false})
      return;
    }
    if(currentUser.password==req.body.password){
      req.session.currentUser=currentUser;
      res.json({userFound:true})
    }else{
      res.json({userFound:false});
    }
  }
}
