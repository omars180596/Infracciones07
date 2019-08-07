/*****************************
Autor:Jesus Omar Rodriguez Hernandez
Fecha Modificacion: 07/07/2018
Archivo JS
******************************/
var $$ = Dom7;
var pictureSource;
var destinationType;


var _fecha = "";
var _lugar = "";
var _caracteristicas = "";
var _placa = "";
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
         
                     mainView.router.navigate('/home/',{animate:true});
           
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
          mainView.router.navigate('/home/',{animate:true});
            }
            
           
           },
           error:function(error){

          mainView.router.navigate('/home/',{animate:true});

           }
           
        });
             
          

      }

    },
    
    RegisterAccess:function(){

      mainView.router.navigate('/register/',{animate:true});
    
    },
    RegisterAccess:function(){

      mainView.router.navigate('/register/',{animate:true});
    
    },
    Detencion:function(){

      mainView.router.navigate('/detencion/',{animate:true});
    app7.dialog.alert("Atencion acaba de incurrir en el articulo 5");
    },
    Detencion1:function(){

      mainView.router.navigate('/detencion1/',{animate:true});

    
    },
    Detencion2:function(){

      mainView.router.navigate('/detencion2/',{animate:true});
    
    },
Placa:function(){

  mainView.router.navigate('/placa/',{animate:true});
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
    app7.dialog.alert("Esta apunto de levantar un una infraccion");
    console.log(error);

}
});
},
Placa1:function(){

  mainView.router.navigate('/placa1/',{animate:true});
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
    app7.dialog.alert("Esta apunto de levantar una infraccion");
    console.log(error);

}
});
},
    
    Placa2:function(){

      mainView.router.navigate('/placa2/',{animate:true});
    
   
},
    Licencia:function(){

      mainView.router.navigate('/licencia/',{animate:true});
    
    },
    Licencia1:function(){

      mainView.router.navigate('/licencia1/',{animate:true});
    
    },
    Licencia2:function(){

      mainView.router.navigate('/licencia2/',{animate:true});
    
    },
    Tarjeta:function(){

      mainView.router.navigate('/tarjeta/',{animate:true});
    
    },
    Tarjeta1:function(){

      mainView.router.navigate('/tarjeta1/',{animate:true});
    
    },
    Tarjeta2:function(){

      mainView.router.navigate('/tarjeta2/',{animate:true});
    
    },
    placas:function(){
 this.dia=$$('#dia').val();
  this.placa=$$('#placa').val();
  this.modelo=$$('#modelo').val();
  this.calle=$$('#calle').val();

  app7.request({
  url: this.hostname+'/mplay/api/pedro.php',
  data:{dia:this.dia,placa:this.placa,modelo:this.modelo,calle:this.calle},
  method:'POST',
  crossDomain: true,
  success:function(data){
    app7.preloader.hide();

    var objson = JSON.parse(data);
    app7.dialog.alert("Infraccion levantada exitosamente");
    mainView.router.navigate('/home/',{animate:true});

  },
  error:function(error){
    app7.preloader.hide();
    app7.dialog.alert("Atencion esta apunto de levantar una infraccion");
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
});


$$(document).on('page:init', '.page[data-name="preview"]', function (e) {
      console.log('View preview load Init!');
      app7.panel.allowOpen = true;
      app7.panel.enableSwipe('left');

      $$('#_prev_fecha').html(_fecha);
      $$('#_prev_lugar').html(_lugar);
      $$('#_prev_caracteristicas').html(_caracteristicas);
      $$('#_prev_placa').html(_placa);

      $$('#_prev_garantia').html(_garantia);


      ConvertImage();

      
});



//###Función para Imprimir Documento####//
function PrintDocument(){

  
    _fecha = document.getElementById('_fecha').value;
    _lugar = document.getElementById('_lugar').value;  
    _caracteristicas = document.getElementById('_caracteristicas').value;
    _placa = document.getElementById('_placa').value;
    _garantia = document.getElementById('_garantia').value;

    var page = '<strong>Fecha:</strong> '+_fecha+' <br><strong>Placa:</strong> '+_placa+' <br><strong>Datos del Vehiculo:</strong> '+_caracteristicas+'<br><strong>Direccion:</strong> '+_lugar;
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


    _fecha = $$('#_fecha').val();   //document.getElementById('_fecha').value;
    _lugar = document.getElementById('_lugar').value;  
    _caracteristicas = document.getElementById('_caracteristicas').value;
    _placa = document.getElementById('_placa').value;
    _garantia = document.getElementById('_garantia').value;


      

 mainView.router.navigate('/preview/',{animate:true});

 //ConvertImage();

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