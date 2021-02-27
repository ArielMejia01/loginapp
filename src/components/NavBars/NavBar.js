import NavBarItems from "./NavBaritems";

function NavBar(){
    let dummyData = [
        { label: "Home", uri:"#home"},
        { label: "Tarjetas", uri:"#cards"},
        { label: "Acerca", uri:"#acerca"},
    ];
    let navBarItems = dummyData.map((o, i)=>{
        return (<NavBarItems label={o.label} uri={o.uri} key={i}></NavBarItems>);
    });
    return(
        <nav>
            <ul>
                {navBarItems}
            </ul>
        </nav>
    );
}

export default NavBar;