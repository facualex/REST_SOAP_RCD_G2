package xd.prueba;

public class Prueba01 {
    public static void main(String[] args){
        //datos
        String n1="Rodrigo Humberto Jose Alvarez Abello";
        String[] nombre = n1.split(" ");
            
        String[] ArAP = new String[2];
        String[] ArNOM = new String[nombre.length-2];
        
        for (int i=0 ;i< nombre.length-2;i++)
        {
            ArNOM[i]=nombre[i];
        }
        
        ArAP[0]= nombre[nombre.length-2];
        ArAP[1]= nombre[nombre.length-1];
        System.out.println("◐NOMBRES");
        for (int i=0 ;i< nombre.length-2;i++)
        {
        System.out.println("    ◐ NOMBRE "+ (i+1) + ": " + ArNOM[i]);
        }
        System.out.println("◐APELLIDOS");
        System.out.println("    ◐ APELLIDO 1: " + ArAP[0]);
        System.out.println("    ◐ APELLIDO 2: " + ArAP[1]);
        
        
    }
    
}
