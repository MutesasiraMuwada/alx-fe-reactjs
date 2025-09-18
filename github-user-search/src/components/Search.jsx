// src/components/Search.jsx
import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 👇 Required function for API request handling
  const fetchUserData = async (username, location) => {
    setLoading(true);
    setError("");

    try {
      const data = await searchUsers(username, location);
      setUsers(data.items || []);
    } catch (err) {
      setError("Something went wrong while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUserData(username, location); // 👈 Use the new function
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Username input */}
        <input
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {/* Location input */}
        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <ul className="mt-6 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700"
            >
              {user.login}
            </a>
            {user.location && (
              <p className="text-sm text-gray-600">📍 {user.location}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
