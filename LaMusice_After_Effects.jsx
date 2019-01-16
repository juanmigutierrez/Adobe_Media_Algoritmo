//AFTER EFFECTS

// Abriendo After effects proyecto

var proyecto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\La_Musice_Youtube.aep")
var Imagen_Texto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\Direccion_Imagen.txt")
var Song_Texto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\Direccion_Cancion.txt")
var render = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\Youtube.avi")

//var Imagen = File.openDialog () // Esto solo era para prueba, ahora se utiliza textos
//var Song = File.openDialog()

Imagen_Texto.open("r")
var Imagen_path = Imagen_Texto.readln()
var Imagen = new File(Imagen_path)
Imagen_Texto.close()

Song_Texto.open("r")
var path_Song = Song_Texto.readln()
var Song = new File(path_Song)
Song_Texto.close()

//$.writeln() //Codigo para escribir consola

//CANCION DURACION 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.open(proyecto)


// app.project.item(1).file , sirve para sacar la direccion de los items
// item(1) Imagen normal
// item(2) Composicion
// item(3) Canción
// item(4) Logo
$.writeln("----")


//replace sirve para remplazar items

app.project.item(1).replace(Imagen)
var height = app.project.item(2).layer(2).height
var width = app.project.item(2).layer(2).width

app.project.item(3).replace(Song)
app.project.item(2).workAreaDuration = app.project.item(3).duration // Cambiarla despues por duration

//writeln(height)
//writeln(width)

var scale1 = 1920/width // Se divide sobre 1920 y 1080 debido a que es el tamano de la composition y se e utiliza max por que es un scale con misma proporcion
var scale2 = 1080/height

var scalet = Math.max(scale1,scale2)*100 +1

//$.writeln(scalet)


$.writeln(app.project.item(2).layer(3).Scale)
var Comp = app.project.item(2)
app.project.item(2).layer(3).Scale.setValue([scalet,scalet,100])
app.project.renderQueue.items.add(Comp)
app.project.renderQueue.item(1).outputModule(1).file = render
app.project.renderQueue.item(1).outputModule(1).name

app.project.renderQueue.queueInAME(true);
$.sleep(1000)
app.project.renderQueue.queueInAME(true);

//app.project.renderQueue.render()

app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES)
app.quit()

// Primero se remplazara la imagen normal



//$.writeln (app.project.items(1).file)



