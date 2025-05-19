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
      title: 'The power of batmen',
      author: 'Sarth mahatre',
      price: '₹500',
      description: 'LAugh with batmen',
      image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781683834748/dc-comics-detective-comics-the-complete-covers-vol-1-9781683834748_hr.jpg',
    },
    {
      title: 'Iron men logic',
      author: 'Kedar Todankar',
      price: '₹400',
      description: 'Cpmplete madness',
      image: 'https://lrpctech.files.wordpress.com/2013/05/026-iron-man-126-john-romita-jr.jpg',
    },
    {
      title: 'The father of superman',
      author: 'Parry Kom',
      price: '₹500',
      description: 'The father scolding',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699557764-91kCNDS7ucL.jpg?crop=1xw:1xh;center,top&resize=980:*',
    },
    {
      title: 'The Heros',
      author: 'Vignesh Malore',
      price: '₹1000',
      description: 'The art of laughing',
      image: 'http://www.nerdly.co.uk/wp-content/uploads/2018/12/justice-league-v1-cover.jpg',
    },
    {
      title: 'River Monster',
      author: 'Kartavya Patil',
      price: '₹1500',
      description: 'The fear and laughing of river'
      ,image: 'http://3.bp.blogspot.com/-uWuQpDCX7Zg/VEToqo_cBQI/AAAAAAAAYQ0/uR981aCJ8VA/s1600/MarvelComics_%231.jpg',
    },
  ];

  
  const column2 = [
    {
      title: 'The crul lady',
      author: 'Mera Patil',
      price: '₹1200',
      description: 'The laugh of Women',
      image: 'https://archiecomics.com/wp-content/uploads/2022/11/FCBD2023_TheCursedLibrary_Cover_Hack.jpg',
    },
    {
      title: 'Super Man Duper Man',
      author: 'MS Dhoni',
      price: '₹750',
      description: 'The laught of superman',
      image: 'https://cdn.kobo.com/book-images/00284104-af1d-45d4-88f5-2a96bfb462d9/1200/1200/False/history-of-comic-books.jpg',
    },
    {
      title: 'Blue T-shirt',
      author: 'Tomas Andre',
      price: '₹900',
      description: 'Focusing on fighting',
      image: 'http://www.brooklyncomicshop.com/BCS/wp-content/uploads/2019/01/Most-Influential-Comic-Book-Artists-Neal-Adams-Brooklyn-Comic-Shop.jpg',
    },
    {
      title: 'Spider men going wild',
      author: 'Shree Patil',
      price: '₹950',
      description: 'The nets',
      image: 'https://3.bp.blogspot.com/-13iRVfa050U/XP1rjokLb-I/AAAAAAABJlI/_1TqAaM6ZLM8ZVgOok5sP8PVv4XkZ8tCgCLcBGAs/s1600/STL121149.jpeg',
    },
    {
      title: 'The horse Raider',
      author: 'Kartavya Patil',
      price: '₹2000',
      description: 'Laguther is Desart',
      image: 'https://i2.wp.com/josephmallozzi.com/wp-content/uploads/2017/12/149.jpg?ssl=1',
    },
  ];

  
  const column3 = [
    {
      title: 'The Future of SuperMan',
      author: 'Manish Pandey',
      price: '₹850',
      description: 'The more and more',
      image: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/02/Fohp793XEAEPEzR.jpeg',
    },
    {
      title: 'The teddy and bear',
      author: 'Mohit Rathe',
      price: '₹1150',
      description: 'The bear fighting',
      image: 'https://comicvine.gamespot.com/a/uploads/scale_large/5/54649/1061358-comics_for_kids_1.jpg',
    },
    {
      title: 'White punch',
      author: 'Kavita Mahatre',
      price: '₹1400',
      description: 'Laugh with me',
      image: 'http://static4.wikia.nocookie.net/__cb20090323023152/archiesonic/images/f/f9/STH169.jpg',
    },
    {
      title: 'The Muscle Men',
      author: 'Shree Patil',
      price: '₹600',
      description: 'The art of enjoying',
      image: 'http://img2.wikia.nocookie.net/__cb20120420051006/marveldatabase/images/d/da/Wolverine_Vol_2_305_Variant_McNiven.jpg',
    },
    {
      title: 'The Super Gang',
      author: 'Tanvi Patil',
      price: '₹1000',
      description: 'The name suggesht laughing',
      image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/0/03/645110f331e84/clean.jpg',
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
