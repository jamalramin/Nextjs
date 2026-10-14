interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 60 } }
  );

  const users: User[] = await response.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        User Information
      </h1>

      <table className="table table-pin-cols table-bordered">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}