/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package clientserver;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
/**
 *
 * @author Ezhil
 */
public class Server {

    /**
     * @param args the command line arguments
     */
    private static final int port = 5050;
    private static final String host = "192.168.7.1";
    public static void main(String[] args) throws IOException, ClassNotFoundException{
        // TODO code application logic here
        new Server().runServer();
    }
    
    public void runServer()throws IOException, ClassNotFoundException{
        ServerSocket serverSocket = new ServerSocket();
        serverSocket.bind(new InetSocketAddress(host,port));
        System.out.println("Server Ready....");
        while(true){
            Socket socket = serverSocket.accept();
            new ServerThread(socket).start();
        }
    }
    
}
