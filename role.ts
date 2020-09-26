role(x:Array<string>):boolean{
    let d=false;
    let userRole=JSON.parse(localStorage.getItem('token'));
    var userRole2=userRole.role as Array<string>;
    userRole2.forEach(element => {
      if (userRole2.includes(element)) {
        d=true;
        return;
      }else{
        d=false;
      }
    });
    return d;
  }

  getRoles(x:Array<string>):boolean{
    var isMatch=false;
    let token=JSON.parse(localStorage.getItem('token').split('.')[1]);
    var userRole=token.role;
    x.forEach(element => {
    if (userRole==element) {
      isMatch=true;
    } 
    });
    return isMatch;
  }
  

  /*******************/ 
  if (!localStorage.getItem('auth')) {
    this._router.navigate(['/login']);
    
    return false;

  }else{
    const ro=next.data['role'] as Array<string>;
    if (ro) {
      const match=this._AuthService.role(ro);
      if (match) {
        return true;
      }else{
        this._router.navigate(['/login']);
      }
    }
    let roles=next.data['permittedRoles']as Array<string>
    if (roles) {
      if (this._AuthService.getRoles(roles)) {
      }
    }

  }
  /**** */
  {path:'home',component:PageinationComponent,canActivate:[AuthGuard],data:{role:['Admin']}},
