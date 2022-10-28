import { Component } from '@angular/core';
import { single, skip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Calculator';
  itWorksDisplay: boolean = true;
  dotCheck: boolean = true;
  arele:number = 0;

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
    else if(number=="0"&&this.result[0]=="0"){
      if(this.result.includes('.')){
        this.result += "0";
      }
      else{
        skip;
      }
    }
    else if(this.result == "" && number=="."){
      skip;
    }
    else{
      this.result += number;
    }
  }

  islem(operations : string):void {

    if(this.display.endsWith("x")||this.display.endsWith("-")||this.display.endsWith("^")||this.display.endsWith("√")||
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

  deletex():void {
    if(!this.result){
      this.display =  this.display.substring(0,this.display.length-1);
    }
    else{
      this.result =  this.result.substring(0,this.result.length-1);
    }
  }

  answer():void {
     // 0.2 +0.1 = 0.30000000000000004 hatasi
     if(this.display.includes(".") || this.result.includes(".")){
      if(this.display.length > this.result.length){
        this.arele = this.display.length - 3;
      }
      else{
        this.arele = this.result.length-2; 
      }
     }
     else{
        this.arele = 0;
     }
     

    if(this.result.includes("+")||this.result.includes("-")||this.result.includes("x")
    ||this.result.includes("÷")||this.result.includes("%")||this.result.includes("√")||this.result.includes("^")){

    }
    else{
      if(this.display.includes('+')){
        this.display =  ((Number(this.display.substring(0,this.display.length-1)) + Number(this.result)).toFixed(this.arele)).toString();
        //this.display = (Number(this.display.substring(0,this.display.length-1)) + Number(this.result)).toString();
      }
      else if(this.display.includes('-')){
        this.display =  ((Number(this.display.substring(0,this.display.length-1)) - Number(this.result)).toFixed(this.arele)).toString();
      }
      else if(this.display.includes('x')){
        this.display =  ((Number(this.display.substring(0,this.display.length-1)) * Number(this.result)).toFixed(this.arele+3)).toString();
      }
      else if(this.display.includes('÷')){
        this.display =  (Number(this.display.substring(0,this.display.length-1)) / Number(this.result)).toString();
      }
      else if(this.display.includes('%')){
        this.display =  (Number(this.display.substring(0,this.display.length-1)) % Number(this.result)).toString();
      }
      else if(this.display.includes('√')){
        this.display =  (Math.sqrt(Number(this.display.substring(0,this.display.length-1)))).toString();
      }
      else if(this.display.includes('^')){
        this.display =  Math.pow(Number(this.display.substring(0,this.display.length-1)) , Number(this.result)).toString();
      }
      
    }
    this.result = "";

    if(this.display.includes(".")){
      if(this.display.endsWith("0")){
        this.favela();
      }
    }

    


  }
  // 0.1123000 sondaki sıfırları silme
  favela():void{

    for(let i=0;i<this.display.length;i++){
      if(this.display.includes(".")){
        if(this.display.endsWith("0")){
          this.display = this.display.substring(0,this.display.length-1);
        }
        else{
          break;
        }
      }
    }


    
  }




  sqrt():void {
    if(this.result.includes("+")||this.result.includes("-")||this.result.includes("x")
    ||this.result.includes("÷")||this.result.includes("%")||this.result.includes("√")||this.result.includes("^")){

    }
    else{
      if(!this.result){
        this.display =  (Math.sqrt(Number(this.display)).toString());
      }
      else{
        this.display =  (Math.sqrt(Number(this.result)).toString());
        this.result = "";
      }
    }
  }
}
