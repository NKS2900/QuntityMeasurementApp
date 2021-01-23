class tempserv{

    Calculate(value,from,to)
    {
        if(value==null || from==null || to==null)
        {
            return null;
        }
        switch(to){
            case 1:
                var celsius=value*from;
                return celsius/1;
            case 2:
                if(to==2){
                    return value
                }
                else{
                    var fahrenheit= (value * 1.8) + 32
                    return fahrenheit;
                }
            case 3:
                return (273.15+(value));
            default:
                return null;
        }
    }
}
export default tempserv;


