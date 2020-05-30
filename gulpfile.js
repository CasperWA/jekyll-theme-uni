const { series, src, dest, watch } = require('gulp')
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
const { spawn } = require('child_process');
var cssnano = require('gulp-cssnano');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
function jekyll_build() {
    browserSync.notify(messages.jekyllBuild);
    return spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', (code) => {console.log(`Exited with code ${code}`)});
};

/**
 * Rebuild Jekyll & do page reload
 */
function jekyll_rebuild() {
    jekyll_build();
    browserSync.reload();
    return Promise.resolve()
};

/**
 * Wait for jekyll-build, then launch the Server
 */
function browser_sync() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
};

/**
 * Compile files from assets/scss into both _site/css (for live injecting) and assets (for future jekyll builds)
 */
function sass2css() {
    return src('_scss/style.scss')
        .pipe(sass({
            includePaths: ['_scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 3 versions'], { cascade: true }))
				.pipe(cssnano())
        .pipe(dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(dest('assets/css'));
};

exports.build = series(sass2css, jekyll_build, browser_sync)
exports.default = function() {
    browser_sync();
    watch(['_scss/*.scss', '_scss/*/*.scss'], { ignoreInitial: false }, series(sass2css));
    watch(['*.html', '_layouts/*.html', '_includes/*.html', '_config.yml'], { ignoreInitial: false }, series(jekyll_rebuild));
};
