
function fajr(h, m)
{
h = salat().sunrise.split(":")[0];
m = salat().sunrise.split(":")[1]
now.setHours(h, m);
    switch (now.getMonth()) {
    case 0:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 85.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 84.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 83.8*60*1000)
        }
        break;
    case 1:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 82*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 80.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 80*60*1000)
        }
        break;
    case 2:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 80*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 80.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 80.8*60*1000)
        }
        break;
    case 3:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 81.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 83.8*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.8*60*1000)
        }
        break;
    case 4:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 88.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 92.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 96.8*60*1000)
        }
        break;
    case 5:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 100*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 101.6*60*1000)
        }
        else
        {
        fjr = new Date(now - 102*60*1000)
        }
        break;
    case 6:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 101*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 97.8*60*1000)
        }
        else
        {
        fjr = new Date(now - 94.8*60*1000)
        }
        break;
    case 7:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 91.6*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 83.2*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.2*60*1000)
        }
        break;
    case 8:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 81.4*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 81.2*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.2*60*1000)
        }
        break;
    case 9:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 79.4*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 79.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 76.4*60*1000)
        }
        break;
    case 10:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 79.4*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 81*60*1000)
        }
        else
        {
        fjr = new Date(now - 81.2*60*1000)
        }
        break;
    case 11:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 83.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 84.8*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.4*60*1000)
        }
        break;
}
return ("0"+fjr.getHours()) + ":" + (fjr.getMinutes() < 10 ? "0"+fjr.getMinutes() : fjr.getMinutes())
}
