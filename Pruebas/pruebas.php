# Importar librerías necesarias
from time import sleep

# Función para mostrar la imagen
def mostrar_imagen(imagen):
    print(f"Mostrando imagen: {imagen}")

# Función para reproducir el trailer
def reproducir_trailer(trailer):
    print(f"Reproduciendo trailer: {trailer}")
    # Aquí podría ir la lógica para reproducir el trailer, por ejemplo, abrir un archivo de video o enlace a un video online

# Función para mostrar título y descripción al estilo de Netflix
def mostrar_info(titulo, descripcion):
    print("***** NETFLIX ORIGINAL *****")
    print(f"Título: {titulo}")
    print(f"Descripción: {descripcion}")
    print("*****************************")

# Lista de imágenes y trailers (sustituye las rutas de las imágenes y trailers por tus propios archivos)
imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]
trailers = ["trailer1.mp4", "trailer2.mp4", "trailer3.mp4"]

# Títulos y descripciones
titulos = ["Título 1", "Título 2", "Título 3"]
descripciones = ["Descripción 1", "Descripción 2", "Descripción 3"]

# Duración de cada imagen antes de mostrar el trailer (en segundos)
duracion_imagen = 5

# Bucle para mostrar las imágenes y trailers de manera intercalada
for i in range(len(imagenes)):
    mostrar_info(titulos[i], descripciones[i])
    mostrar_imagen(imagenes[i])
    sleep(duracion_imagen)
    reproducir_trailer(trailers[i])
    # Aquí podrías incluir un comando para volver a mostrar la imagen después de reproducir el trailer
    print("***** Volver a la imagen *****")
