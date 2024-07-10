import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element, user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return element;
}