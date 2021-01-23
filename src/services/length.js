class length{

    Calculate(value,from,to)
    {
        if(value==null || from==null || to==null)
        {
            return null;
        }

        var inches=0;
        
        switch(to){
            case 1:
                this.inches=value*from;
                return this.inches/39370;
            case 2:
                this.inches=value*from;
                return this.inches/39;
            case 3:
                this.inches=value*from;
                return this.inches/0.393701;
            case 4:
                this.inches=value*from;
                return this.inches/0.0393701;
            case 5:
                this.inches=value*from;
                return this.inches/0.00003937;
            case 6:
                this.inches=value*from;
                return this.inches/63360;
            case 7:
                this.inches=value*from;
                return this.inches/12;
            case 8:
                this.inches=value*from;
                return this.inches/1;
            default:

                return null;
        }
    }
}
export default length;


