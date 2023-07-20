import '../componentsCss.css/Exhibit.css';

const Exhibit = ({name, children}) => {
  return (
    <div className ="exhibit">
        <h2>{name}</h2>
        {/* <ul>
            <li>Watch</li>
            <li>Touch</li>
            <li>Feel</li>
        </ul> */}
        <div className = "exhibit__items">
            {/* <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p> */}
            {/* {this.children} */}
            {children}
        </div>
        
    </div>
  )
}

export default Exhibit