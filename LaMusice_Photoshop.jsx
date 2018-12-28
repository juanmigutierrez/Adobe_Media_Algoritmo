var proyecto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\La_Musice_Image.psd")
var Imagen = File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\La_Musice_Image.jpg")
var doc = app.open(proyecto)
$.writeln(Image)


$.writeln("----")
app.activeDocument = doc


file = app.openDialog();//opens dialog,choose one image

var height;
var width;
var scale1;
var scale2;
var scalet;

if(file[0]){ //if you have chosen an image
   app.load(file[0]); //load it into documents
   backFile= app.activeDocument;
   height = backFile.height;//prepare your image layer as active document
   width = backFile.width ;//resize image into given size i.e 640x480
   resolution = 1/height.baseUnit
   width1 = width.value*resolution
   height1 = height.value*resolution
   $.writeln (height1)
   $.writeln (width1)
   scale1 = 1500/width1; // Se divide sobre 1920 y 1080 debido a que es el tamano de la composition y se e utiliza max por que es un scale con misma proporcion
   scale2 = 1500/height1;
   scalet = Math.max(scale1,scale2)*100
   backFile.selection.selectAll();
   backFile.selection.copy(); //copy image into clipboard
   backFile.close(SaveOptions.DONOTSAVECHANGES); //close image without saving changes
   doc.paste(); //paste selection into your document
}



$.writeln (scalet)
doc.layers[0].move(doc.layers[1],ElementPlacement.PLACEAFTER)
doc.layers[1].resize(scalet,scalet,AnchorPosition.TOPLEFT)

//Options JPG
var doc = app.activeDocument;    
var Path = doc.path;    
var Name = doc.name.replace(/\.[^\.]+$/, '');     
var Suffix = "-Copy";    
var saveFile = File(Path + "/" + Name + Suffix + ".jpg");    
SaveJPEG(saveFile,11);    
    
function SaveJPEG(saveFile, jpegQuality){    
jpgSaveOptions = new JPEGSaveOptions();    
jpgSaveOptions.embedColorProfile = true;    
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;    
jpgSaveOptions.matte = MatteType.NONE;    
jpgSaveOptions.quality = jpegQuality;    
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);    
}  

doc.close(SaveOptions.DONOTSAVECHANGES)
executeAction(app.charIDToTypeID('quit'), undefined, DialogModes.NO); // Cierra Photoshop
