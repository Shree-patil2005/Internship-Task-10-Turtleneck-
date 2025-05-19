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
      title: 'Try To Be Physco',
      author: 'Warner Mane',
      price: '₹500',
      description: 'Some times its goood',
      image: 'https://pic2.zhimg.com/v2-61f24ad3e5cb044c6e715e972b49e499_r.jpg',
    },
    {
      title: 'Happiness Is The Key',
      author: 'Shree Patil',
      price: '₹400',
      description: 'Try to be happy',
      image: 'https://thumbs.dreamstime.com/b/mental-health-psychological-symbol-concept-words-make-your-mental-health-priority-wooden-blocks-beautiful-orange-289833038.jpg',
    },
    {
      title: 'The Machine',
      author: 'Sankalp Pawar',
      price: '₹500',
      description: 'You are human not machine.',
      image: 'https://assets.gqindia.com/photos/649bf1b64b83f508cfd517f5/16:9/w_2560%2Cc_limit/Psychological-hacks-to-try-to-leg-up-in-life.jpg',
    },
    {
      title: 'Mind Games',
      author: 'Vignesh Malore',
      price: '₹$1000',
      description: 'Mind is unique',
      image: 'https://png.pngtree.com/background/20230614/original/pngtree-cognitive-psychology-picture-image_3467259.jpg',
    },
    {
      title: 'Try to Be Salt',
      author: 'Kartavya Patil',
      price: '₹1500',
      description: 'Salt is beautiful as weel as danger.',
      image: 'https://static.vecteezy.com/system/resources/previews/014/028/718/large_2x/majestic-closeup-view-of-calm-sea-water-waves-with-orange-sunrise-sunset-sunlight-tropical-island-beach-landscape-exotic-shore-coast-summer-vacation-holiday-amazing-nature-scenic-relax-paradise-photo.jpg',
    },
  ];

  
  const column2 = [
    {
      title: 'Winner',
      author: 'Om Parab ',
      price: '₹1200',
      description: 'Does win matters??',
      image: 'https://jimthealchymist.com/images/JimCusumano/site/contents/blog-2.jpeg',
    },
    {
      title: 'Book Has Face',
      author: 'Andreson willian',
      price: '₹750',
      description: 'One book and its enough!!',
      image: 'https://img.jagranjosh.com/images/2022/September/2392022/Book-Or-Man-Optical-Illusion-Personality-Test.jpg',
    },
    {
      title: 'Books Love',
      author: 'Tomas Andre',
      price: '₹900',
      description: 'Books over every knowledge!!',
      image: 'https://www.all-about-psychology.com/images/best-psychology-books-for-beginners.png',
    },
    {
      title: 'The Human Brain',
      author: 'Smith Steve',
      price: '₹950',
      description: 'The Logic buildilng',
      image: 'https://www.onlinepsychologydegree.info/wp-content/uploads/2020/01/41mPlP7N50L._SX331_BO1204203200_.jpg',
    },
    {
      title: 'The Game Of Confidence',
      author: 'Shree Patil',
      price: '₹2000',
      description: 'Confidence is the first win',
      image: 'https://assets.gqindia.com/photos/64a3af1d4b83f508cfd51884/master/w_1600%2Cc_limit/The-Confidence-Game.jpg',
    },
  ];

  
  const column3 = [
    {
      title: 'The Start',
      author: 'William Reed',
      price: '₹850',
      description: 'Sun rise again.',
      image: 'https://wallup.net/wp-content/uploads/2014/10/nature/Sunset_at_Lake_Mountain_Beautiful.jpg',
    },
    {
      title: 'Be Happy',
      author: 'Myson Hunter',
      price: '₹1150',
      description: 'Smile and smile more.',
      image: 'https://thelistwire.usatoday.com/gcdn/authoring/authoring-images/2023/11/15/PPHX/71598475007-spr-apache-alpine-coaster-sample-image-from-wiegand-4.jpg?crop=1919,1081,x0,y99&width=1919&height=1081&format=pjpg&auto=webp',
    },
    {
      title: 'The Sunrise will happend',
      author: 'John Doyle',
      price: '₹1400',
      description: 'World runs on hope',
      image: 'https://image.shutterstock.com/image-photo/open-book-on-sunset-background-260nw-1736665781.jpg',
    },
    {
      title: 'The Fox Eye',
      author: 'Brown Shelpward',
      price: '₹600',
      description: 'The eyes of fox.',
      image: 'https://www.color-meanings.com/wp-content/uploads/fox-sitting-in-green-grass-1024x683.jpeg',
    },
    {
      title: 'Surya Kiran',
      author: 'Ram Thakur',
      price: '₹1000',
      description: 'The light of sun',
      image: 'https://wallpaperaccess.com/full/4308189.jpg',
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
        <h2 className="text-[30px] font-bold mb-6 text-center text-black-600">Physicological Books Collection</h2>
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
                    <h3 className="text-[25px] font-semibold mb-1 text-black-500">{book.title}</h3>
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
