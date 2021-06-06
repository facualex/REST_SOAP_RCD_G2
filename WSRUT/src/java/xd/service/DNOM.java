package xd.service;
import javax.jws.WebResult;

public class DNOM {
    
    private String[] ArNOM;
    private String[] ArAPE;
    
    public DNOM(){
        
    }
    
    public DNOM(String[] ArNOM,String[] ArAPE){
       
        this.ArNOM=ArNOM;
        this.ArAPE=ArAPE;

    }
    
   
    public String[] getNOMBRE(){
        return ArNOM;
    }
    
    public void setNOMBRE(String[] id) {
        this.ArNOM = id;
    }
    
     public String[] getAPELLIDO(){
        return ArAPE;
    }
  
    public void setAPELLIDO(String[] id) {
        this.ArAPE = id;
    }
}
