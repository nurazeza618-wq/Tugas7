import NavbarLayout from "../Layout/NavbarLayout";
import JumbotronLayout from "../Layout/JumbotronLayout";
import CompanyImageLayout from "../Layout/CompanyImageLayout"; 
import TittleSection from "../components/TittleSectionComponent";
import ServicesSection from "../components/ServicesSection";

function HomePage() {
    return (
        <>
            <NavbarLayout/>

            <div style={{ marginTop: '0px' }}>
                <JumbotronLayout/>
            </div>
             <CompanyImageLayout/>

             <TittleSection
             title= "Service"
             description= "At our digital marketing agency,we offer a range of services to have busines grow and succed online.They service include "
             />
             <ServicesSection/>
        </>
    );   
}

export default HomePage;