import '../styles/Transition.css'


function Transition({color}) {
	return (
		<div className={`container ${color}`}>
         <div className={`diagonal ${color}`}></div>
        </div>
		)
}

export default Transition