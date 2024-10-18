function info(list){

    let movies = {};

    for (const line of list) {
        if (line.includes('addMovie ')) {

            let name = line.split('addMovie ')[1];
            movies.name = name;

        }else if (line.includes('directedBy')){

            let[name, director] = line.split(' directedBy ');
            if(movies.hasOwnProperty(movies[name])){
                movies.director = director;
            }
        }else if(line.includes('onDate')){

            let[name, date] = line.split(' onDate ');
            if(movies.hasOwnProperty(movies[name])){
                movies.date = date;
            }
        }
    }

    for (const movie in movies) {
      if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }    
    }
      
    }
info([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])