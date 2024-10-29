import React, { useState, useEffect } from 'react';
import { Game, mockApiService } from '../service/data';
import search from '../assets/images/searchIcon.svg';

interface GamesProps {
  activeItem: string | null;
}

const GameGrid: React.FC<GamesProps> = ({ activeItem }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await mockApiService.getGames();
        setGames(data.map(game => ({ ...game, isFavorite: false })));
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const toggleFavorite = (id: string) => {
    setGames(games.map(game =>
      game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
    ));
  };

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div role="status" className='grid place-items-center mt-20'>
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <main>
      <div>
        <div className="mb-6 flex justify-left items-center gap-4 relative w-full mt-3 lg:mt-6">
          {activeItem === 'search' ?
            <form className="max-w-xl w-full gap-4 flex items-center mt-2 md:mt-5">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full py-2 pl-10 pr-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="bg-white/5 border border-gray-400 rounded-lg flex justify-center items-center" style={{ width: '42px', height: '32px' }}>
                <img src={search} alt="Search" className="w-auto h-auto" />
              </div>
            </form> : null}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
          {filteredGames.map((game) => (
            <div onClick={() => toggleFavorite(game.id)} className="relative flex justify-center items-center" key={game.id}>
              <img
                src={game.image}
                alt={game.title}
                className="relative h-auto max-w-full rounded-lg flex-grow object-cover"
              />
              <span>
                <img
                  src='/static/img/bg.svg'
                  alt={game.title}
                  className="absolute right-0 top-0 rounded-tr-lg lg:rounded-tr-2xl lg:w-5/12"
                />
              </span>
              {game.isFavorite ? <span>
                <img
                  src='/static/img/star.svg'
                  alt={game.title}
                  className="absolute right-1 top-1 lg:right-3 lg:top-3 lg:w-8"
                />
              </span> :
                <span>
                  <img
                    src='/static/img/whitestar.svg'
                    alt={game.title}
                    className="absolute right-1 top-1 lg:right-3 lg:top-3 lg:w-8"
                  />
                </span>
              }

            </div>
          ))}
        </div>
        {filteredGames.length === 0 && (
          <div className="text-center py-8 text-gray-500 col-span-full">
            No games found matching "{searchTerm}"
          </div>
        )}
      </div>
    </main>

  );
};

export default GameGrid;
