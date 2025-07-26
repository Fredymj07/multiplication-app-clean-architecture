# multiplication-app-clean-architecture
Repositorio de aprendizaje referente a Arquitectura Limpia para la creación de una aplicación que calcula tablas de multiplicar.

Para utilizar este proyecto debe seguir las siguientes instrucciones:

1. Instalar dependencias:
```
npm i
```

2. Correr el proyecto:
```
npm run dev
```

3. El proyecto fue creado utilizando yarg, de manera que puede ejecutar el siguiente comando para ver su ejecución:
```
npx ts-node src/app.ts -b 1 -s -n tabla-del-1 -d ./multiplicaciones
```

``` -b -> tabla del número que desea ver ```
``` -s -> mostrar la tabla de multiplicar en la consola ```
``` -l -> número máximo al que será calculada la tabla Ej: 2 x 10(máximo) ```
``` -n -> nombre del archivo que será creado ```
``` -d -> nombre de la carpeta dónde se almacenará el archivo ```
