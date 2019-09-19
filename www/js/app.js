/*****************************
Autor:Jesus Omar Rodriguez Hernandez
Fecha Modificacion: 07/07/2018
Archivo JS
******************************/
var $$ = Dom7;
var pictureSource;
var destinationType;


var _fecha = "";
var _causa = "";
var _folio = "";

var _lugar = "";
var _caracteristicas = "";
var _placa = "";
var _persona = "";
var _garantia = "";
var _img = "";


var app7 = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Sistema de Infraccion',
  // App id
  id: 'com.apizaco.app',
  // Enable swipe panel
  /*panel: {
    swipe: 'left',
  },*/
  // Add default routes
  routes: routes
  // ... other parameters
});


var mainView = app7.views.create('.view-main'); 


var app = {


    autenticado: false,
    usuario:"",
    password:"",
    hostname:"http://www.apiza.co",
    name:"",
    nombre:"",
    subject:"",
    message:"",
    mail:"",
    numero:"",
    calle:"",
    comentario:"",
    nombre2:"",
    numero2:"",
    calle2:"",
    comentario2:"",
    dias:"",
    dia:"",
    placa:"",
    calle:"",
    modelo:"",
 



    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;


 console.log("VARIABLE AUTENTICADO:"+window.localStorage.getItem("autenticado"));


         if(window.localStorage.getItem("autenticado")=="true"){

                mainView.router.navigate('/home/',{animate:false});
         }
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    },
        loginAccess:function(){


      this.usuario = $$('#usuario').val();
      this.password = $$('#password').val();


      if(this.usuario == "" || this.password == ""){
         
         app7.dialog.alert('Debes de ingresar usuario y/o contraseña');
           
      }else{

        app7.preloader.show();
        

        app7.request({
           url: this. hostname +'/mplay/api/login.php',
           data:{username:this.usuario,password:this.password},
           method:'POST',
           crossDomain: true,
           success:function(data){
            
            app7.preloader.hide();

            var objson = JSON.parse(data);
            if(objson.data =="Autenticado"){

            
            window.localStorage.setItem("autenticado", "true");
            this.autenticado = window.localStorage.getItem("autenticado");
            
            mainView.router.navigate('/home/',{animate:true});
            }else{
                app7.dialog.alert("Usuario o Contraseña Incorrectos");
         
            }
            
           
           },
           error:function(error){


            app7.preloader.hide();
            app7.dialog.alert("Hubo un error por favor intenta nuevamente");
            mainView.router.navigate('/home/',{animate:true});
            console.log(data);
           }
           
        });
             
          

      }

    },
    
    
    RegisterAccess:function(){

      mainView.router.navigate('/home/',{animate:true});
    
    },
    RegisterAccess2:function(){

      mainView.router.navigate('/tarjeta2/',{animate:true});
    
    },
    RegisterAccess78:function(){

      mainView.router.navigate('/home/',{animate:true});
    
    },
    Detencion:function(){

      mainView.router.navigate('/detencion/',{animate:true});
    app7.dialog.alert("Atencion esta apunto de levantar una Infraccion");
    },
    Detencion1:function(){

      mainView.router.navigate('/detencion1/',{animate:true});

    
    },
    Detencion2:function(){

      mainView.router.navigate('/detencion2/',{animate:true});
    
    },
Placa:function(){

  mainView.router.navigate('/placa2/',{animate:true});

},
Placa2:function(){

  mainView.router.navigate('/placa/',{animate:true}); 
  

},

Placa3:function(){

  mainView.router.navigate('/placa3/',{animate:true});
  this.nombre2=$$('#nombre2').val();
  this.numero2=$$('#numero2').val();
  this.calle2=$$('#calle2').val();
  this.comentario2=$$('#comentario2').val();

  app7.request({
  url: this.hostname+'/mplay/api/semaforo.php',
  data:{nombre2:this.nombre2,numero2:this.numero2,calle2:this.calle2,comentario2:this.comentario2},
  method:'POST',
  crossDomain: true,
  success:function(data){
    app7.preloader.hide();

    var objson = JSON.parse(data);
    app7.dialog.alert("Gracias por comunicarte con el presidente en breve nos comunicaremos contigo");
    mainView.router.navigate('/home/',{animate:true});

  },
  error:function(error){
    app7.preloader.hide();
    
    console.log(error);

}
});
},
    placas4:function(){
  this._causa=$$('#_causa').val();
  
  app7.request({
  url: this.hostname+'/mplay/api/negocios.php',
  data:{_causa:this._causa},
  method:'POST',
  crossDomain: true,
  success:function(data){
    app7.preloader.hide();

    var objson = JSON.parse(data);
    app7.dialog.alert("REGISTRO ENVIADO EXITOSAMENTE");
    mainView.router.navigate('/home/',{animate:true});

  },
  error:function(error){
    app7.preloader.hide();
    app7.dialog.alert("Atencion esta apunto de levantar una infraccion");
    console.log(error);

}
});
    },
    
    
    placas:function(){
 this._fecha=$$('#_fecha').val();
     this._folio=$$('#_folio').val();
  this._causa=$$('#_causa').val();
    this._causa2=$$('#_causa2').val();

  this._lugar=$$('#_lugar').val();
  this._caracteristicas=$$('#_caracteristicas').val();
  this._placa=$$('#_placa').val();
  this._persona=$$('#_persona').val();
  this._garantia=$$('#_garantia').val();
 
   
   //SOLO FALTA ENVIAR LA VARIABLE COSTO

   var arrCausa = this._causa.split("|");
   var _costo = arrCausa[1];

   //alert(_costo);

   var arrCausa2 = this._causa2.split("|");
  // var _costo2 = this._causa2[1];
      var _costo2 = arrCausa2[1];
    // alert(this._fecha);
         //alert(this._folio);

  var _agente = this.usuario;
  //app7.dialog.alert("Atencion esta apunto de levantar  infraccion");


  app7.request({

  url: this.hostname+'/mplay/api/infracciones.php',
  data:{_fecha:this._fecha,_causa:this._causa,_costo:_costo,_causa2:this._causa2,_costo2:_costo2,_lugar:this._lugar,_caracteristicas:this._caracteristicas,_placa:this._placa,_persona:this._persona,_garantia:this._garantia,_agente:_agente,_folio:this._folio},
  method:'POST',

  crossDomain: true,
  success:function(data){
    app7.preloader.hide();

    var objson = JSON.parse(data);
    app7.dialog.alert("Infraccion levantada exitosamente");
    //mainView.router.navigate('/preview/',{animate:true});
    Preview();

  },
  error:function(error){
    app7.preloader.hide();
   // app7.dialog.alert("Atencion esta apunto de levantar una infraccion");
    console.log(error);

}
});

    
    },

    RegisterUser:function(){
      
      this.name = $$('#frm_name').val();
      this.usuario = $$('#frm_username').val();
      this.password = $$('#frm_password').val();

      app7.request({
           url: 'http://localhost/mplay/api/users.php',
           data:{name:this.name,username:this.usuario,password:this.password},
           method:'POST',
           crossDomain: true,
           success:function(data){
            
            app7.preloader.hide();

            var objson = JSON.parse(data);
           
            
           
           },
           error:function(error){

            app7.preloader.hide();
            app7.dialog.alert("Hubo un error por favor intenta nuevamente");
            console.log(data);
           }
           
        });

    

    },


    loginClose:function(){
     

        app7.panel.close();
        app7.dialog.confirm('¿Seguro, deseas salir de la aplicación?', function () {
            
        window.localStorage.setItem("autenticado", "false");
        mainView.router.navigate('/login/',{animate:true});
    
      });

    }
};



function showMenu(){

   app7.panel.open('left', true);

}


$$(document).on('page:init', '.page[data-name="home"]', function (e) {

      console.log('View Home load Init!');
      app7.panel.allowOpen = true;
      app7.panel.enableSwipe('left');

  
      printPDF();

});



function printPDF(){

let options = {
                documentSize: 'A4',
                type: 'base64'
              }
 
pdf.fromData('<html><h1>Hello World</h1></html>', options)
    .then((base64)=>'ok')   // it will
    .catch((err)=>console.log(err));

}


$$(document).on('page:init', '.page[data-name="preview"]', function (e) {
      console.log('View preview load Init!');
      app7.panel.allowOpen = true;
      app7.panel.enableSwipe('left');

     $$('#_agente').html(app.usuario);
     
      $$('#_prev_fecha').html(_fecha);
       $$('#_prev_folio').html(_folio);




                   
      $$('#_prev_lugar').html(_lugar);
      $$('#_prev_caracteristicas').html(_caracteristicas);
      $$('#_prev_placa').html(_placa);
      $$('#_prev_persona').html(_persona);

      $$('#_prev_garantia').html(_garantia);


      var arrCausa2 = _causa2.split("|");


      $$('#_costo2').html(arrCausa2[1]);  


      ConvertImage();


      var arrCausa = _causa.split("|");


      $$('#_costo').html(arrCausa[1]);  


      ConvertImage();
      

     var arrCausa1 = _causa.split("|");
      $$('#_prev_causa').html(arrCausa1[0]);
        
        ConvertImage();
 var arrCausa10 = _causa2.split("|");
      $$('#_prev_causa2').html(arrCausa10[0]);
      
});


$$(document).on('page:init', '.page[data-name="placa2"]', function (e) {
      
      console.log('Igresamos a Placa2!');

      

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!

      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      } 
    if (mm < 10) {
      mm = '0' + mm;
      } 
    var today = dd + '/' + mm + '/' + yyyy;

   document.getElementById('_fecha').value = today;


   document.getElementById('_folio').value = generaFolio();

   var fiveMinutes = 60 * 7,
        display = document.querySelector('#time');
    Cronometro(fiveMinutes, display);
   
      
});


function generaFolio(){

         
         var length = 10;

         var result = '';
         //var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

         var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
         var charactersLength = characters.length;
         
         for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
        

        return result;
}

function Cronometro(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
             mainView.router.navigate('/tarjeta2/',{animate:true});

        }
    }, 1000);
}


//###Función para Imprimir Documento####//
function PrintDocument(){

  
    _fecha = document.getElementById('_fecha').value;

    _folio = document.getElementById('_folio').value;
    
    _causa = document.getElementById('_causa').value;
    
    _causa2 = document.getElementById('_causa2').value;
    
    _lugar = document.getElementById('_lugar').value;  
    
    _caracteristicas = document.getElementById('_caracteristicas').value;
    
    _placa = document.getElementById('_placa').value;
    
    _persona = document.getElementById('_persona').value;
    
    _garantia = document.getElementById('_garantia').value;

    var page = '<strong>Fecha:</strong> '+_fecha+'<strong>Folio:</strong> '+_folio+' <br><strong>Placa:</strong> '+_placa+' <br><strong>Datos del Vehiculo:</strong> '+_caracteristicas+'<br><strong>Direccion:</strong> '+_lugar+_causa+_persona;
    cordova.plugins.printer.print(page, 'Document.html');


}




function capturePhoto() {
// Take picture using device camera and retrieve image as base64-encoded string
navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
destinationType: destinationType.DATA_URL });
}

// This function will execute on button click.
function getPhoto(source) {
// Retrieve image file location from specified source
navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
destinationType: destinationType.FILE_URI,
sourceType: source });
}


// The function is called on successful retrieval of photo.
function onPhotoDataSuccess(imageData) {
var smallImage = document.getElementById('smallImage');

// This function is used for unhide the image elements
smallImage.style.display = 'block';

// This function is used to display the captured image
smallImage.src = "data:image/jpeg;base64," + imageData;


_img = "data:image/jpeg;base64," + imageData;

}


// This function is called on the successful retrival of image.
function onPhotoURISuccess(imageURI) {
var largeImage = document.getElementById('largeImage');

// This function is used for unhiding the image elements
largeImage.style.display = 'block';

// This function is used to display the captured image.
largeImage.src = imageURI;
}


function onFail(message) {
alert('Failed because: ' + message);
}


function Preview(){


    _fecha = $$('#_fecha').val();
     _folio = $$('#_folio').val();
 //document.getElementById('_fecha').value;
    
    _causa = document.getElementById('_causa').value;
    _causa2 = document.getElementById('_causa2').value; 
    _lugar = document.getElementById('_lugar').value;  
    _caracteristicas = document.getElementById('_caracteristicas').value;
    _placa = document.getElementById('_placa').value;
    _persona = document.getElementById('_persona').value;
    _garantia = document.getElementById('_garantia').value;


      

 //mainView.router.navigate('/preview/',{animate:true});

 //ConvertImage();

 ConvertPDF();

}



function ConvertImage() {

  var node = document.getElementById('_foto');

  domtoimage.toPng(node)
    .then(function(dataUrl) {
    console.log(dataUrl);
      //window.open(dataUrl);
      var img = new Image();
      img.src = dataUrl;
      document.getElementById("photoprint").appendChild(img);


      var img2 = new Image();
      img2.src = _img;

    
      document.getElementById("photo2").appendChild(img2);

      document.getElementById("_foto").style.display = 'none';
       
      window.plugins.socialsharing.share(null, 'Infraccion', [dataUrl,_img], null)

      
    })
    .catch(function(error) {
      console.error('oops, something went wrong!', error);
    });

}



function ConvertPDF(){



/*
   _fecha = $$('#_fecha').val();
     _folio = $$('#_folio').val();
 
    
    _causa = document.getElementById('_causa').value;
    _causa2 = document.getElementById('_causa2').value; 
    _lugar = document.getElementById('_lugar').value;  
    _caracteristicas = document.getElementById('_caracteristicas').value;
    _placa = document.getElementById('_placa').value;
    _persona = document.getElementById('_persona').value;
    _garantia = document.getElementById('_garantia').value;*/



  let options = {
                documentSize: 'A4',
                type: 'share',
                fileName: 'myFile.pdf'
              }
 
var arrCausa = this._causa.split("|");
   var _costo = arrCausa[1];

   //alert(_costo);

   var arrCausa2 = this._causa2.split("|");
   var _costo2 = arrCausa2[1];
//
 var arrCausa1 = _causa.split("|");
     // $$('#_causa').html(arrCausa1[0]);
     _causa = arrCausa1[0];

        
 var arrCausa10 = _causa2.split("|");
      //$$('#_causa2').html(arrCausa10[0]);
      _causa2 = arrCausa10[0];
    
    /*

var content = '<html><h1>Seguridad Publica de Apizaco</h1>';
    content +='<p>Fecha: '+_fecha+'</p>';
     content +='<p>Lugar de la Infraccion: '+_lugar+'</p>';
  content +='<p>Causa: '+_causa+'</p>';
  content +='<p>Costo: '+_costo+'</p>';
  content +='<p> '+_causa2+'</p>';
  content +='<p>'+_costo2+'</p>';
    content +='<p><img src="'+_img+'" width="300" height="100" /></p>';
    content +='</html>';*/
  
  
  
  var content = '<html>';


var content += '<table width="100%">';
var content += '<tr>';
var content += '<td width="60%"><span style="font-size:55px; font-weight:bold;">SEGURIDAD PUBLICA APIZACO</span></td>';
var content += '<td><img src="http://www.apiza.co/portal/images/logo-apizaco.png" /></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="60%"><span style="font-size:35px; font-weight:bold;">FECHA</span> <span style="font-size:35px;">13/03/2019</span></td>';
var content += '<td><span style="font-size:35px; font-weight:bold;">FOLIO:</span> <span style="font-size:35px;">2424455</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">NOMBRE DEL OFICIAL:</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">LUGAR DE LA INFRACCIÓN :</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">Calle: Herdex #13 Col. Santa</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">FALTA COMETIDA:</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">INVACION PASO PEATONAL ART 167</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">COSTOP:</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">4 UMAS</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">CARACTERISTICAS DE LA UNIDAD:</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">AUDI COLOR ROJO</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">NUMERO DE PLACAS:</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">MEX2365</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">NOMBRE DE CONDUCTOR:</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">RICARDO SANCHEZ</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; font-weight:bold;">GARANTIA:</span></td>';
var content += '</tr>';

var content += '<tr>';
var content += '<td width="100%" colspan="2"><span style="font-size:35px; ">LICENCIA 27364836396982</span></td>';
var content += '</tr>';


var content += '<tr>';
var content += '<td width="100%" colspan="2"><img src="'+_img+'" width="300" height="100" /></td>';
var content += '</tr>';

var content += '</table>';

var content += '</html>';

pdf.fromData( content, options)
    .then((stats)=> console.log('status', stats) )   // ok..., ok if it was able to handle the file to the OS.  
    .catch((err)=>console.err(err))

}
