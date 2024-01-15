import { useEffect } from 'react';

function useOnMount(name) {
  useEffect(() => console.log(`mounted node ${name}`), []);
}

export default useOnMount;
