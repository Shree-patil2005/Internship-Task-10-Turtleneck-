'use client';
import { useRouter } from 'next/navigation';
import { account } from '../lib/appwrite';

export default function HorralPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await account.deleteSession('current');
    router.push('/login');
  };

  
  const column1 = [
    {
      title: 'The Haunted Manor',
      author: 'Sarah Grey',
      price: '₹500',
      description: 'A chilling tale of an abandoned mansion.',
      image: 'http://static.businessinsider.com/image/54514d2a6bb3f74239258e5c/image.jpg',
    },
    {
      title: 'Shadow Lane',
      author: 'Mike Adams',
      price: '₹400',
      description: 'Ghosts that wander the empty streets.',
      image: 'https://www.selectedreads.com/wp-content/uploads/2024/01/Haunting-Adeline-Summary.png',
    },
    {
      title: 'Dark Echoes',
      author: 'Eva Woods',
      price: '₹500',
      description: 'Echoes of the past never die.',
      image: 'https://haunteddiary.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-06-16.34.15-An-image-of-the-Grand-Oak-Manor-a-grand-old-house-with-an-aura-of-mystery-and-supernatural-occurrences.-The-setting-is-dusk-with-the-house-partiall.png',
    },
    {
      title: 'Midnight Murmurs',
      author: 'Ralph Finch',
      price: '₹$1000',
      description: 'What happens when the clock strikes twelve?',
      image: 'https://pics.craiyon.com/2023-09-15/3686a77a01fd49969fbbbbf2fa1217ba.webp',
    },
    {
      title: 'Dead of Night',
      author: 'Alice Graves',
      price: '₹1500',
      description: 'Darkness hides the unspeakable.',
      image: 'https://tse4.mm.bing.net/th?id=OIF.QwOTyJs6OPUW1960ri2tsA&pid=Api&P=0&h=180',
    },
  ];

  
  const column2 = [
    {
      title: 'The Forgotten Crypt',
      author: 'Dan Hollow',
      price: '₹1200',
      description: 'An ancient mystery buried beneath.',
      image: 'https://static.vecteezy.com/system/resources/previews/023/801/136/large_2x/the-scary-ghost-girl-in-the-hospital-hallway-ai-generated-free-photo.jpeg',
    },
    {
      title: 'Ghost Ship',
      author: 'Lara Bell',
      price: '₹750',
      description: 'The sea has secrets it won’t release.',
      image: 'https://cdn.wallpapersafari.com/90/86/nVb972.jpg',
    },
    {
      title: 'Crimson Eyes',
      author: 'Tom Black',
      price: '₹900',
      description: 'He sees you, even when you don’t.',
      image: 'https://thumbs.dreamstime.com/b/scary-ghost-woman-dark-backgrounds-scary-ghost-woman-dark-background-158076113.jpg',
    },
    {
      title: 'The Last Candle',
      author: 'Nina Frost',
      price: '₹950',
      description: 'When the last light dies, fear begins.',
      image: 'https://www.parents.com/thmb/DUyi6Vrwsr6CgaOkbiBq45aW0Xc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-553008905-2000-68d9e62858ba44f98961d3ec39abc757.jpg',
    },
    {
      title: 'Whispers of the Grave',
      author: 'Alan Moore',
      price: '₹2000',
      description: 'Can you hear them calling?',
      image: 'https://wallpaperaccess.com/full/1615594.jpg',
    },
  ];

  
  const column3 = [
    {
      title: 'The Mirror Curse',
      author: 'Jenna Reed',
      price: '₹850',
      description: 'Never look twice into a cursed mirror.',
      image: 'https://wallpapercave.com/wp/wp9024817.jpg',
    },
    {
      title: 'Blood Forest',
      author: 'Rick Hunter',
      price: '₹1150',
      description: 'Some woods should never be entered.',
      image: 'http://im.rediff.com/movies/2018/apr/19ghost4.jpg',
    },
    {
      title: 'The Hollow Smile',
      author: 'Grace Doyle',
      price: '₹1400',
      description: 'A smile that hides something sinister.',
      image: 'https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2022/06/20235247/100-horror-the-innocents-Custom.jpg',
    },
    {
      title: 'Dollhouse Secrets',
      author: 'Becky Lynn',
      price: '₹600',
      description: 'Dolls that whisper at night.',
      image: 'https://img.freepik.com/photos-premium/photo-noir-blanc-figure-fantomatique-dans-piece-consommation-generative-ai_955925-3321.jpg',
    },
    {
      title: 'Room 13',
      author: 'Sam Quinn',
      price: '₹1000',
      description: 'There’s a reason this room is always locked.',
      image: 'https://i.pinimg.com/originals/1a/39/50/1a39507ca0aa5cc8e7754f33f6e641bc.jpg',
    },
  ];

  const columns = [column1, column2, column3];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-0 shadow-md">
        <div className="text-center">
          <h1 className="text-[40px] font-extrabold tracking-wide">Welcome to Smart Read LMS Portal</h1>
          <p className="text-[25px] italic mt-1">Read • Learn • Grow</p>
        </div>
        <nav className="flex justify-center space-x-29 mt-3 text-lg font-medium tracking-wide">
          <a href="/signup" className="hover:underline hover:text-yellow-300 transition">Home</a>
          <a href="/books" className="hover:underline hover:text-yellow-300 transition">Order Book</a>
          <a href="/feedback" className="hover:underline hover:text-yellow-300 transition">Feedback</a>
          
          <a href="/dashboard" className="hover:underline hover:text-yellow-300 transition">Dashboard</a>
        </nav>
      </header>

      
      <main className="flex-1 p-4">
        <h2 className="text-[30px] font-bold mb-6 text-center text-red-600">Horral Books Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {col.map((book, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl transition">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-60 object-cover rounded-t-xl"
                  />
                  <div className="p-4 border border-yellow-400">
                    <h3 className="text-[25px] font-semibold mb-1">{book.title}</h3>
                    <p className="text-gray-800 text-[20px]">Author: {book.author}</p>
                    <p className="text-gray-700 text-[18px]">Price: {book.price}</p>
                    <p className="text-gray-700 text-[17px] mt-2">{book.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>

      
      <footer className="bg-gray-400 text-center py-2 text-gray-700 font-semibold mt-6 shadow-inner text-[20px]">
        <p>&copy; {new Date().getFullYear()} Smart Read LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
