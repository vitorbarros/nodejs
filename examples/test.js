var prompt = require('./dir/prompt');

prompt('What is your name ?', function(data){
    process.stdout.write(data);
    process.exit();
})

process.on('exit', function(){
    process.stdout.write(' bye bye !! \n');
});
