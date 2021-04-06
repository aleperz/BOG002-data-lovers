# Data Lovers - Rick and Morty

_En este proyecto construimos una pagina web que permite al usuario conocer los personajes y algunas curiosidades extra sobre la serie Rick and Morty. La pagina cuenta con opciones de filtrado por categorias clave relacionadas a los personajes, y ordenamiento por nombre en orden ascendente y descendente, para facilitar la busqueda y/o exploración de los mismos_

## Investigación UX 🤓📢

- [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)

### Usuarios

Nuestros usuarios son personas que desean tener a la mano la información mas relevante sobre la serie Rick and Morty, principalmente conocer los detalles de los personajes que aparecen en la serie.
Pueden ser usuarios que apenas inician la serie y quieren conocer los personajes que aparecen en cada episodio que van viendo, o usuarios pertenecientes incluso a un Fandom, que desean conocer cada aspecto de la serie con el mayor detalle posible.

### Necesidades cubiertas por el producto

#### Historia de Usuario 1: Como usuario quiero visualizar una interfaz amigable que me permita tener una vista general de todos los personajes cuando aun no he realizado una búsqueda o filtro especifico

_En este caso, lo primero que visualiza el usuario son todos los personajes que aparecen en la serie, en una vista paginada para lograr una mejor interacción con la sección._

##### Historia de Usuario 2: Como usuario quiero tener acceso a un menú con diferentes categorías que me redireccione a ver los personajes, temporadas y sus episodios, y los lugares donde sucede la serie

_Se cubrio esta necesidad del usuario creando una barra de navegación que permite ver una sección de personajes, episodios, origenes de los personajes y locaciones. Este menú es responsive, transformandose en menú hamburguesa en la vista mobile_

#### Historia de Usuario 3: Yo como usuario quiero ver opciones de filtrado adicionales para encontrar grupos de personajes o un personaje específico con mayor rapidez

_En la pagina web inplementamos una barra lateral de filtrado, responsive en la vista mobile, con la cual el usuario puede filtrar los personajes por categorias asociadas a las caracteristicas de los mismos, de esta manera se facilita la busqueda del/los personaje/s que desea visualizar. Tambien cuenta con la opcion de ordenar los personajes por su nombre en orden ascendente o descendente, facilitando aun mas su visualización._

### Prototipo de baja fidelidad

![Flujo_Filtrado](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/filter.png)

### Prototipo de Alta fidelidad Inicial

![prototipoHQ1](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_Inicial_desktop.png "Prototipo Desktop Alta Fidelidad")

![prototipoHQ2](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_Inicial_Mobile1.png "Prototipo Mobile Alta Fidelidad")

![prototipoHQ3](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_Inicial_Mobile.png "Prototipo Mobile Alta Fidelidad2")

https://www.figma.com/file/StLli4zUtAcmrY1OMWsIpV/RickandMorty?node-id=5%3A6

### Prototipo de Alta fidelidad Final

![FinalHQ1](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_final_desktop.png "Web Final Desktop Alta Fidelidad")

![FinalHQ2](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_final_mobile.png "Web final Mobile Alta Fidelidad")

![FinalHQ3](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_final_mobile_burgermenu.png "Web final Mobile BurgerMenu Alta Fidelidad")

![FinalHQ4](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_final_mobile_filtro.png "Web final Mobile Filtros Alta Fidelidad")

![FinalHQ5](https://raw.githubusercontent.com/aleperz/BOG002-data-lovers/main/Assets/Prot_final_mobile_chartsEpisode.png "Web final Mobile Episodes-Charts Fidelidad")

## 3. Objetivos de aprendizaje

### HTML y CSS

- [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [x] Uso de selectores de CSS.
- [x] Construir tu aplicación respetando el diseño realizado (maquetación).
- [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

- [x] Uso de selectores del DOM.
- [x] Manejo de eventos del DOM.
- [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
      (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

- [x] Uso de condicionales (if-else | switch | operador ternario)
- [x] Uso de bucles (for | for..in | for..of | while)
- [x] Uso de funciones (parámetros | argumentos | valor de retorno)
- [x] Manipular arrays (filter | map | sort | reduce)
- [x] Manipular objects (key | value)
- [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [ ] Diferenciar entre expression y statements.
- [ ] Diferenciar entre tipos de datos primitivos y no primitivos.

### Testing

- [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

- [x] Organizar y dividir el código en módulos (Modularización)
- [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [x] Uso de linter (ESLINT)

### Git y GitHub

- [x] Uso de comandos de git (add | commit | pull | status | push)
- [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [x] Colaboración en Github (branches | pull requests | |tags)

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener feedback e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
- [x] Planear y ejecutar tests de usabilidad.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

## 9. Checklist

- [x] Usa VanillaJS.
- [x] No hace uso de `this`.
- [x] Pasa linter (`npm run pretest`)
- [x] Pasa tests (`npm test`)
- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [x] Incluye historias de usuario en `README.md`.
- [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [x] Incluye link a Zeplin en `README.md`.
- [x] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [x] UI: Permite filtrar data en base a una condición.
- [x] UI: Es _responsive_.

## Construido con 🛠️

- Vanilla Javascript

## Autores ✒️

- **Alejandra Pérez** - [aleperz](https://github.com/aleperz)
- **Julissa Vigoya**
