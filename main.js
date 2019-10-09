
let angle;
let time=0;
let wave=[];
let magnitude;
let phase=0;
let echelle=50;
let points=[]
let dft;

function setup(){
    translate(200,300);
    for(let i=0;i<train.length;i+=10)
        points.push(new vector(train[i].x,train[i].y)); //getting all the points

    /*
    for(let i=0;i<rose.length;i+=2)
        points.push(new vector(train[i],train[i+1])); //getting all the points
        //other list of point are in other format

    */  
    dft=discretFourierTransform(points); //calculating fourier coeficient
    createCanvas(800,600);
    noFill();
    frameRate(15);
    
}

function draw(){
    translate(400,300);
    stroke(255);
    background(0);
    let prevx=0;
    let prevy=0;
    constante=dft.length;
    // Drawing all the circle one after other for each element of time
    for(i=0;i<constante;i++){
        phase=dft[i].angle;
        magnitude=dft[i].magnitude;   
        strokeWeight(0.5);
        circle(prevx,prevy,magnitude*2);
        strokeWeight(1);
        line(prevx,prevy,prevx+magnitude*cos(i*time+phase),prevy+magnitude*sin(i*time+phase));
        prevx+=magnitude*cos(i*time+phase);
        prevy+=magnitude*sin(i*time+phase);
    }
    wave.unshift(new vector(prevx,prevy));//puting last position of the last circle in a table
    //so that we can keep tracing him
    stroke('red');
    beginShape();
                for(let i=0;i<wave.length;i++){
                    vertex(wave[i].x,wave[i].y); //drawing the orbit of the last point
                }
    endShape();  
    
    
    time+=2*Math.PI/dft.length;// element of time 
    if(time>(2*Math.PI))

    {
        wave=[];
        time=0;
    }
    
    

}