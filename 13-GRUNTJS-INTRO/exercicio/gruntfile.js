module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development :{
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html : {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            },
            images : {
                files: ['src/images/**/*.{png,jpg,jpeg,gif,svg}'],
                tasks: ['copy:images']
            }
        },
        copy: {
            images: {
                files: [{
                expand: true,
                cwd: 'src/images/',       // Pasta de origem
                src: ['**/*.{png,jpg,jpeg,gif,svg}'], // Arquivos que serão copiados
                dest: 'dev/images/'       // Pasta de destino no ambiente de desenvolvimento
                }]
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [{
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: '../src/scripts/main.js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dev/'
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.min.js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                expand: true,
                cwd: 'src/images/',        // Pasta de origem
                src: ['**/*.{png,jpg,jpeg,gif,svg}'], // Tipos de arquivos
                dest: 'dist/images/'       // Pasta de destino
                }]
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy:images','watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist','replace:dist','clean','uglify','imagemin'])
}