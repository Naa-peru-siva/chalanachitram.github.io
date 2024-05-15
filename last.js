function figureexpand(figureId) {
            var bs = document.getElementById("blackshade");
            bs.style.display ="block";
            bs.style.animation ="bs 1.5s ease forwards";
            
            var figure = document.getElementById(figureId);
                    
            ts = figure.querySelector(".trailerscreen");
            ts.style.display = "block";
            ts.style.animation ="trailer 1.5s ease forwards";
                     
            md = figure.querySelector(".metadata");
            md.style.display = "block";
            md.style.animation ="md 1.5s ease forwards";
            
            db = figure.querySelector("#dbsection");
            db.style.display ="flex";
            db.style.animation ="db 1.5s ease forwards";   

            c = document.querySelector("#close");
            c.style.display ="flex";
            c.style.animation ="close 1s ease forwards";          
        }

        function reset() {
            var bs = document.getElementById("blackshade");
            bs.style.display ="none";
            bs.style.animation ="";                     
                    
            var vs = ts.src;
            ts.src = vs;
            ts.style.display = "none";
            ts.style.animation ="";                 
            
            md.style.display = "none";
            md.style.animation ="";   
            
            db.style.display ="none";
            db.style.animation ="";   
    
            c.style.display ="none";
            c.style.animation ="";
        }        
