const express = require( 'express' );
const app = express();

app.set( 'views', __dirname + '/views');
app.set( 'view engine', 'ejs' );

app.use(express.static(__dirname + "/static"));

const cats =[
    {
        name: "Pia",
        favFood: "Sushi",
        age: 5,
        sleepSpot: ["Tree", "Box"],
        image: "04.jpg"
    },

    {
        name: "Mary",
        favFood: "Chicken",
        age: 15,
        sleepSpot: ["Bed", "Sofa"],
        image: "05.jpg"
    },

    {
        name: "Popi",
        favFood: "Soup",
        age: 3,
        sleepSpot: ["Chair", "Laptop"],
        image: "06.jpg"
    }
]

app.get( '/cats', function( request, response ) {
    response.render( 'cats', {cats} );
});

app.get('/:name', function( request, response ){
    let name = String( request.params.name );

    let result = cats.find( cat =>{
        if(cat.name === name){
            return cat
        }
    });


    if(result === undefined){
        response.render('details', {found:false});
    }
    else{
        response.render( 'details', {found: true, catInfo: result});
    }

})

app.listen( 8080, function(){
    console.log( 'This server is running in port 8080.' );
});