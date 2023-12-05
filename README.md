# Validate Md-Links




## Índice 

 * [ Descripción](Descripción) 
 * [ Instalación](instalación)
 * [ Guía de uso](Guía-de-uso)
 


##  Descripción 

Este proyecto es una herramienta simple para leer archivos Markdown. La aplicación está diseñada para proporcionar una interfaz intuitiva que permite cargar y visualizar archivos en formato Markdown.

Para utilizar la herramienta de línea de comandos (CLI) que proporciona funcionalidades adicionales para validar enlaces en archivos Markdown, sigue estos pasos:


##  Instalación 

Ejecuta el  comando  

```bash
                          npm install validate-md-links-mp
```
para instalar la dependencia de validación de enlaces Markdown.

También puedes instalarlo directamente desde GitHub con el siguiente comando

```bash
                   npm install MariaPaulaArdilam/validate-md-links-mp
```


##  Guía de uso 

* Para leer un archivo markdown y extraer sus enlaces 
```bash
                           md-links READMEPRUEBA.md
```

* Para verificar el estado de cada uno de los links extraídos 
```bash
                        md-links READMEPRUEBA.md --validate
```

Este comando muestra el estado de los enlaces encontrados en el archivo Markdown en la ruta especificada. 

* Para obtener un estadistica del archivo analizado. 

```bash
                         md-links READMEPRUEBA.md --stats
```

Este comando muestra incluyendo la cantidad total de enlaces encontrados y la cantidad de enlaces únicos presentes en el documento

*  Para mostrar la estadísticas básicas y los enlaces rotos en un archivo Markdown

```bash
                         md-links READMEPRUEBA.md --validate --stats
```

