//  Instance the node/gulp plugins (like an class in OO):
    var gulp = require('gulp');
    var spriteSVG = require('gulp-svg-sprite');

    var spriteConfig = {
        mode: {
            symbol: {
                dest: 'sprites',
                sprite: 'my-sprite.svg',
                example: true
            }
        },
        svg: {
            xmlDeclaration: false,
            doctypeDeclaration: false
        }
    }

//  Declare an gulp task:
    var generateSprites = function (){
        return gulp.src('my-icons/**/*.svg').pipe(spriteSVG(spriteConfig)).pipe(gulp.dest('.'))
    };
    
    gulp.task('generate-sprites', generateSprites)