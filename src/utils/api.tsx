export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: {
		city: string;
		street: string;
		suite: string;
		zipcode: string;
	}
	company: {
		name: string;
		bs: string;
		catchPhrase: string;
	}
}

export async function fetchUserData(): Promise<User[]> {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	if (!response.ok) {
		throw new Error('Failed to fetch user data');
	}
	const data: User[] = await response.json();
	return data;
}
