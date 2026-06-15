import NotFoundAnimation from '../components/404';
function PageNotFound() {
  return (
    <div className="not-found w-full h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <div className='text-center'>
        <NotFoundAnimation />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
export default PageNotFound;
