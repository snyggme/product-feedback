import { forwardRef } from "react";

const PanelFormSelect = forwardRef((props, ref) => {
    return (
        <div className='choose-type'>
            <label htmlFor="standard-select">Choose feedback's type:</label><br/>
            <div className='select'>
                <select 
                    id="standard-select" 
                    ref={ref} 
                >
                    <option value="Feature">Feature</option>
                    <option value="UI">UI</option>
                    <option value="UX">UX</option>
                    <option value="Enhancement">Enhancement</option>
                    <option value="Bug">Bug</option>
                </select>
                <span className="focus"></span>
            </div>
        </div>
    )
})


export default PanelFormSelect;