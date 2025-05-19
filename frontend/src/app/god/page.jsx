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
      title: 'Ganapati Bappa',
      author: 'Muni vyas',
      price: '₹500',
      description: 'The gajana story',
      image: 'https://www.learnreligions.com/thmb/5dii7K--FwIfgAx0LkD3waA1-z4=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Ganesh-58a5bb9b3df78c345bf18842.jpg',
    },
    {
    title: 'Greek Gods',
      author: 'Romario sherpad',
      price: '₹400',
      description: 'The history of greek gods',
      image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781507215494/greek-mythology-the-gods-goddesses-and-heroes-handbook-9781507215494_hr.jpg',
    },
    {
      title: 'Return of the God',
      author: 'Sankalp Pawar',
      price: '₹500',
      description: 'End of the kaliyug',
      image: 'https://www.raptureready.com/wp-content/uploads/2022/08/image00125-768x1121.jpg',
    },
    {
      title: 'Game of God',
      author: 'Vignesh Malore',
      price: '₹1000',
      description: 'Gods plan baby',
      image: 'https://media1.jpc.de/image/w2400/front/0/9783736319622.jpg',
    },
    {
      title: 'The glory of god',
      author: 'Kartavya Patil',
      price: '₹1500',
      description: 'Bagwan hote hai'
      ,image: 'https://cdn.kobo.com/book-images/a5410041-ee0a-4d64-ad2d-2fc20e0a872a/1200/1200/False/the-glory-of-god-spirit-led-bible-study.jpg',
    },
  ];

  
  const column2 = [
    {
      title: 'Shri karishna hare krishna',
      author: 'Veda vyas',
      price: '₹1200',
      description: 'Satiyug',
      image: 'https://static.vecteezy.com/system/resources/previews/022/188/695/large_2x/hindu-god-krishna-and-radha-painting-with-flute-generative-ai-photo.jpg',
    },
    {
      title: 'Away of the God',
      author: 'Shree Patil',
      price: '₹750',
      description: 'God is always watching you',
      image: 'https://johnbevere.com/wp-content/uploads/2023/01/awe-of-god-book-sm-shadow-2.png',
    },
    {
      title: 'God of the war',
      author: 'Kane wiallamson',
      price: '₹900',
      description: 'God also has anger',
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690281770i/61100810.jpg',
    },
    {
      title: 'Godness',
      author: 'Kartavya Patil',
      price: '₹950',
      description: 'Always belive in God',
      image: 'https://2f96be1b505f7f7a63c3-837c961929b51c21ec10b9658b068d6c.ssl.cf2.rackcdn.com/products/046842.jpg',
    },
    {
      title: 'The book of mystory',
      author: 'Rohan Manda',
      price: '₹2000',
      description: 'The book no one can read Buttt!!',
      image: 'https://i.ytimg.com/vi/558ru_-MmqA/hqdefault.jpg',
    },
  ];

  
  const column3 = [
    {
      title: 'Jay bajran bali',
      author: 'Om Parab',
      price: '₹850',
      description: 'The power of hanumana',
      image: 'https://cloudfront.penguin.co.in/wp-content/uploads/2023/02/9780143453277.jpg',
    },
    {
      title: 'Har har mahadev',
      author: 'Sankalp Pawar',
      price: '₹1150',
      description: 'Shivtandav',
      image: 'https://cdn.penguin.co.in/wp-content/uploads/2024/09/9780143453284.jpg',
    },
    {
      title: 'Krisha vande jagat gurum',
      author: 'Shree Patil',
      price: '₹1400',
      description: 'Shre krisha bole hare gopal bolo',
      image: 'https://m.media-amazon.com/images/I/61p9hQUNMlL.jpg',
    },
    {
      title: 'Ganesh Puran',
      author: 'Muni vyas',
      price: '₹600',
      description: 'Gannapti bappa morya',
      image: 'http://bestbookworm.com/cdn/shop/files/WhatsAppImage2023-07-07at9.01.21PM_fa198919-3857-4a51-9969-27259756802b.jpg?v=1690988067',
    },
    {
      title: 'Lord Vishnu',
      author: 'Ram Naath',
      price: '₹1000',
      description: 'The Protector of earth',
      image: 'https://static.vecteezy.com/system/resources/previews/022/188/983/large_2x/hindu-god-vishnu-in-universe-generative-ai-photo.jpg',
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
        <h2 className="text-[30px] font-bold mb-6 text-center text-black-600">God's Books Collection</h2>
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
