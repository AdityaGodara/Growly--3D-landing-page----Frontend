import { useSnapshot } from "valtio"
import state from "../store"

const CutomButton = ({ type, title, customStyles, handleClick }) => {

    const snap = useSnapshot(state);
    const generateStyle = (type)=>{
        if(type=="filled"){
            return{
                backgroundColor: snap.color,
                color: 'black',
                boxShadow: `0px 10px 20px `+ snap.color,
            }
        }else if(type=="outline"){
            return{
                border: `1px solid ${snap.color}`,
                color: snap.color,
                backgroundColor: 'transparent',
            }
        }
    }

    return (
        <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
            {title}
        </button>
    )
}

export default CutomButton
