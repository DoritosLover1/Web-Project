import './Main.css';
import picture from "../assets/backgrounds/background_maincaruosel.jpg";
import picture2 from "../assets/backgrounds/background_maincaruosel-2.jpg";
import picture3 from "../assets/backgrounds/background_maincaruosel-3.jpg";
import picture4 from "../assets/backgrounds/background_maincaruosel-4.jpg";

export default function MainPage() {
    return (
        <div className='d-flex flex-column'>
            <div className="d-flex justify-content-center align-items-center w-100">
                <div className="card w-100">
                    <div id="carouselExampleIndicator" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 img-sizer" src={picture} alt="Slide 1" style={{height: '500px', objectFit: 'cover'}}/>
                                <div className='carousel-caption pb-2 pb-md-4 text-end txt-md-end pb-2 pb-md-4'>
                                    <div className='p-2 p-md-3 mb-5 rounded text-center '>
                                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                                    </div>                                   
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img-sizer" src={picture2} alt="Slide 2" style={{height: '500px', objectFit: 'cover'}}/>
                                <div className='carousel-caption pb-2 pb-md-4 text-end txt-md-end'>
                                    <div className='p-2 p-md-3 mb-5 rounded text-center'>
                                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                                    </div>                                   
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img-sizer" src={picture3} alt="Slide 3" style={{height: '500px', objectFit: 'cover'}}/>
                                <div className='carousel-caption pb-2 pb-md-4 text-end txt-md-end'>
                                    <div className='p-2 p-md-3 mb-5 rounded text-center'>
                                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                                    </div>                                   
                                </div>                           
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img-sizer" src={picture4} alt="Slide 4" style={{height: '500px', objectFit: 'cover'}}/>
                                <div className='carousel-caption pb-2 pb-md-4 text-end txt-md-end'>
                                    <div className='p-2 p-md-3 mb-5 rounded text-center'>
                                        <p className='mb-1 mb-md-2 p-text'>Lorem Ipsums</p>
                                        <h2 className="fw-bold mb-2 mb-md-3 h2-text">LOREM IPSUM</h2>
                                        <p className='mb-2 mb-md-3 d-none d-sm-block p-inside-text'>Lorem Ipsum is simply dummy text of the print.</p>
                                        <button className="btn btn-outline-light btn-sn btn-md-normal">LOREMS</button>
                                    </div>                                   
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
            <div className='d-flex justify-content-center align-items-start my-5'>
                <div className='px-5 py-4 mx-5 d-flex align-items-start' style={{backgroundColor: "#F2EADF"}}>
                    <div className='fw-bold me-2' style={{color: "#C3914A", fontSize: 60}}>1</div>
                    <div className='mt-4'>
                        <h6 className="mb-1 fw-bold text-dark fs-4">LOREM IPSU</h6>
                        <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
                    </div>
                </div>
                <div className=' px-5 py-4 mx-5 d-flex align-items-start' style={{backgroundColor: "#E6EDDD"}}> 
                    <div className='fw-bold me-2' style={{color: "#5F9101", fontSize: 60}}>1</div>   
                    <div className='mt-4'>
                        <h6 className="mb-1 fw-bold text-dark fs-4">LOREM IPSU</h6>
                        <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
                    </div>
                </div>
                <div className=' px-5 py-4 mx-5 d-flex align-items-start' style={{backgroundColor: "#FDF2DE"}}>
                    <div className='fw-bold me-2' style={{color: "#FEBA28", fontSize: 60}}>1</div>
                    <div className='mt-4'>
                        <h6 className="mb-1 fw-bold text-dark fs-4">LOREM IPSU</h6>
                        <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
                    </div>
                </div>
                <div className=' px-5 py-4 mx-5 d-flex align-items-start' style={{backgroundColor: "#E1EDF9"}}>
                    <div className='fw-bold me-2' style={{color: "#2E97FF", fontSize: 60}}>1</div>
                    <div className='mt-4'>
                        <h6 className="mb-1 fw-bold text-dark fs-4">LOREM IPSU</h6>
                        <p className="mb-0 text-muted small">Lorem Ipsum is.</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}