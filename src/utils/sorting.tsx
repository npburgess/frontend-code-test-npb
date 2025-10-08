import { User } from "../types"

export function sortUserData(key: keyof User, users: User[]): User[] {
	users.sort((a, b) => {
			let keyA = a[key];
			let keyB = b[key];

			//specific sort for company
			if (key === "company") {
				keyA = a.company.name;
				keyB = b.company.name;
			}
			
			//Handle string and number data types
			if (typeof keyA === "string" && typeof keyB === "string") {
				return keyA.localeCompare(keyB);
			} else if (typeof keyA === "number" && typeof keyB === "number") {
				return keyA - keyB;
			}

			//default return
			return 0;
		});
	
	return users;
}
