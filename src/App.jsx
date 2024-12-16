import { gql, useQuery } from '@apollo/client';
import { TEXT_LOADING } from '../text';

// GraphQL Query
const query = gql`
  query GetTodos {
     getTodos {
        id
        completed
        user {
            name
            email
            phone
        }
    }
    getAllUsers {
        name
        email
      phone  
    },
  }
`;

function App() {
  // Apollo useQuery hook to fetch the data 
  const { data, loading } = useQuery(query);
  if (loading) return <h1>{TEXT_LOADING}</h1>;
  const formattedJSON = JSON.stringify(data, null, 2);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>GraphQl Data</h1>
      <pre
        style={{
          backgroundColor: '#f4f4f9',
          padding: '15px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          overflowX: 'auto',
        }}
      >
        {formattedJSON}
      </pre>
    </div>
  );
}

export default App;
