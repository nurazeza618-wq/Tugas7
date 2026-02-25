import NavButtonComponen from "../components/NavButtonComponen";
import NavitemsComponent from "../components/NavitemsComponent";

function NavbarLayout() {
    return (
        <>
        <div style = {{width:'100%',padding: ' 10px 20px',display: 'flex',justifyContent: 'space-between',alignItems:'center',top:0,left:0,position:'fixed'}}> 
          <div>
            <img  style= {{width: '150px'}}src="image/logo.png" alt="logo" />
            </div>      
                <div style= {{display: 'flex', flexDirection: 'row',gap: '20px', marginRight:'30px',alignItems: 'center',borderRadius: '10px',fontWeight:'600'}}>
            <NavitemsComponent text= 'About us'/>
            <NavitemsComponent text= 'Service'/>
            <NavitemsComponent text= 'Pricing'/>
            <NavitemsComponent text= 'Blog'/>
            <NavButtonComponen/>
            <div></div>
          </div>
        </div>
        </>
    ); 
}

export default NavbarLayout;