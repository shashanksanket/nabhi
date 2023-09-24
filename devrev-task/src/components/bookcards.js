import React, { useRef, useEffect, useState } from 'react';
import { bookData,fetchBookData } from './Books';

import {
  PreviousButton,
  NextButton,
  BorrowListButton,
  BooksList,
  Card,
  CardBody,
  CardContainer,
  CardImage,
  CardName,
  CardDescription,
  Title,
  BookImage,
  Loader,
  SkeletonText,
  SkeletonCard

} from './Styles';

import LazyLoad from 'react-lazyload';

import leftArrowImage from "../images/left-arrow.png";
import rightArrowImage from "../images/right-arrow.png";
import book1 from "../images/age-of-vice-book.png";
import book2 from "../images/city-under-one-roof-book.png";
import book3 from "../images/the-world-and-all-that-it-holds-book.png";
import book4 from "../images/maame-book.png";
import book5 from "../images/essex-dogs-book.png";
import book6 from "../images/what-happened-to-ruthy-ramirez-book.png";
import book7 from "../images/a-death-at-the-party-book.png";
import book8 from "../images/the-god-of-endings-book.png";
import book9 from "../images/now-you-see-us-book.png";
import book10 from "../images/dust-child-book.png";
import book11 from "../images/the-mostly-true-story-of-tanner-and-louise-book.png";
import book12 from "../images/homecoming-book.png";
import book13 from "../images/symphony-of-secrets-book.png";
import book14 from "../images/silver-alert-book.png";
import book15 from "../images/only-love-can-hurt-like-this-book.png";
import book16 from "../images/paper-names-book.png";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book18 from "../images/yellowface-book.png";
import book19 from "../images/the-second-ending-book.png";
import book20 from "../images/the-wishing-game-book.png";
import book21 from "../images/same-time-next-summer-book.png";
import book22 from "../images/banyan-moon-book.png";
import { fetchData } from './api'; 

const BookCards = () => {
  const bookImage = [book1,book2,book3,book4,book5,book6,book7,book8,book9,book10,book11,book12,book13,book14,book15,book15,book16,book17,book18,book19,book20,book21,book22]
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetchData()
      .then((data) => {
        setBookData(data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(true); // Set isLoading to false on error as well
      });
  }, []);

  const handleBorrowClick = (book) => {
    const selectedBook = bookData.find((item) => item.image === book);
    if (selectedBook) {
      setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, selectedBook]);
      console.log(borrowedBooks);
      alert(`Borrowed Book Details:\nTitle: ${selectedBook.title}\nAuthor: ${selectedBook.author}\nSubject: ${selectedBook.subject}\nRelease Date: ${selectedBook.releasedate}`);
    }
  };

  useEffect(() => {
    const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
    if (storedBorrowedBooks) {
      const parsedBorrowedBooks = JSON.parse(storedBorrowedBooks);
      setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, ...parsedBorrowedBooks]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
  }, [borrowedBooks]);

  useEffect(() => {
    const handleResize = () => {
      cardContainerRef1.scrollLeft = 0; // Reset scroll position on resize
      cardContainerRef2.scrollLeft = 0; // Reset scroll position on resize
      cardContainerRef3.scrollLeft = 0; // Reset scroll position on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cardContainerRef1 = useRef(null);
  const cardContainerRef2 = useRef(null);
  const cardContainerRef3 = useRef(null);

  const handleNextClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft += containerWidth + 20;
  };
  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, [bookData]);

  const handlePreviousClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft -= containerWidth + 20;
  };
  if (isLoading) {
    return ( 
    <>
    <div style={{display:'flex', margin:'auto'}}>
      <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    </div>
    <div style={{display:'flex', margin:'auto'}}>
      <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    </div>
    <div style={{display:'flex', margin:'auto'}}>
      <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </SkeletonCard>
    </div>
    </>
    
    
    ) 
  }
  return (
    <div>
      <Title style={{ marginLeft: '80px', marginTop: '40px' }}>Top Trending Books of 2023</Title>
      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef1}>

          {bookData.slice(0, 9).map((book, idx) => (
            <Card key={book.id}>
              <CardImage src={bookImage[idx+1]} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.author}</CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book.image)}>
                  Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
          ))}

        </CardContainer>
      </BooksList>

      <Title style={{ marginLeft: '80px', marginTop: '40px' }}>Best Selling Books of 2023</Title>

      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef2)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef2)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef2}>
        {bookData.slice(6,16 ).map((book, idx) => (
            <Card key={book.id}>
              <CardImage src={bookImage[idx+6+1]} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.author}</CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book.image)}>
                  Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
          ))}

        </CardContainer>
      </BooksList>

      <Title style={{ marginLeft: '80px', marginTop: '40px' }}>All Time Favourites</Title>
      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef3)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef3)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef3}>
        {bookData.slice(12, 22).map((book, idx) => (
            <Card key={book.id}>
              <CardImage src={bookImage[idx+12+1]} alt={book.title} />
              <CardBody>
                <CardName>{book.title}</CardName>
                <CardDescription>{book.author}</CardDescription>
                <BorrowListButton onClick={() => handleBorrowClick(book.image)}>
                  Borrow Book
                </BorrowListButton>
              </CardBody>
            </Card>
          ))}

        </CardContainer>
      </BooksList>

    </div>
  );
};

export default BookCards;