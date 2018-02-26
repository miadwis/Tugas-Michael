function hitung()
{
    var angka1=parseInt(document.getElementById("angka1").value);
    var angka2=parseInt(document.getElementById("angka2").value);
    var hasil;
    var tampil;
    if(isNaN(angka1)==true || isNaN(angka2)==true || angka1=="" || angka2=="")
    {
    
        document.getElementById("result").innerHTML="Kesalahan di input angka1/angka2";
        erase();
    }
    else
    {
        if(document.getElementById("plus").checked)
        {
            hasil=angka1+angka2;
            tampil=angka1+"+"+angka2+"="+hasil;
            document.getElementById("result").innerHTML=tampil;
        }
        else if(document.getElementById("minus").checked)
        {
            
            hasil=angka1-angka2;
            tampil=angka1+"-"+angka2+"="+hasil;
            document.getElementById("result").innerHTML=tampil;
        }
        else if(document.getElementById("multi").checked)
        {
           
            hasil=angka1*angka2;
            tampil=angka1+"*"+angka2+"="+hasil;
            document.getElementById("result").innerHTML=tampil;
        }
        else if(document.getElementById("div").checked)
        {
            hasil=angka1/angka2;
            tampil=angka1+"/"+angka2+"="+hasil;
            document.getElementById("result").innerHTML=tampil;
        }
        else
        {
      
        document.getElementById("result").innerHTML="Operasi perhitungan belum dipilih";
        erase();
        }
    }
}
function quiz()
{

    var score=0;
    var total=5;

    if(document.getElementById("mon1ans4").checked)
    {
     
        score=score+1;
    }
    if(document.getElementById("mon2ans2").checked)
    {
     
        score=score+1;
    }
    if(document.getElementById("mon3ans3").checked)
    {
     
        score=score+1;
    }
    if(document.getElementById("mon4ans2").checked)
    {
     
        score=score+1;
    }
    if(document.getElementById("mon5ans4").checked)
    {
     
        score=score+1;
    }

alert("Score anda "+score+" dari 5");
document.getElementById("hasil").innerHTML="Score anda"+score+" dari 5";

}
function erase()
{
    document.getElementById("angka1").value="";
    document.getElementById("angka2").value="";

    document.getElementById("plus").checked=false;
    document.getElementById("minus").checked=false;
    document.getElementById("multi").checked=false;
    document.getElementById("div").checked=false;
    document.getElementById("operasi").innerHTML=null;
 
}
function gantiop()
{
    if(document.getElementById("plus").checked)
    {
        document.getElementById("operasi").innerHTML="+";
    }
    else if(document.getElementById("minus").checked)
    {
        document.getElementById("operasi").innerHTML="-";
    }
    else if(document.getElementById("multi").checked)
    {
        document.getElementById("operasi").innerHTML="*";
    }
    else if(document.getElementById("div").checked)
    {
        document.getElementById("operasi").innerHTML="/";
    }
    else
    {

    }
}