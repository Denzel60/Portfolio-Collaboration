import image from "./../../assets/person.jpg"
import "./Home.css"
function Home() {
    const pdf_file="http://localhost:5173/"
    const downloadFileAtUrl=(url)=>{
        const fileName=url.split("/").pop();
       const  aTag=document.createElement("a");
        aTag.href =url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div>
            <div className="intro">
            <div className="content">
            <h2>hi i am john,</h2>
            <h2> creative technologist</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis blanditiis id odit corrupti eaque culpa facilis harum suscipit qui et error similique iure maxime maiores officia rem quasi, repudiandae labore dolorem cupiditate numquam vitae atque ex.</p>
            <div className="download">
                    <button className="download" onClick={()=>{downloadFileAtUrl(pdf_file)}}>download resume</button>
                </div>
            </div>
                <div className="profimg">
                        <img src={image} alt=""/>
                    </div>
            </div>
            <div className="posted">
            <div className="rect">
                <h3>recently posted</h3>
                <p>view all</p>
            </div>
            <div className="recentpost">
            
                <div className="post">
                    <h3>making adesign system from scratch</h3>
                    <div className="date">
                        <p>12 feb 2020</p>
                        <p>design, pattern</p>
                    </div>
                    <div className="explin">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis blanditiis id odit corrupti eaque culpa facilis harum suscipit qui et error similique iure maxime maiores officia rem quasi, repudiandae labore dolorem cupiditate numquam vitae atque ex.
                        </p>
                    </div>
                </div>
                <div className="post">
                    <h3>creating pixel perfect icons in figma</h3>
                    <div className="date">
                        <p>12 feb 2020</p>
                        <p>design, pattern</p>
                    </div>
                    <div className="explain">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis blanditiis id odit corrupti eaque culpa facilis harum suscipit qui et error similique iure maxime maiores officia rem quasi, repudiandae labore dolorem cupiditate numquam vitae atque ex.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Home