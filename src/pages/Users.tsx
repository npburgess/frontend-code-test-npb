import { Badge, Button, Card, Dropdown, DropdownItem } from 'flowbite-react';
import { HiChevronRight } from 'react-icons/hi';
import { User, fetchUserData } from '../utils/api';
import React, { useState, useEffect } from 'react';
    
export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      try {
        const fetchedUsers: User[] = await fetchUserData();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchAndSetUsers();
  }, []);


  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          Users <Badge>{users && users.length}</Badge>
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Sort by:
          </div>
          <Dropdown label={'Name Desc'}>
            <DropdownItem value="name">Name</DropdownItem>
            <DropdownItem value="Username">Username</DropdownItem>
            <DropdownItem value="Company">Company</DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-4">
        {users && users.map(user => (
          <Card key={user.id}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img
                  src={"https://avatar.iran.liara.run/username?username=" + encodeURIComponent(user.name)}
                  alt={user.name + " avatar"}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                    {"@" + user.username}
                    </p>
                  </div>
                  <Button>
                    <span className="hidden sm:inline">View Details</span>
                    <HiChevronRight size={20} />
                  </Button>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="truncate">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="truncate">{user.address.city + ", " + user.address.zipcode}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {user.company.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                    "{user.company.catchPhrase}"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};