export class Contact{

    constructor(public firstName:string, public lastName:string, public pnumber:number, public address:string, public bio:string, public url:string = "/assets/shapes.svg", public bday:string = "", public email = ""){}
    
    addIcon(URL:string){
      this.url = URL;
    }

    addBday(day:string){
      this.bday=day;
    }

    addEmail(email:string){
      this.email = email;
    }


    /*
    firstname:string;
    lastname:string;
    pnumber:number;
    address:string;
    bio:string;
  
    */
  /*
    constructor(public fn:string, public ln:string, public p:number){
      this.firstname = fn;
      this.lastname = ln;
      this.pnumber = p;
      this.address ="";
      this.bio="";
    }
  */
  }