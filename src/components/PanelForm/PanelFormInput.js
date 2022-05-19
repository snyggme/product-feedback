import { forwardRef } from "react";

const PanelFormInput = forwardRef((props, ref) => {
    return (
        <div>
            <label htmlFor="feedback-name">New feedback's name:</label><br/>
            <input 
                required 
                ref={ref}
                type="text" 
                id="feedback-name" 
                placeholder="Feedback's name"
            />
        </div>
    )
})


export default PanelFormInput;