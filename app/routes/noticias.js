module.exports=function(app){
    app.get('/noticias', function(req,res){ //faz a rota à página de notícias
        const dbConnection=require('../../config/dbConnection');
        const connection=dbConnection(); //faz a conexão com o dbConnection
        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error);
            };
            res.render('noticias/noticias.ejs', {noticias:result}); //faz a renderização da pagína de notícias
        });


    });
};