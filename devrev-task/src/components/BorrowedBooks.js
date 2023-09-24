import React, { useState, useEffect } from 'react';

import {
  BooksViewList,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Title,
  SkeletonText,
  SkeletonCard,
  Button,
} from './Styles';
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

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const bookImage = [book1,book2,book3,book4,book5,book6,book7,book8,book9,book10,book11,book12,book13,book14,book15,book15,book16,book17,book18,book19,book20,book21,book22]
  const [isLoading, setIsLoading] = useState(true);
  
  console.log('Books Borrowed - ',borrowedBooks);

  useEffect(() => {
    // Retrieve borrowed books from local storage
    const storedBorrowedBooks = localStorage.getItem('borrowedBooks');
    if (storedBorrowedBooks) {
      setIsLoading(false)

      setBorrowedBooks(JSON.parse(storedBorrowedBooks));
    }
    else{
      setIsLoading(true)
    }
  }, []);


  const handleRemoveBook = (bookId) => {
    setBorrowedBooks((prevBorrowedBooks) => {
      const updatedBorrowedBooks = prevBorrowedBooks.filter((book) => book.id !== bookId);
      localStorage.setItem('borrowedBooks', JSON.stringify(updatedBorrowedBooks));
      return updatedBorrowedBooks;
    });
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
    );
  }

    return (
      <div>
        <Title style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>Borrowed Books</Title>
        <BooksViewList>
          {borrowedBooks.map((book,idx) => (
            <BookCard key={book.id}>
            <BookImage src={bookImage[parseInt(book.id)]} alt={book.title} />
            <BookBody>
              <BookName>{book.title}</BookName>
              <BookDescription>By {book.author}</BookDescription>
              <BookDescription>Genre: {book.subject}</BookDescription>
              <BookDescription>Release Date: {book.releasedate}</BookDescription>
              <Button onClick={() => handleRemoveBook(book.id)}>Remove Book</Button>
            </BookBody>
            </BookCard>
          ))}
        </BooksViewList>
        </div>
    );
  };

export default BorrowedBooks;