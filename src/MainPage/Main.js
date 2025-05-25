import './Main.css';
import picture from "..//assets/backgrounds/background_maincaruosel.png";

export default function MainPage() {
    return (
        <div className='d-flex'>
            <div className="d-flex justify-content-center align-items-center w-100">
                <div className="card w-75">
                    <div id="carouselExampleIndicator" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 h-100" src={picture} alt="Slide 1"/>
                                <div className='carousel-caption pb-4 d-none d-md-block text-end bg-overlay'>
                                    <p style={{fontSize: 30}}>Lorem Ipsums</p>
                                    <h2 className="fw-bold" style={{fontSize: 35}}>LOREM IPSUM</h2>
                                    <p>Lorem Ipsum is simply dummy text of the print.</p>
                                    <button className="btn btn-outline-light">LOREMS</button>                                    
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={picture} alt="Slide 2"/>
                                <div className='carousel-caption pb-4 d-none d-md-block text-end bg-overlay'>
                                    <p style={{fontSize: 30}}>Lorem Ipsums</p>
                                    <h2 className="fw-bold" style={{fontSize: 35}}>LOREM IPSUM</h2>
                                    <p>Lorem Ipsum is simply dummy text of the print.</p>
                                    <button className="btn btn-outline-light">LOREMS</button>                                    
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={picture} alt="Slide 3"/>
                                <div className='carousel-caption pb-4 d-none d-md-block text-end bg-overlay'>
                                    <p style={{fontSize: 30}}>Lorem Ipsums</p>
                                    <h2 className="fw-bold" style={{fontSize: 35}}>LOREM IPSUM</h2>
                                    <p>Lorem Ipsum is simply dummy text of the print.</p>
                                    <button className="btn btn-outline-light">LOREMS</button>                                    
                                </div>                                
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={picture} alt="Slide 4"/>
                                <div className='carousel-caption pb-4 d-none d-md-block text-end bg-overlay'>
                                    <p style={{fontSize: 30}}>Lorem Ipsums</p>
                                    <h2 className="fw-bold" style={{fontSize: 35}}>LOREM IPSUM</h2>
                                    <p>Lorem Ipsum is simply dummy text of the print.</p>
                                    <button className="btn btn-outline-light">LOREMS</button>                                    
                                </div>                                
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}