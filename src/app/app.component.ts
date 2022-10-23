import { Component } from '@angular/core';
import { skip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Calculator';

  itWorksDisplay: boolean = true;

  display : string = "";
  result : string = "Result";

  ekleme(number: string):void {
      
    if(this.itWorksDisplay){
      this.itWorksDisplay = false;
      this.result = number;
    }
    else if(this.result.startsWith(".")){
      this.result = "";
    }
    else if(this.result.endsWith(".")&& number == "."){}
    else if(this.result.includes(".")&&number =="."){}
    else if(number=="0"&&this.result[1]=="0"){
      this.result = this.result.substring(0,this.result.length-1);
      skip;
    }
    else if(this.result == "" && number=="."){
      skip;
    }
    else{
      this.result += number;
    }
  }

  islem(operations : string):void {

    if(this.display.endsWith("x")||this.display.endsWith("-")||
       this.display.endsWith("+")||this.display.endsWith("÷")||this.display.endsWith("%")){
        this.result += "";
    }
    // else if(this.display.startsWith("x")||this.display.startsWith("-")||
    //    this.display.startsWith("+")||this.display.startsWith("÷")||this.display.startsWith("%")){
    //     this.result = "";
    // }
    else if(this.result == "Result"){
      this.result = "";
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
    if(this.result.includes("+")||this.result.includes("-")||this.result.includes("x")||this.result.includes("÷")||this.result.includes("%")){

    }
    else{
      if(this.display.includes('+')){
        this.display = (Number(this.display.substring(0,this.display.length-1)) + Number(this.result)).toString();
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
    }
    this.result = "";
  }
}
