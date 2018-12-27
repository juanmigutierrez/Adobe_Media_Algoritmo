var proyecto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\La_Musice_Image.psd")
var doc = app.open(proyecto)

var Imagen = File.openDialog ()


$.writeln("----")
app.activeDocument = doc
doc.layers[1].replace()