
public class TomadaDeDoisPinos { 	
  public void ligarNaTomadaDeDoisPinos() { 		
    System.out.println("Ligado na Tomada de Dois Pinos"); 	
    } 
  } 
  
  public class TomadaDeTresPinos { 	
    public void ligarNaTomadaDeTresPinos() { 		
      System.out.println("Ligado na Tomada de Tres Pinos"); 	
    }  
  } 
  
  public class AdapterTomada extends TomadaDeDoisPinos { 	
    private TomadaDeTresPinos tomadaDeTresPinos; 	
    
    public AdapterTomada(TomadaDeTresPinos tomadaDeTresPinos) { 		
      this.tomadaDeTresPinos = tomadaDeTresPinos; 	
    } 	
    
    public void ligarNaTomadaDeDoisPinos() { 		
      tomadaDeTresPinos.ligarNaTomadaDeTresPinos(); 	
    } 
  }


  //Adapter xml to json - JAVA

  public class XMLToJsonAdapter implements JsonParser { 	
    private XMLParser xmlParser; 	
    
    public XMLToJsonAdapter(XMLParser xmlParser) { 		
      this.xmlParser = xmlParser; 	
    } 	
    
    public String parse(String text) { 		
      String xml = text; 		
      String json = xmlParser.parseXML(xml); 		
      return json; 	
    } 
  }

  //Adaapter xml to json node js

  var xmlToJsonAdapter = { 	
    parse: function(xml) { 		
      var json = xmlParser.parseXML(xml); 		
      return json; 	
    } 
  }