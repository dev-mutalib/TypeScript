import axios, { AxiosResponse } from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      'https://jsonplacholder.typicode.com/todos/1',
    );
    console.log('Todo', response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log('Axios Error', error.message);
      if(error.response){
          console.log('Error:', error.response.status)
      }
    }
  }
};
