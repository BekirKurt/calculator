import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  title = 'Calculator';

  itWorksDisplay: boolean = true;
  itWorksResult: boolean = true;

  display : string = "";
  result : string = "Result";



  ekleme(number: string):string {
    if(this.itWorksDisplay){
      this.itWorksDisplay = false;
      this.result = "";
      return "";
    }
    else if(this.result.startsWith(".")){
      return this.result = "";
    }
    // else if(this.result.endsWith("0")){
    //    return "";
    // }
    else{
      
      return this.result += number;
    }
  
  }

  islem(operations : string):void {

    if(this.display.endsWith("x")||this.display.endsWith("-")||
       this.display.endsWith("+")||this.display.endsWith("÷")||this.display.endsWith("%")){

    }
    else{
      this.display += this.result + operations;
      this.result = "";
    }


    
  }
  
  allClear():void{
    this.display = "";
    this.result = "";
  }
  

  answer():void {
    if(this.display.includes('+')){
        this.display =  (Number(this.display.substring(0,this.display.length-1)) + Number(this.result)).toString();
    }
    else if(this.display.includes('-')){
      this.display =  (Number(this.display.substring(0,this.display.length-1)) - Number(this.result)).toString();
    }
    else if(this.display.includes('x')){
      this.display =  (Number(this.display.substring(0,this.display.length-1)) * Number(this.result)).toString();
    }
    else if(this.display.includes('÷')){
      this.display =  (Number(this.display.substring(0,this.display.length-1)) / Number(this.result)).toString();
    }
    else if(this.display.includes('%')){
      this.display =  (Number(this.display.substring(0,this.display.length-1)) % Number(this.result)).toString();
    }
    this.result = "";
  }
}
