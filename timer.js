function odliczanie()
{
      var dzisiaj = new Date();

      var dzien = dzisiaj.getDate();
      var miesiac = dzisiaj.getMonth()+1;
      var rok = dzisiaj.getFullYear() ;
      var godzina = dzisiaj.getHours();
      if (godzina<10) godzina="0"+godzina

      var minuta = dzisiaj.getMinutes();
      if (minuta<10) minuta="0"+minuta
      var sekunda = dzisiaj.getSeconds();
      if (sekunda<10) sekunda="0"+sekunda

      //wypisanie na ekran w miejsce bloku "clock" kompletnej daty
    document.getElementById("clock").innerHTML= dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;
    
    //Funckcja dla cyklicznego wywołania w JavaScripcie
    //podaje sie:"Nazwa funcji";czasodliczania do ponownego wywołania w ms
    setTimeout("odliczanie()",1000);
}