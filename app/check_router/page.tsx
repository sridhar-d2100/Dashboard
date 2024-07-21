import { Slider } from "@radix-ui/react-slider";
import First_grid from "../compoents/first_elment";
import Second_grid from "../compoents/seond_element";
import Third_grid from "../compoents/third_element";


export default function es(){

    return (
        <div className = "flex flex-col space y-4 ...">
            <First_grid></First_grid>
            <Second_grid></Second_grid>
            <Third_grid></Third_grid>
            <div className ="grid grid-cols-4 gap-4">
                <div>01</div>
                <div>01</div>
                <div>1222</div>
                <div>01</div>
                <div>01</div>
                <div>

                </div>
                <div>01</div>
                <div>09</div>
            </div>
            

        </div>
    
    );
}