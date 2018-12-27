//AFTER EFFECTS

// Abriendo After effects proyecto

//-var proyecto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\La_Musice_Youtube.aep")
//-var Imagen = File.openDialog ()
//var Song = File.openDialog()
//$.writeln() Codigo para escribir consola

//CANCION DURACION 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//--app.open(proyecto)

// app.project.item(1).file , sirve para sacar la direccion de los items
// item(1) Imagen normal
// item(2) Composicion
// item(3) Canción
// item(4) Logo
$.writeln("----")

//-app.project.item(3).replace(Song)
app.project.item(2).workAreaDuration = 10
//app.project.item(3).duration // Cambiarla despues por duration

//replace sirve para remplazar items

//-app.project.item(1).replace(Imagen)
//-var height = app.project.item(2).layer(2).height
//-var width = app.project.item(2).layer(2).width

//$.writeln(height)
//$.writeln(width)

//-var scale1 = 1920/width // Se divide sobre 1920 y 1080 debido a que es el tamano de la composition y se e utiliza max por que es un scale con misma proporcion
//-var scale2 = 1080/height

//-var scalet = Math.max(scale1,scale2)*100 +1

//$.writeln(scalet)

//-app.project.item(2).layer(2).Scale.setValue([scalet,scalet,100])

//--app.project.renderQueue.items.add(app.project.item(2))
app.project.renderQueue.item(1).outputModule(1).file = "/c/Users/Recup/Pictures/Mediago/Youtube.avi"
app.project.renderQueue.item(1).outputModule(1).name
// Primero se remplazara la imagen normal



//$.writeln (app.project.items(1).file)


