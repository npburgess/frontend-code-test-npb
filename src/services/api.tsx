import { User } from "../types"
import { sortUserData } from "../utils/sorting"

export async function fetchUserData(): Promise<User[]> {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	if (!response.ok) {
		throw new Error('Failed to fetch user data');
	}
	const data: User[] = await response.json();
	//default sort
	return sortUserData('name', data);
}
