import '../componentsCss.css/Exhibit.css';

const Exhibit = ({name, children}) => {
  return (
    <div className ="Exhibit">
        <h2 className = "ExhibitHeading">{name}</h2>
        {/* <ul>
            <li>Watch</li>
            <li>Touch</li>
            <li>Feel</li>
        </ul> */}
        <div className = "ExhibitContent">
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