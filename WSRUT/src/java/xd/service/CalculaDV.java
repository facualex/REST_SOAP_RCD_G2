
package xd.service;
public class CalculaDV {

    public static String DV(int n1) 
    {
     int n,b,c,d,e,f,g,h,i;
     int A=n1/10000000; //se guarda el primer numero
     n=n1%10000000;
     int B=n/1000000;
     n=n%1000000;
     int C=n/100000;
     n=n%100000;
     int D=n/10000;
     n=n%10000;
     int E=n/1000;
     n=n%1000;
     int F=n/100;
     n=n%100;
     int G=n/10;
     n=n%10;
     
     b=A*3; c=B*2; d=C*7; e=D*6; f=E*5; g=F*4; h=G*3; i=n*2;
     int suma=b+c+d+e+f+g+h+i;
     int division= suma/11;
     int resto=suma%11;
     int total=11-resto;
     
     if(total == 10) {
         return("K");
     }else{
        if(total == 11) {
            return("0");
        }else{
            String stotal=total+"";
            return (stotal);
        }
      }

    }
        
   
}
