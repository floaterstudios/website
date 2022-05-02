var position;
window.onload = function()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    menus.style.height = "0px";

    let srtfh = footerLink(true);
    let iogjdf = footerLink();
    document.getElementsByClassName("footerLink")[0].href = srtfh;
    document.getElementsByClassName("footerLink")[1].href = srtfh;
    document.getElementsByClassName("footerLink")[0].innerText = iogjdf;
    document.getElementsByClassName("footerLink")[1].innerText = iogjdf;

    document.getElementById("navInfo").innerText = iogjdf;
    
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
    //  setTimeout(function(){
    //      document.getElementById("loadspin").style.opacity = 0;
    //      document.getElementById("logoImg").style.width = "450px";
    //      document.getElementById("logoImg").style.marginTop = "2%";
    //      setTimeout(function(){
              document.getElementsByTagName("body")[0].style.overflow = "auto";
              document.getElementsByTagName("body")[0].style.position = "relative";
              document.getElementsByTagName("nav")[0].style.zIndex = "15";
              document.getElementsByTagName("nav")[0].style.opacity = "1";
              document.getElementById("contentDisplay").style.zIndex = "1";
              document.getElementById("contentDisplay").style.opacity = "1";
              document.getElementsByTagName("footer")[0].style.zIndex = "1";
              document.getElementsByTagName("footer")[0].style.opacity = "1";
    //          document.getElementById("loadspin").remove();
    //          position = Object.keys(comics).length - 1;
    //          comic(0);
    //      }, 1000);

    //  }, 1000);
}

function menu()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    if (menus.clientHeight == "375") {
        menus.style.height = "0px";
    }
    else {
        menus.style.height = "375px";
    }
    return true;
}
function comic(direction)
{
    position = position + direction;
    if (position === -1) {position = Object.keys(comics).length - 1;}
    if (position === Object.keys(comics).length) {position = 0;}
        console.log(position);
    var urlString = "url('comics/"+comics[position].FileName+"')";
    console.log(urlString);
    document.getElementsByClassName("comic")[0].style.backgroundImage = urlString;
    document.getElementById("comicTitle").innerHTML = comics[position].Title;
    document.getElementById("comicDate").innerHTML = comics[position].Date;
}
function footerLink(ifojds)
{
    let o = "ew";
    let idf = "g";
    let c = "o";
    let efjei = "n";
    let idje = "er"
    let ei = "s";
    let ehdidoe = "@";
    let a = "ma";
    let ioda = "a";
    let l = "f";
    let agh = "c"
    let edds = "u";
    let dats = ".";
    let mn = "t";
    let ied = "m";
    let d = "i";
    let ijd = "d";
    let z = "l";
    let x = "r";

    if (ifojds) {
        return a+d+z+c+":"+l+z+c+ioda+mn+idje+ei+mn+edds+ijd+d+c+ei+ehdidoe+idf+a+d+z+dats+agh+c+ied;
    } else {
        return l+z+c+ioda+mn+idje+ei+mn+edds+ijd+d+c+ei+ehdidoe+idf+a+d+z+dats+agh+c+ied;
    }

    //document.getElementsByClassName("footerLink")[0].href = a+d+z+c+":"+l+z+c+ioda+mn+idje+ei+mn+edds+ijd+d+c+ei+ehdidoe+idf+a+d+z+dats+agh+c+ied;
    //document.getElementsByClassName("footerLink")[1].href = a+d+z+c+":"+l+z+c+ioda+mn+idje+ei+mn+edds+ijd+d+c+ei+ehdidoe+idf+a+d+z+dats+agh+c+ied;
    //document.getElementsByClassName("footerLink")[0].innerHTML = l+z+c+ioda+mn+idje+ei+mn+edds+ijd+d+c+ei+ehdidoe+idf+a+d+z+dats+agh+c+ied;
    //document.getElementsByClassName("footerLink")[1].innerHTML = l+z+c+ioda+mn+idje+ei+mn+edds+ijd+d+c+ei+ehdidoe+idf+a+d+z+dats+agh+c+ied;
}
