/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clientserver;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 *
 * @author Ezhil
 */
public class ServerThread extends Thread {
    
    Socket socket = null;
    BufferedReader br = null;
    
    ServerThread(Socket socket){
        this.socket = socket;
        initClientData();
    }
    
    @Override
    public void run(){
        try{
            InputStreamReader is = new InputStreamReader(socket.getInputStream());
            br = new BufferedReader(is);
            while(receive()){}
            System.out.println("Reading socket closing");
            is.close();
            socket.close();
        } catch(IOException e){
            e.printStackTrace();
        }
    }
    
    boolean receive(){
        JSONParser jParser = null;
        String iJobj = null;
        JSONObject jReadobj = null;
        try{
            iJobj = br.readLine();
            jParser = new JSONParser();
            if(iJobj!=null){
                jReadobj=(JSONObject)jParser.parse(iJobj);
                System.out.println("Message from Client "+ jReadobj.get("name") +": "+(Long)jReadobj.get("value"));
                return true;
            }else{
                System.out.println("Read Socket closing");
                closeSocket();
                return false;
            }
        }catch(Exception e){
            System.out.println("Read Socket closing"+e.getMessage());
            closeSocket();
            return false;
        }
    }
    
    void closeSocket(){
        try{
            br.close();
            socket.close();
        } catch(Exception e){
            System.out.println("Read Socket closing Problem"+e.getMessage());
        }
    }
    
    final void initClientData(){
        try{
            OutputStreamWriter os = new OutputStreamWriter(socket.getOutputStream(),StandardCharsets.UTF_8);
            JSONObject jWriteobj = new JSONObject();
            jWriteobj.put("name1", "sp_on");
            jWriteobj.put("value1",245);
            jWriteobj.put("name2", "sp_off");
            jWriteobj.put("value2",45);
            jWriteobj.put("name3", "mc_on");
            jWriteobj.put("value3",3455);
            jWriteobj.put("name4", "mc_off");
            jWriteobj.put("value4",2045);
            os.write(jWriteobj.toString());
            os.flush();
        }
        catch(IOException e){
            System.out.println("Write socket closing"+e.getMessage());
        }
    }
}
