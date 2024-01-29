import { Injectable } from '@angular/core';
import { Books } from './book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  protected booksList: Books[] = [
    {
      id: 1,
      author: 'Chinua Achebe',
      country: 'Nigeria',
      imageLink:
        'https://imusic.b-cdn.net/images/item/original/887/9780141186887.jpg?chinua-achebe-2001-things-fall-apart-penguin-modern-classics-paperback-bog&class=scaled&v=1397830549',
      language: 'English',
      link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
      pages: 209,
      title: 'Things Fall Apart',
      year: 1958,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 2,
      author: 'Hans Christian Andersen',
      country: 'Denmark',
      imageLink: 'https://imgcdn.saxo.com/_9781841353586/0x500',
      language: 'Danish',
      link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
      pages: 784,
      title: 'Fairy tales',
      year: 1836,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 3,
      author: 'Dante Alighieri',
      country: 'Italy',
      imageLink: 'https://imgcdn.saxo.com/_9780140448955/0x500',
      language: 'Italian',
      link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
      pages: 928,
      title: 'The Divine Comedy',
      year: 1315,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 4,
      author: 'Unknown',
      country: 'Sumer and Akkadian Empire',
      imageLink: 'https://imgcdn.saxo.com/_9781644399439/0x500',
      language: 'Akkadian',
      link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
      pages: 160,
      title: 'The Epic Of Gilgamesh',
      year: -1700,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 5,
      author: 'Unknown',
      country: 'Achaemenid Empire',
      imageLink: 'https://imgcdn.saxo.com/_9781683363439/0x500',
      language: 'Hebrew',
      link: 'https://en.wikipedia.org/wiki/Book_of_Job\n',
      pages: 176,
      title: 'The Book Of Job',
      year: -600,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 6,
      author: 'Unknown',
      country: 'India/Iran/Iraq/Egypt/Tajikistan',
      imageLink: 'https://imgcdn.saxo.com/_9781408827765/0x500',
      language: 'Arabic',
      link: 'https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n',
      pages: 288,
      title: 'One Thousand and One Nights',
      year: 1200,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 7,
      author: 'Unknown',
      country: 'Iceland',
      imageLink:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81tX0448s-L._AC_UF1000,1000_QL80_.jpg',
      language: 'Old Norse',
      link: 'https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n',
      pages: 384,
      title: "Nj\u00e1l's Saga",
      year: 1350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 8,
      author: 'Jane Austen',
      country: 'United Kingdom',
      imageLink: 'https://imgcdn.saxo.com/_9781805479826/0x500',
      language: 'English',
      link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice\n',
      pages: 226,
      title: 'Pride and Prejudice',
      year: 1813,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 9,
      author: 'Honor\u00e9 de Balzac',
      country: 'France',
      imageLink: 'https://imgcdn.saxo.com/_9788740674880/0x500',
      language: 'French',
      link: 'https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n',
      pages: 443,
      title: 'Le P\u00e8re Goriot',
      year: 1835,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
    {
      id: 10,
      author: 'Samuel Beckett',
      country: 'Republic of Ireland',
      imageLink: 'https://imgcdn.saxo.com/_9780802144478/0x500',
      language: 'French, English',
      link: 'https://en.wikipedia.org/wiki/Molloy_(novel)\n',
      pages: 256,
      title: 'Three Novels',
      year: 1952,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    },
  ];

  getAllBooks(): Books[] {
    return this.booksList;
  }

  getThreeBooks(): Books[] {
    return this.booksList.slice(
      this.booksList.length - 3,
      this.booksList.length
    );
  }

  getBookById(id: number): Books | undefined {
    return this.booksList.find((books) => books.id === id);
  }
}
