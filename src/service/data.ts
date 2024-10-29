
export interface Game {
  id: string;
  title: string;
  image: string;
  isFavorite?: boolean;
}

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'Big Bad Wolf',
    image: '/static/img/wolf.svg'
  },
  {
    id: '2',
    title: 'Beach Life',
    image: '/static/img/beach.svg'
  },
  {
    id: '3',
    title: 'Maya Jackpot',
    image: '/static/img/maya.svg'
  },
  {
    id: '4',
    title: 'Pirates Power',
    image: '/static/img/pirates.svg'
  },
  {
    id: '5',
    title: 'Book of Egypt',
    image: '/static/img/book.svg'
  },
  {
    id: '6',
    title: 'Pride of Persia',
    image: '/static/img/pride.svg'
  },
  {
    id: '7',
    title: 'Azteca Bonus Lines',
    image: '/static/img/azteca.svg'
  },
  {
    id: '8',
    title: 'Anaconda Wild 2',
    image: '/static/img/anaconda.svg'
  },
  {
    id: '9',
    title: 'Sugar Rush',
    image: '/static/img/sugar.svg'
  },
  {
    id: '10',
    title: 'Crocodile Blitz',
    image: '/static/img/croco.svg'
  },
  {
    id: '11',
    title: 'Azteca Bonus Lines',
    image: '/static/img/azteca.svg'
  },
  {
    id: '12',
    title: 'Maya Jackpot',
    image: '/static/img/maya.svg'
  },
  {
    id: '13',
    title: 'Pride of Persia',
    image: '/static/img/pride.svg'
  },
  {
    id: '14',
    title: 'Beach Life',
    image: '/static/img/beach.svg'
  },
  {
    id: '15',
    title: 'Big Bad Wolf',
    image: '/static/img/wolf.svg'
  }
];
  
  export const mockApiService = {
    getGames: () => {
      return new Promise<Game[]>((resolve) => {
        setTimeout(() => {
          resolve(mockGames);
        }, 500);
      });
    }
  };