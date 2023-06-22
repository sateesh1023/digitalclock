function digiclk()
{
    var date=new Date();
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dt=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
       hh=12;
    }
    if(mo==0)
    {
       mo="Jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="March"
    }
    else if(mo==3)
    {
        mo="APRIL"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    } else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    } else 
    {
        mo="Dec"
    }
    
    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundImage="url()"
        break;

        case 1:day="Monday"
        document.body.style.backgroundImage="url( )"
        break;

        case 2:day="Thusday"
        document.body.style.backgroundImage="url()"
        break;

        case 3:day="Wedneday"
        document.body.style.backgroundImage="url()"
        break;

        case 4:day="Thursday"
        document.body.style.backgroundImage="url()"
        break;

        case 5:day="Friday"
        document.body.style.backgroundImage="linear-gradient(red,blue)"
        break;

        case 6:day="Saturday"
        document.body.style.backgroundImage="url()"
        break;
    }

    document.getElementById("DATE").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("TIME").innerHTML=`${hh}:${mm}${am_pm}`;
    document.getElementById("DAY").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;   
    setTimeout(digiclk,1000)
}
digiclk()