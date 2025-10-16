# Visualización

Primero, abrí la base de datos y corregí un par de datos que estaban con errores de tipeo y agregue un par de datos faltaban de una película, después descargue la base de datos en formato CSV. Posteriormente, ingrese el código en google collab para poder abrir mi Drive e importar la base de datos a la plataforma.

En otra pestaña abrí altair para explorar la biblioteca de visualizaciones, me gustaron muchas de las opciones de gráficos pero sentí que algunas no se adaptaban a nuestra historia. Revise los datos y las posibles preguntas que se podían resolver con ellos, en base a eso elegí el gráfico titulado "bar chart with labels based on measured luminance" porque me gustó su diseño sencillo, la escala de colores y su adaptabilidad.

Con la visualización quería responder:

**¿En qué película del Studio Ghibli hay más tiempo de llanto? ¿En cuál película hay un menor tiempo de llanto? ¿Cuántos segundos se llora en cada una de las películas del Studio Ghibli?**

Intenté modificar yo misma el código para que se adaptara a los parámetros que yo deseaba pero fue muy complicado, no sabía cómo indicar que se sumaran los segundos de cada escena en que un personaje llorara en esa película ni como hacer que quedara organizado. Envie el código original de altair y un promp explicando detalladamente qué quería lograr a chatgpt para que me fuera explicando como construir el código. Al generar el gráfico este quedó al revés de como lo quería, la mayor categoría estaba en la parte superior y de un color claro, así que tuve que corregirlo para que quedara ordenado y que los colores fueran más oscuros a medida que aumentaba el tiempo total.

Después tuve que batallar para que se pudiera leer correctamente el título de "El niño y la garza", porque al tener una "ñ" se deformó todo el titulo. No pude solucionarlo por mi cuenta así que recurrí a la inteligencia artificial incorporada en google collab para que corrigiera el error. También tuve que corregir algunos errores del código porqué no reconocía las variables de la base de datos si no estaban escritas exactamente igual (ej. Duración / duración).


Después de eso no tuve problemas para generar la visualización y descargarla.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⡤⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠉⠀⠀⠀⠀⠀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⣀⠀⠀⠀⠀⠀⠀⣀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠁⠀⠛⠀⠀⠀⠀⠀⠀⠛⠀⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣻⣋⠀⠿⠿⠿⠀⠀⠀⠀⠿⠿⠿⠀⢘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣟⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⠀⠀⢘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⣷⣿⣗⠀⠀⣿⠀⠀⠀⠀⠀⠀⣿⠀⠀⢘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣺⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣯⣷⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡺⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣯⣿⡄⠀⠘⠻⠿⠿⠿⠃⠀⣐⣟⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣷⣿⡿⡿⣿⣽⣟⢷⣄⣀⣀⣀⣀⣠⣾⢿⣿⣟⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⡿⣻⣿⡿⣿⣯⡯⣿⣿⣶⣷⣾⣾⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⣿⣿⣿⣿⣿⣷⣿⣼⣿⣟⣿⣧⣿⣿⣿⣿⣿⣿⣷⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡟⣿⣿⡾⣿⣷⣿⣛⣻⣷⡟⡯⣷⣮⣟⣿⣽⢿⣻⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣯⣟⣟⣛⣞⡻⣿⣿⠽⡼⢟⡷⡗⣿⡎⠿⡿⣽⣏⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⣽⡡⡧⢅⢟⢇⡏⢭⠳⡃⣙⢇⣮⡗⡗⡏⠿⣗⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⣯⡏⠝⣡⣋⠠⠨⣇⡯⠱⡙⠁⣍⢬⡺⡏⡕⣧⠉⡬⣽⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣃⡂⠃⠘⠀⡏⠡⣎⡁⠂⠀⢼⠄⠂⠀⠃⠛⡁⠉⠁⡿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠉⠀⠀⠀⠀⠀⠈⠑⡇⠀⠀⠘⠀⠃⠀⠁⣛⠃⠀⠀⠧⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠀⠀⠀⠹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
