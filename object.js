
class vector
{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

class dftCoefficient
{
    constructor(real,imaginary)
    {
        this.real=real;
        this.imaginary=imaginary;
        this.magnitude=Math.sqrt(this.real**2 + this.imaginary**2);
        this.angle=Math.atan2(imaginary,real);
    }
}

function discretFourierTransform(listePoint)
{
    N=listePoint.length;
    exponetialFunctions=[];
    for(let i=0;i<N;i++)
    {
        let somme=math.complex(0,0);
        for(let j=0;j<N;j++)
            {
                try {
                    let x_n=math.complex(listePoint[j].x,listePoint[j].y);
                    let exponential=math.complex(Math.cos((2*Math.PI*i*j)/N),-Math.sin((2*Math.PI*i*j)/N));
                    somme=math.add(somme,math.multiply(x_n,exponential));
                } catch (error) {
                    console.log(error);
                }
                
               
            }
        let func=new dftCoefficient(math.re(somme)/N,math.im(somme)/N);
        exponetialFunctions[i]=func;
    }
   
    return exponetialFunctions;
}
