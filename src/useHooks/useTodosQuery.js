  import { useQuery } from '@tanstack/react-query';
  
async function fetchTodos() {
  const response = await fetch('https://dummyjson.com/users');
  if (!response.ok) throw new Error('Failed to load todos');
  return response.json();
}


  export default function useTodosQuery (){
    return useQuery({
        queryKey:['todos'],
        queryFn:fetchTodos,
        staleTime: 60 * 1000
    })
  }
