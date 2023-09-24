import React, { useState, useEffect } from 'react';

import {
  BooksViewList,
  BookCard,
  BookBody,
  BookImage,
  BookName,
  BookDescription,
  Button,
  FilterContainer,
  SkeletonText,
  SkeletonCard,
  Input
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
import book23 from "../images/crook-manifesto-book.png";
import book24 from "../images/everyone-here-is-lying-book.png";
import book25 from "../images/gone-tonight-book.png";
import { fetchData } from './api'
const bookImage = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15, book15, book16, book17, book18, book19, book20, book21, book22]
const booksPerPage = 9;

const Books = () => {
  const [bookdata, setBookdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState([]); // Initialize as an empty array
  const [filterCriteria, setFilterCriteria] = useState({

  });



  useEffect(() => {
    fetchData()
      .then((data) => {
        setBookdata(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(true);
      });
  }, []);

  useEffect(() => {
    filterBooks();
  }, [filterCriteria]);

  // Calculate indexes for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  let currentBooks = []
  if (filteredBooks.length != 0) {
    currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  } else {
    currentBooks = bookData
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter books
  const filterBooks = () => {
    const { title, author, subject, releasedate } = filterCriteria;
    const filtered = bookdata.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(title.toLowerCase());
      const matchesAuthor = book.author.toLowerCase().includes(author.toLowerCase());
      const matchesSubject = book.subject.toLowerCase().includes(subject.toLowerCase());
      const matchesReleaseDate = book.releasedate.toLowerCase().includes(releasedate.toLowerCase());
      return matchesTitle && matchesAuthor && matchesSubject && matchesReleaseDate;
    });
    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  // Reset filters
  const resetFilters = () => {
    setFilterCriteria({
      title: '',
      author: '',
      subject: '',
      releasedate: '',
    });
    setCurrentPage(1);
  };



  return (
    <div>
      <div style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>
        <BookName>
          Filter by:
        </BookName>
      </div>

      <FilterContainer>

        <Input
          type="text"
          placeholder="Title"
          value={filterCriteria.title}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Author"
          value={filterCriteria.author}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, author: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Genre"
          value={filterCriteria.subject}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, subject: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Release Date"
          value={filterCriteria.releasedate}
          onChange={(e) =>
            setFilterCriteria((prevState) => ({ ...prevState, releasedate: e.target.value }))
          }
        />

        <Button style={{ marginBottom: "10px" }} onClick={resetFilters}>Reset Filters</Button>

      </FilterContainer>

      {/* Filter Counts */}
      <div style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>
        <BookName>
          Total Books in Library: {bookdata.length} | Total Filtered Books: {filteredBooks.length}
        </BookName>
      </div>

      <BooksViewList>
        {filteredBooks.length === 0 ? (
          <div style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '10px' }}>
            <BookName>No books match the filter criteria.</BookName>
          </div>
        ) : (
          currentBooks.map((book, idx) => (
            <BookCard key={book.id}>
              <BookImage src={bookImage[idx+1]} alt={book.title} />
              <BookBody>
                <BookName>{book.title}</BookName>
                <BookDescription>By {book.author}</BookDescription>
                <BookDescription>Genre: {book.subject}</BookDescription>
                <BookDescription>Release Date: {book.releasedate}</BookDescription>
              </BookBody>
            </BookCard>
          ))
        )}
      </BooksViewList>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '50px', marginTop: '20px' }}>
        {Array.from({ length: Math.ceil(bookdata.length / booksPerPage) }).map((_, index) => (
          <Button style={{ margin: '0 4px', marginBottom: "10px" }} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Books;
export const bookData = Books.bookData;

