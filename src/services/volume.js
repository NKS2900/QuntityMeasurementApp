class volume{

    Calculate(value,from,to)
    {
        if(value==null || from==null || to==null)
        {
            return null;
        }

        
        switch(to){
            case 1:
                this.inches=value*from;
                return this.inches/1;
            case 2:
                this.inches=value*from;
                return this.inches/1000;
            case 3:
                this.inches=value*from;
                return this.inches/3785;
            default:
                return null;
        }
    }
}
export default volume;


