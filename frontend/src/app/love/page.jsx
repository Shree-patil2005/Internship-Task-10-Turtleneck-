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
      title: 'The heart of Stone',
      author: 'Shree Patil',
      price: '₹500',
      description: 'Willans are not born they are made',
      image: 'https://miblart.com/wp-content/uploads/2021/02/image3.png',
    },
    {
      title: 'The are of Imaging with her',
      author: 'Om Parab',
      price: '₹400',
      description: 'One-Sided is also beautiful Men',
      image: 'https://www.herstylecode.com/2020/02/40-romantic-things-to-say-to-your-boyfriend_herstylecode.jpg',
    },
    {
      title: 'You and Me',
      author: 'Kartavya Patil',
      price: '₹500',
      description: 'When I found My Soulmate',
      image: 'https://wallpaperaccess.com/full/2799261.jpg',
    },
    {
      title: 'The Broken Heart',
      author: 'Vignesh Malore',
      price: '₹1000',
      description: 'The Pain behind smile',
      image: 'https://online.visual-paradigm.com/repository/images/fa42c021-3563-4c1d-a4a7-bd29e66e0f26/book-covers-design/love-and-romance-book-cover.png',
    },
    {
      title: 'Red Roses, Red Heart',
      author: 'Kartavya Patil',
      price: '₹1500',
      description: 'I and You'
      ,image: 'https://1.bp.blogspot.com/-kE9pOALNkGA/ViygQqNidGI/AAAAAAAAK40/RRe3IIsgPhk/s1600/love-red-roses-romantic-flower-pic.jpg',
    },
  ];

  
  const column2 = [
    {
      title: 'Old She and her Old heart',
      author: 'Shree Patil',
      price: '₹1200',
      description: 'Time was beautiful, but it was Past',
      image: 'https://i.ytimg.com/vi/Rf9Dk0f623w/maxresdefault.jpg',
    },
    {
      title: 'Only you and you',
      author: 'Shree Patil',
      price: '₹750',
      description: 'When She is only one in your eyes and heart!!',
      image: 'https://i.pinimg.com/originals/d0/33/2a/d0332af767bd18c7a12af89ebf07ec2d.jpg',
    },
    {
      title: 'The heart of caring',
      author: 'Vignesh Malore',
      price: '₹900',
      description: 'Why person always select wrong one?',
      image: 'https://i.pinimg.com/originals/19/d0/37/19d037e6feccc33e8a624476da3db2a1.jpg',
    },
    {
      title: 'The Power of one chocolate',
      author: 'Kartavya Patil',
      price: '₹950',
      description: 'The chocolate that i give you',
      image: 'https://www.homemade-gifts-made-easy.com/image-files/cute-boyfriend-quotes-ocean-800x1090.jpg',
    },
    {
      title: 'You Broke Me',
      author: 'Vignesh Malore',
      price: '₹2000',
      description: 'Trying to heal',
      image: 'https://freshprompts-blog-images.s3.amazonaws.com/broken-heart-drawing-ideas/heart-02.jpg',
    },
  ];

  
  const column3 = [
    {
      title: 'When i first saw you',
      author: 'Kartavya Patil',
      price: '₹850',
      description: 'Her voice, Her hair, her eyes, Damn She is gorgeous',
      image: 'http://2.bp.blogspot.com/-EIvWU3SXysY/UQFXYn0dVaI/AAAAAAAARfw/2Lp7llnnbXk/s1600/Love+Quotes+Desktop+Wallpapers+02.jpg',
    },
    {
      title: 'When she Come',
      author: 'Shree Patil',
      price: '₹1150',
      description: 'When she left!!',
      image: 'http://wallpapercave.com/wp/2dicTv5.jpg',
    },
    {
      title: 'Day One You will be mine',
      author: 'Om Parab',
      price: '₹1400',
      description: 'Do efforts matter?',
      image: 'http://cdn.wallpapersafari.com/73/65/OeqSr1.jpg',
    },
    {
      title: 'Her Name',
      author: 'Vignesh Malore',
      price: '₹600',
      description: 'Why you choose him over me??',
      image: 'https://www.thingstodoonmauiblog.com/wp-content/uploads/2015/02/Top-10-most-romantic-Maui.jpg',
    },
    {
      title: 'Heart Break',
      author: 'Vignesh Malore',
      price: '₹1000',
      description: 'Why, Why?',
      image: 'http://2.bp.blogspot.com/-_0_tgTDSVWs/UsZke64au7I/AAAAAAAAATM/9Q1hxUEyfGA/s1600/Broken-Heart-Wallpaper-Heart-Love-HD.jpg',
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
        <h2 className="text-[30px] font-bold mb-6 text-center text-black-600">Romantic Books Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {col.map((book, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl transition">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-70 object-cover rounded-t-xl"
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
