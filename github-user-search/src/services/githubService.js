// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Search GitHub users with optional filters.
 * @param {string} username - The GitHub username (query term).
 * @param {string} location - Optional location filter.
 * @param {number} minRepos - Optional minimum public repos filter.
 * @returns {Promise<Object>} - GitHub search response.
 */
export const searchUsers = async (username, location = "", minRepos = 0) => {
  try {
    let query = username;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
