import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ErrorBoundary = ({ children }) => {
  const { setError } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const handleError = (errorEvent) => {
      console.error('Error caught:', errorEvent.error);
      setError(errorEvent.error.toString());
      navigate('/error');
    };

    const handleRejection = (rejectionEvent) => {
      console.error('Unhandled rejection:', rejectionEvent.reason);
      setError(rejectionEvent.reason.toString());
      navigate('/error');
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, [navigate, setError]);

  return children;
};

export default ErrorBoundary;