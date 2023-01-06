var agora = new Date()
var hora = agora.getHours()


if(hora < 6){
    document.body.style.backgroundImage = "linear-gradient(to bottom, #B5B6BA 0%, 10.688836127519608%, #D7BBAF 21.377672255039215%, 31.175772100687027%, #C0BBB8 40.97387194633484%, 46.320268511772156%, #859CAE 51.66666507720947%, 63.055554032325745%, #647589 74.44444298744202%, 87.22222149372101%, #211A21 100%)"
    document.querySelector('.hour').textContent = "DAWN"
    document.querySelector('hour').style.fontFamily = "Cormorant Garamond"
    document.div.style.backgroundImage ="linear-gradient(to right, #fdfcfb, #f6f1ed, #f0e7df, #e9dcd1, #e3d2c4)"
} else if (hora < 12){
    document.body.style.backgroundImage = "linear-gradient(to bottom, #83AAA9 0%, 14.215686917304993%, #B7C5AE 28.431373834609985%, 36.274510622024536%, #AC9F72 44.11764740943909%, 53.431373834609985%, #C7A833 62.745100259780884%, 81.37255012989044%, #484E2C 100%)" 
    document.querySelector('.hour').textContent = "MORNING"
    document.querySelector('hour').style.fontFamily = "Cormorant Garamond"
    document.div.style.backgroundImage ="linear-gradient(to right, #fdfcfb, #f6f1ed, #f0e7df, #e9dcd1, #e3d2c4)"
} else if (hora < 19){
    document.body.style.backgroundImage = "linear-gradient(to bottom, #D0EBD8 0%, 5.047506093978882%, #E4F0D2 10.095012187957764%, 17.04275533556938%, #E9EED0 23.990498483181%, 44.833727926015854%, #68530F 65.67695736885071%, 77.4346798658371%, #373100 81.3539206981659%, 90.67696034908295%, #181608 100%)" 
    document.querySelector('.hour').textContent = "AFTERNOON"
    document.querySelector('hour').style.fontFamily = "Cormorant Garamond"
    document.div.style.backgroundImage ="linear-gradient(to right, #fdfcfb, #f6f1ed, #f0e7df, #e9dcd1, #e3d2c4)"
} else{
    document.body.style.backgroundImage = "linear-gradient(to bottom, #345A63 0%, 11.944444477558136%, #254C51 23.888888955116272%, 34.99999940395355%, #192741 46.11110985279083%, 55.27777820825577%, #16161E 64.4444465637207%, 76.11111104488373%, #12090A 87.77777552604675%, 93.88888776302338%, #141414 100%)"
    document.querySelector('.hour').textContent = "NIGHT" 
    document.querySelector('hour').style.fontFamily = "Cormorant Garamond"
    document.div.style.backgroundImage ="linear-gradient(to right, #fdfcfb, #f6f1ed, #f0e7df, #e9dcd1, #e3d2c4)"
}