import { Badge, Button, Card, Dropdown, DropdownItem } from 'flowbite-react';
import { HiChevronRight } from 'react-icons/hi';

export const Users = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          Users <Badge>5</Badge>
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
        {/* User 1 - Leanne Graham */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://avatar.iran.liara.run/username?username=Leanne+Graham"
                alt="Leanne Graham avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Leanne Graham
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    @Bret
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
                  <span className="truncate">Sincere@april.biz</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="truncate">1-770-736-8031 x56442</span>
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
                  <span className="truncate">Gwenborough, 92998-3874</span>
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
                    Romaguera-Crona
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                  "Multi-layered client-server neural-net"
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* User 2 - Ervin Howell */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://avatar.iran.liara.run/username?username=Ervin+Howell"
                alt="Ervin Howell avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Ervin Howell
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    @Antonette
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
                  <span className="truncate">Shanna@melissa.tv</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="truncate">010-692-6593 x09125</span>
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
                  <span className="truncate">Wisokyburgh, 90566-7771</span>
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
                    Deckow-Crist
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                  "Proactive didactic contingency"
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* User 3 - Clementine Bauch */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://avatar.iran.liara.run/username?username=Clementine+Bauch"
                alt="Clementine Bauch avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Clementine Bauch
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    @Samantha
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
                  <span className="truncate">Nathan@yesenia.net</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="truncate">1-463-123-4447</span>
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
                  <span className="truncate">McKenziehaven, 59590-4157</span>
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
                    Romaguera-Jacobson
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                  "Face to face bifurcated interface"
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* User 4 - Patricia Lebsack */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://avatar.iran.liara.run/username?username=Patricia+Lebsack"
                alt="Patricia Lebsack avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Patricia Lebsack
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    @Karianne
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
                  <span className="truncate">Julianne.OConner@kory.org</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="truncate">493-170-9623 x156</span>
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
                  <span className="truncate">South Elvis, 53919-4257</span>
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
                    Robel-Corkery
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                  "Multi-tiered zero tolerance productivity"
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* User 5 - Chelsey Dietrich */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://avatar.iran.liara.run/username?username=Chelsey+Dietrich"
                alt="Chelsey Dietrich avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Chelsey Dietrich
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    @Kamren
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
                  <span className="truncate">Lucio_Hettinger@annie.ca</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="truncate">(254)954-1289</span>
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
                  <span className="truncate">Roscoeview, 33263</span>
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
                    Keebler LLC
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                  "User-centric fault-tolerant solution"
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
