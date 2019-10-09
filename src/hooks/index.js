import { useLocation } from 'react-router-dom';

export const useQueryParams = () => new URLSearchParams(useLocation().search);

export default useQueryParams;
