var Photo = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\LaMusice_Photoshop.jsx");
var After = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\LaMusice_After_Effects.jsx");
var Imagen_Texto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\Direccion_Imagen.txt");
var Song_Texto = new File("C:\\Users\\Recup\\OneDrive\\Documentos\\Algoritmo_Adobe\\Direccion_Cancion.txt");

var Imagen = File.openDialog ()
var Song = File.openDialog()

Imagen_Texto.open("w")
Imagen_Texto.close()
Imagen_Texto.open("e")
Imagen_Texto.write(Imagen.absoluteURI) // Recordar vaciar para que vuevla a funcionar
Imagen_Texto.close()

//photoshop.open(Photo)

Song_Texto.open("w")
Song_Texto.close()
Song_Texto.open("e")
Song_Texto.write(Song.absoluteURI)
Song_Texto.close()

After.execute()


