module.exports = function(grunt){
    // grunt task settings
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        sass: {
            dist: {
                files: {
                    "styles/app.css": "styles/app.scss"
                }
            }
        },

        watch: {
            css: {
                files: [
                    "styles/*.scss",
                    "styles/**/*.scss"
                ],
                tasks: ["sass"]
            },
        }

    })
    
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");


    grunt.registerTask("default", ['sass', "watch"])
}