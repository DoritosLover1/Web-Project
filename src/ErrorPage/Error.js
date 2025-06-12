import error404 from "../assets/backgrounds/background_404.png";

export default function Error() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='text-center'>
                <img
                    src={error404}
                    alt="Error Icon"
                    className="img-fluid d-block mx-auto w-100 mb-4"
                />
                <h1>Oops! Page not found</h1>
                <p className='text-muted'>
                    The page you are looking for might have been removed or temporarily unavailable.
                </p>
                <button type='button' className='btn btn-danger btn-lg px-4'>
                    Back to HomePage
                </button>
            </div>
        </div>
    );
}