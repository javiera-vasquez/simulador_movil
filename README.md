# Foundation libsass template

This is a template to start your own project that uses Grunt and libsass!

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:zurb/foundation-libsass-template.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here


TODO
Maqueta para la nueva grilla HD ==> Preguntar
    Integrar programación dentro de los canales
    Que es mas importante => filtrar y mostrar grilla o mostrar completa y filtrar si el usuario quiere
    Barrios => cuanta importancia
    Comer vtr.com/hd ?
Front de Mako
Hacer trick player de AVN ==> ++
Lollapalooza

------

Curso prevención de delitos

    Toda la shet (modelo prevención de delitos) se basa en la
        ley 20.393 => Responsavilidad penal de las personas juridicas
        Se aplica a privados y publicos

    Lavado de activos => Acto de ocultar el origen de bienes ilicitos
        Trafico de sustancias
        Conductas terrorista
        Control de armas
        Valores, ley 18405
        Obtencion de prestamos con antecedesntes faltos
        Promocion de prostitucion infantil, secuestro, otros
        Delitos de funcionarios publicos como absio de funcion malversacion
    Financiamiento del terrorismo ==> really?
    Cohecho a funcionario publico nacional o extranjero
        Ofrecer o dar a un empleado publico un beneficio economico o de otra naturalise tal como
            Realice actos propios de su cargo para terceros
            Omitir un acto propio de su cargo
            Infringir los deberes de su cargo

    Modelo prevencion de delitos ==> Procesos, protocolos, procedimientos, sanciones

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './resources/sass',
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss',
            ]
        })
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(autoprefix('last 2 version'))
        .pipe(gulp.dest('./public/css'));
});
