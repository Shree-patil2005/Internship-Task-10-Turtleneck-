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
      title: 'Time changes',
      author: 'Shree Patil',
      price: '₹500',
      description: 'Unstoppable flow, moments shift, future awaits.',
      image: 'https://images.squarespace-cdn.com/content/v1/5eb02fa4ee4acc4933cbdb5e/1621340881272-JF42J131Y98M9RFK4ZBC/28.jpg',
    },
    {
      title: 'Damn Just dream it',
      author: 'Dewang Mahadalker',
      price: '₹400',
      description: 'Limitless possibilities, imagination soars, reality bends.',
      image: 'https://cdn3.geckoandfly.com/wp-content/uploads/2017/01/short-quotes-encouraging-42.jpg',
    },
    {
      title: 'Power of Women',
      author: 'Sankalp Pawar',
      price: '₹500',
      description: 'Unyielding strength, boundless wisdom, unstoppable force.Echoes of the past never die.',
      image: 'https://i.pinimg.com/originals/5e/f3/6d/5ef36d7392daaf62049a81483f76024a.jpg',
    },
    {
      title: 'Just do it',
      author: 'Vignesh Malore',
      price: '₹1000',
      description: 'Fearless action, bold steps, no hesitation.',
      image: 'https://cdn4.geckoandfly.com/wp-content/uploads/2017/01/short-quotes-encouraging-20.jpg',
    },
    {
      title: 'Shyness',
      author: 'Kartavya Patil',
      price: '₹1500',
      description: 'Quiet strength, deep thoughts, hidden courage.'
      ,image: 'https://tse4.mm.bing.net/th?id=OIP.Twboy9K0KWbz9VxzVbHVwwHaEK&pid=Api&P=0&h=180',
    },
  ];

  
  const column2 = [
    {
      title: 'Time is beautiful',
      author: 'Rohan manda',
      price: '₹1200',
      description: 'Keep eye on time .',
      image: 'http://www.pixel77.com/wp-content/uploads/2014/09/12-Beautiful-and-Inspiring-Typography-Quote-Designs-1.jpg',
    },
    {
      title: 'slowly but consistensly',
      author: 'virat kholi',
      price: '₹750',
      description: 'The dream of god',
      image: 'https://marketplace.canva.com/EAE-3pxEC6Y/1/0/1600w/canva-brown-collage-scrapbook-motivational-quote-desktop-wallpaper-7DwA1p6wxuk.jpg',
    },
    {
      title: 'Actions over words',
      author: 'Tomas Andre',
      price: '₹900',
      description: 'your actions will speak louder then words',
      image: 'https://cdn.quotesgram.com/img/50/28/1005847188-Motivational_2BQuotes-741915.jpg',
    },
    {
      title: 'Your are beautiful',
      author: 'Shree Patil',
      price: '₹950',
      description: 'There is no one like you my darling',
      image: 'http://quotesbae.com/wp-content/uploads/2017/11/Inspirational-Quotes-On-Happiness-And-Life-10.jpg',
    },
    {
      title: 'Every day is a chance',
      author: 'Kartavya Patil',
      price: '₹2000',
      description: 'The art of winning heart',
      image: 'https://i.pinimg.com/originals/ce/24/c2/ce24c249b00103a7db359b57e4ce8790.jpg',
    },
  ];

  
  const column3 = [
    {
      title: 'Be like a baby',
      author: 'Om Parab',
      price: '₹850',
      description: 'Let your inner child speak loudly',
      image: 'https://i.pinimg.com/736x/c8/61/71/c86171b166729134d07ffb5a697ac355.jpg',
    },
    {
      title: 'Life',
      author: 'Sankalp Pawar',
      price: '₹1150',
      description: 'Wounds also get healed',
      image: 'https://www.hilariousjokesworld.com/wp-content/uploads/2025/05/46-Inspiring-Quotes-That-Show-How-Beautiful-Life-Is.webp',
    },
    {
      title: 'One day it will change',
      author: 'Shree Patil',
      price: '₹1400',
      description: 'Just keep smiling',
      image: 'https://i.pinimg.com/originals/e6/e8/c7/e6e8c71ac3f4de4860719f0517604298.jpg',
    },
    {
      title: 'The Pain behaind Smile',
      author: 'Shree Patil',
      price: '₹600',
      description: 'Every morning has a nightmare',
      image: 'https://i.pinimg.com/736x/26/cd/b8/26cdb8b44d6319992f0bb65fa9bb0850.jpg',
    },
    {
      title: 'Just Do it',
      author: 'Kartavya PAtil',
      price: '₹1000',
      description: 'Never giveup attitude',
      image: 'https://i.pinimg.com/originals/77/5a/26/775a263f21d8728eeed739f291a67fb9.jpg',
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
        <h2 className="text-[30px] font-bold mb-6 text-center text-black-600">Motivational Books Collection</h2>
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
