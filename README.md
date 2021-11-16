# Owl Clicker Game

Es un juego basado en el clicker y en el cookie clicker, su finalidad es conseguir puntos, 1 punto = 1 click, no hay fin.
## Proyecto

El proyecto está hecho en `Angular 13`, además es una PWA, para estó se usa el paquete de `@angular/pwa`

La estructura del proyecto está hecha para tener una división clara entre capas, para facilitar la escalibilidad y la tolerancia a cambios. (se basa en Hexagonal architecture)

Se necesitaba poder almacenar los datos de las partidas en local, para esto he usado un paquete que simplifica la tarea `@ngx-pwa/local-storage` 

Para los tests se ha usado `karma` con `jasmine`

El proyecto se encuentra alojado en `netlify` en la siguiente url [Owl Clicker Game](https://owl-clicker-game.netlify.app)

Se ha intentado ser lo más claro con el código y limpio, aunque tiene un buen margen de mejora.
## Ejecución

- Ejecutar en local => `ng serve`
- Ejecutar tests => `ng test`

## Home
Un pequeño formulario, donde pondremos nuestro nombre y accederemos a nuestra partida

Routing: `/home`
## Game

La pantalla de game, tiene un botón circular en el centro que es el clicker, arriba podemos ver un botón para volver y el nombre de usuario

Además podemos comprar un autoclicker que nos da 1 click cada 100ms

Routing: `/game`
## Stats

En la pantalla de stats se reunen los datos de todos los usuario (local) que haya y se muestran ordenados.

Routing: `/stats`


