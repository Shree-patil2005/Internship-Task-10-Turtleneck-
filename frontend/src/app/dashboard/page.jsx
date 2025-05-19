'use client';
import { useRouter } from 'next/navigation';
import { account } from '../lib/appwrite';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await account.deleteSession('current');
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      <header className="bg-green-600 text-white p-0 shadow-lg">
        
        <div className="flex items-center justify-between mb-2">
          
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="LMS Logo" className="h-12 w-12 rounded-full shadow" />
          </div>

          
          <div className="flex flex-col items-center">
            <h1 className="text-[40px] font-bold ml-60 drop-shadow-lg">Welcome to SmartRead LMS Portal</h1>
            <p className="text-[25px] ml-50 italic text-gray-100">Read • Learn • Grow</p>
          </div>

          
          <div className="w-48 bg-white border border-black rounded-lg mr-10 shadow-inner">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        
        <nav className="flex justify-center space-x-29 mt-3 text-lg font-medium tracking-wide">
          <a href="/signup" className="hover:underline hover:text-yellow-300 transition">Home</a>
          <a href="/books" className="hover:underline hover:text-yellow-300 transition">Order Book</a>
          <a href="/feedback" className="hover:underline hover:text-yellow-300 transition">Feedback</a>
          
        </nav>
      </header>

      
      <div className="flex flex-1">
        
        <aside className="bg-gray-100 w-64 p-6 space-y-4 border-r border-gray-300 shadow-inner rounded-tr-xl rounded-br-xl">
  <h2 className="text-xl font-bold mb-4 text-green-800 tracking-wide border-b pb-2 border-green-400">
     Book Categories
  </h2>
  <nav className="space-y-8 text-gray-800">
    <a
      href="/Horral"
      className="block px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium"
    >
      👻 Horror Books
    </a>
    <a
      href="/phy"
      className="block px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium"
    >
      🧠 Psychological Books
    </a>
    <a
      href="/motivation"
      className="block px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium"
    >
      💡 Motivational Books
    </a>
    <a
      href="/god"
      className="block px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium"
    >
      📓 God's books
    </a>
    <a
      href="/love"
      className="block px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium"
    >
      ❤️ Romantic Books
    </a>
    <a
      href="/Comics"
      className="block px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium"
    >
      🎨 Comics Books
    </a>
  </nav>
</aside>

<main className="flex-1 p-6 bg-white">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-[27px] font-bold text-green-700 ml-80">Current Trendings Books</h2>
</div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        description: 'A gripping psychological thriller about a woman’s act of violence against her husband—and the therapist obsessed with uncovering why.',
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'A practical guide to breaking bad habits and building good ones through small, sustainable changes.',
      },
      {
        title: 'It Ends With Us',
        author: 'Colleen Hoover',
        description: 'An emotional rollercoaster of love, heartbreak, and resilience with deeply relatable characters.',
      },
      {
        title: 'The Subtle Art of Not Giving a back',
        author: 'Mark Manson',
        description: 'A brutally honest self-help book that encourages readers to embrace life’s struggles with humor and realism.',
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
        description: 'An epic science fiction saga of politics, religion, and power on a desert planet with vital resources.',
      },
      {
        title: 'Diary of a Wimpy Kid',
        author: 'Jeff Kinney',
        description: 'A hilarious illustrated novel following the life of a middle schooler navigating friendships and family.',
      },
    ].map((book, index) => (
      <div
        key={index}
        className="border rounded-xl p-4 bg-gray-50 shadow-md hover:shadow-xl transition-all duration-200"
      >
        <h3 className="font-semibold text-lg text-green-700 mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-2 text-gray-700">{book.description}</p>
      </div>
    ))}
  </div>
  <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition ml-230">
      Logout
    </button>
</main>

      </div>

      
      <footer className="bg-gray-300 text-center p-3 text-[18px] font-bold text-gray-700 shadow-inner">
        &copy; {new Date().getFullYear()} SmartRead LMS. All rights reserved.
      </footer>
    </div>
  );
}
