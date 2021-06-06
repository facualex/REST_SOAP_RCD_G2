package xd.ws;
import java.util.ArrayList;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

import xd.service.CalculaDV;
import xd.service.DNOM;


@WebService(serviceName = "WSdv")
public class WSdv {
    @WebMethod(operationName = "devolverDV")
    public String devolverDV(@WebParam(name = "n1") int n1)
    {
       CalculaDV service = new CalculaDV();
        String DV = CalculaDV.DV(n1);
        return (DV);
    }
 
    
  
    @WebMethod
    //@WebResult(name = "Nombres")
    public List<DNOM> SplitNombrePropio(@WebParam(name = "n1") String n1)
    {
        List<DNOM> NOMBRE = new ArrayList<>();  
        String n2=n1;
        String[] nombre = n2.split(" ");
        String[] ArNOM = new String[nombre.length-2];
 
        System.arraycopy(nombre, 0, ArNOM, 0, nombre.length-2);
        String[] ArAP = new String[2];
        ArAP[0]= nombre[nombre.length-2];
        ArAP[1]= nombre[nombre.length-1];
        DNOM nombres= new DNOM(ArNOM,null);
        DNOM nombres2= new DNOM(null,ArAP);
        NOMBRE.add(nombres);
        NOMBRE.add(nombres2);
       
        return NOMBRE;
        
    }
    
    
}
    
  
    
    
 
