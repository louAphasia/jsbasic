//WPAD Spoofing
function FindProxyForURL(url,host) {
    //w przypadku zgodnosci adresu
    if(shExpMatch(host,"*.z3s.com.pl"))
        return "DIRECT";
    //w przypadku zycia FTP lub adresu ze wskazanej podsieci laczy sie przez port 8080 serwera proxy.z3s.com.pl
if(url.substring(0,4)=="ftp:"|| isInNet(myIP(),"10.0.0.0","255.255.255.0"))
    return "PROXY proxy.z3s.com.pl:8080";
//w innych przypadkach laczy sie przez port 80 serwera 1.2.3.4 a jesli sie nie da bezposrednio
return "PROXY 1.2.3.4:80; DIRECT";}


