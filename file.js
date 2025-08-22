// BookBox App - Ultimate Global Book Database

// Comprehensive Global Book Database
const globalBookDatabase = [
  // Classic Literature
  {
    isbn: "9780142001738",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    description: "A classic coming-of-age story about Holden Caulfield's experiences in New York City.",
    published: "1951",
    genre: "Literary Fiction",
    language: "English",
    pages: 277,
    publisher: "Little, Brown and Company",
    averageRating: 3.8,
    totalRatings: 2847,
    awards: ["National Book Award"]
  },
  {
    isbn: "9780679783268",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    description: "A classic romance about Elizabeth Bennet and Mr. Darcy.",
    published: "1813",
    genre: "Romance",
    language: "English",
    pages: 279,
    publisher: "Penguin Classics",
    averageRating: 4.3,
    totalRatings: 4532,
    editions: ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    isbn: "9780451524935",
    title: "1984",
    author: "George Orwell",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348990566i/5470.jpg",
    description: "A dystopian social science fiction novel about totalitarian rule.",
    published: "1949",
    genre: "Dystopian Fiction",
    language: "English",
    pages: 328,
    publisher: "Signet Classics",
    averageRating: 4.2,
    totalRatings: 3421
  },
  // Modern Bestsellers
  {
    isbn: "9780439023528",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447303603i/2767052.jpg",
    description: "In a dystopian future, Katniss Everdeen volunteers to take her sister's place in the Hunger Games.",
    published: "2008",
    genre: "Young Adult",
    language: "English",
    pages: 374,
    series: "The Hunger Games #1",
    publisher: "Scholastic",
    averageRating: 4.3,
    totalRatings: 4567,
    editions: ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    isbn: "9780545010221",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
    description: "A young wizard discovers his magical heritage on his 11th birthday.",
    published: "1997",
    genre: "Fantasy",
    language: "English",
    pages: 309,
    series: "Harry Potter #1",
    publisher: "Bloomsbury",
    averageRating: 4.6,
    totalRatings: 8765,
    editions: ["Hardcover", "Paperback", "eBook", "Audiobook"]
  },
  {
    isbn: "9781476753485",
    title: "Gone Girl",
    author: "Gillian Flynn",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339602131i/13288807.jpg",
    description: "A psychological thriller about a marriage gone terribly wrong.",
    published: "2012",
    genre: "Thriller",
    language: "English",
    pages: 419,
    publisher: "Crown Publishing",
    averageRating: 4.1,
    totalRatings: 3456
  },
  // International Literature
  {
    isbn: "9780062315007",
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1466865542i/18144590.jpg",
    description: "A young shepherd's journey to find treasure teaches him about following dreams.",
    published: "1988",
    genre: "Philosophy",
    language: "Portuguese (translated)",
    pages: 163,
    publisher: "HarperOne",
    averageRating: 3.9,
    totalRatings: 2156,
    originalLanguage: "Portuguese"
  },
  {
    isbn: "9780679722168",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
    description: "A multi-generational saga of the Buendía family in the mythical town of Macondo.",
    published: "1967",
    genre: "Magical Realism",
    language: "Spanish (translated)",
    pages: 417,
    publisher: "Harper & Row",
    averageRating: 4.1,
    totalRatings: 2987,
    awards: ["Nobel Prize in Literature"],
    originalLanguage: "Spanish"
  },
  {
    isbn: "9780679775434",
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389734015i/11275.jpg",
    description: "A surreal tale of a man searching for his missing cat and wife.",
    published: "1994",
    genre: "Literary Fiction",
    language: "Japanese (translated)",
    pages: 607,
    publisher: "Knopf",
    averageRating: 4.2,
    totalRatings: 1854,
    originalLanguage: "Japanese"
  },
  // Science Fiction
  {
    isbn: "9780525478812",
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
    description: "A lone astronaut must save humanity in this thrilling science fiction novel.",
    published: "2021",
    genre: "Science Fiction",
    language: "English",
    pages: 496,
    publisher: "Ballantine Books",
    averageRating: 4.5,
    totalRatings: 1923,
    awards: ["Hugo Award Nominee"]
  },
  {
    isbn: "9780441172719",
    title: "Dune",
    author: "Frank Herbert",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    description: "Epic science fiction set on the desert planet Arrakis.",
    published: "1965",
    genre: "Science Fiction",
    language: "English",
    pages: 688,
    series: "Dune Chronicles #1",
    publisher: "Ace Books",
    averageRating: 4.3,
    totalRatings: 5432,
    awards: ["Hugo Award", "Nebula Award"]
  },
  // Non-Fiction
  {
    isbn: "9780143127550",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954i/23692271.jpg",
    description: "An exploration of how Homo sapiens came to dominate the world.",
    published: "2011",
    genre: "History",
    language: "Hebrew (translated)",
    pages: 443,
    publisher: "Harper",
    averageRating: 4.4,
    totalRatings: 1987,
    originalLanguage: "Hebrew"
  },
  {
    isbn: "9781501144318",
    title: "Becoming",
    author: "Michelle Obama",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    description: "The memoir of the former First Lady of the United States.",
    published: "2018",
    genre: "Biography",
    language: "English",
    pages: 426,
    publisher: "Crown Publishing",
    averageRating: 4.5,
    totalRatings: 3421
  },
  // Children's Books
  {
    isbn: "9780394800165",
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1468890575i/233093.jpg",
    description: "A mischievous cat brings chaos and fun to two children on a rainy day.",
    published: "1957",
    genre: "Children's",
    language: "English",
    pages: 61,
    publisher: "Random House",
    averageRating: 4.2,
    totalRatings: 1234
  },
  {
    isbn: "9780142410318",
    title: "Matilda",
    author: "Roald Dahl",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388793265i/39988.jpg",
    description: "A brilliant girl with psychokinetic powers and her triumph over adversity.",
    published: "1988",
    genre: "Children's",
    language: "English",
    pages: 240,
    publisher: "Puffin Books",
    averageRating: 4.3,
    totalRatings: 2167
  },
  // Technical Books
  {
    isbn: "9781491950296",
    title: "Programming Python",
    author: "Mark Lutz",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347430533i/80435.jpg",
    description: "Comprehensive guide to Python programming language.",
    published: "2010",
    genre: "Technical",
    language: "English",
    pages: 1632,
    publisher: "O'Reilly Media",
    averageRating: 4.0,
    totalRatings: 567
  },
  // More diverse genres
  {
    isbn: "9780143039433",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg",
    description: "A story of friendship and redemption set in Afghanistan.",
    published: "2003",
    genre: "Historical Fiction",
    language: "English",
    pages: 371,
    publisher: "Riverhead Books",
    averageRating: 4.3,
    totalRatings: 2987
  },
  {
    isbn: "9780385490818",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
    description: "A symbologist uncovers a religious mystery that could shake Christianity.",
    published: "2003",
    genre: "Mystery",
    language: "English",
    pages: 454,
    publisher: "Doubleday",
    averageRating: 3.8,
    totalRatings: 2987
  },
  // Poetry
  {
    isbn: "9780679643456",
    title: "The Essential Rumi",
    author: "Rumi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1309203480i/259994.jpg",
    description: "The essential collection of poems by the 13th-century Persian poet.",
    published: "1995",
    genre: "Poetry",
    language: "Persian (translated)",
    pages: 352,
    publisher: "HarperSanFrancisco",
    averageRating: 4.4,
    totalRatings: 1876,
    originalLanguage: "Persian"
  },
  // Self-Help
  {
    isbn: "1982137274",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    description: "An easy & proven way to build good habits & break bad ones.",
    published: "2018",
    genre: "Self-Help",
    language: "English",
    pages: 320,
    publisher: "Avery",
    averageRating: 4.4,
    totalRatings: 3245
  }
];

// Search suggestions and categories
const searchSuggestions = [
  "Harry Potter series",
  "Stephen King novels",
  "Agatha Christie mysteries",
  "Isaac Asimov science fiction",
  "Maya Angelou autobiography",
  "Contemporary romance novels",
  "World War II history",
  "Python programming books",
  "Meditation and mindfulness",
  "Classic Russian literature",
  "Japanese literature",
  "Nobel Prize winners",
  "Pulitzer Prize fiction",
  "Children's picture books",
  "Cooking and recipes",
  "Travel guides"
];

const genres = [
  "Literary Fiction", "Science Fiction", "Fantasy", "Mystery", "Thriller", "Romance", 
  "Horror", "Historical Fiction", "Biography", "Autobiography", "History", "Science", 
  "Philosophy", "Religion", "Self-Help", "Business", "Health", "Travel", "Cooking", 
  "Art", "Poetry", "Drama", "Children's", "Young Adult", "Graphic Novels", "Comics",
  "Technical", "Academic", "Reference", "Politics", "Economics", "Psychology",
  "Magical Realism", "Dystopian Fiction"
];

const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Japanese", "Chinese", "Arabic", "Hindi", "Korean", "Hebrew", "Persian"];
const awards = ["Pulitzer Prize", "Booker Prize", "Hugo Award", "Nebula Award", "National Book Award", "Nobel Prize", "PEN/Faulkner Award"];

// Current user data
let currentUser = {
  id: 1,
  username: "bookworm_sarah",
  name: "Sarah Chen",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64",
  followers: 234,
  following: 189,
  booksRead: 127,
  favoriteGenres: ["Literary Fiction", "Science Fiction", "Mystery"],
  bio: "Literature professor & avid reader. Always looking for the next great book!",
  averageRating: 4.2,
  totalReviews: 89
};

let userLibrary = {
  read: ["9780525478812", "9781476753485", "9780143127550"],
  reading: ["9780142001738", "9780679775434"],
  want: ["9780441172719", "9780679722168", "9780679643456"]
};

// Sample activities and reviews
const sampleActivities = [
  {
    type: "review",
    userId: 1,
    bookIsbn: "9780525478812",
    content: "Absolutely mind-blowing! Andy Weir has outdone himself with this incredible science fiction masterpiece.",
    rating: 5,
    timestamp: "2024-08-20",
    likes: 23,
    comments: 5
  },
  {
    type: "added",
    userId: 1,
    bookIsbn: "9780679722168",
    status: "want-to-read",
    timestamp: "2024-08-19",
    likes: 8,
    comments: 2
  },
  {
    type: "review",
    userId: 1,
    bookIsbn: "9781476753485",
    content: "Flynn's psychological thriller is absolutely gripping. The twists kept me reading all night!",
    rating: 4,
    timestamp: "2024-08-18",
    likes: 15,
    comments: 3
  }
];

const notifications = [
  {
    type: "recommendation",
    content: "New book recommendation based on your reading history",
    timestamp: "2 hours ago"
  },
  {
    type: "like",
    from: "sci_fi_mike",
    content: "liked your review of Project Hail Mary",
    timestamp: "5 hours ago"
  },
  {
    type: "follow",
    from: "mystery_reader",
    content: "started following you",
    timestamp: "1 day ago"
  },
  {
    type: "award",
    content: "The Booker Prize winners for 2024 have been announced",
    timestamp: "2 days ago"
  }
];

// App state
let currentTab = 'home';
let isLoggedIn = false;
let searchResults = [];
let isSearching = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  console.log('BookBox app initializing...');
  initializeApp();
});

function initializeApp() {
  console.log('Setting up event listeners...');
  setupEventListeners();
  
  // Populate genre filters
  populateFilters();
  
  // Show login screen initially
  showLoginScreen();
}

function setupEventListeners() {
  // Login handlers
  const loginForm = document.getElementById('login-form');
  const demoLoginBtn = document.getElementById('demo-login');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Login form submitted');
      handleLogin();
    });
  }
  
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Demo login clicked');
      handleDemoLogin();
    });
  }
  
  // Navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const tab = this.getAttribute('data-tab');
      console.log('Navigation clicked:', tab);
      switchTab(tab);
    });
  });
  
  // Modal
  const modal = document.getElementById('book-modal');
  const closeModal = document.getElementById('close-modal');
  
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      console.log('Closing modal');
      modal.classList.add('hidden');
    });
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
  
  // Search functionality
  setupSearchHandlers();
}

function populateFilters() {
  // Populate genre filter
  const genreFilter = document.getElementById('genre-filter');
  if (genreFilter) {
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      genreFilter.appendChild(option);
    });
  }
  
  // Populate language filter
  const languageFilter = document.getElementById('language-filter');
  if (languageFilter) {
    languages.forEach(language => {
      const option = document.createElement('option');
      option.value = language;
      option.textContent = language;
      languageFilter.appendChild(option);
    });
  }
  
  // Populate award filter
  const awardFilter = document.getElementById('award-filter');
  if (awardFilter) {
    awards.forEach(award => {
      const option = document.createElement('option');
      option.value = award;
      option.textContent = award;
      awardFilter.appendChild(option);
    });
  }
}

function setupSearchHandlers() {
  const searchInputs = ['search-input', 'book-search-input', 'home-search-input'];
  
  searchInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener('input', debounce(function(e) {
        handleGlobalSearch(e);
      }, 300));
    }
  });
  
  // Setup filter chips
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', function() {
      // Remove active from all chips
      filterChips.forEach(c => c.classList.remove('active'));
      // Add active to clicked chip
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      console.log('Filter selected:', filter);
      applyBookFilter(filter);
    });
  });
  
  // Rating filter
  const ratingFilter = document.getElementById('rating-filter');
  const ratingValue = document.getElementById('rating-value');
  if (ratingFilter && ratingValue) {
    ratingFilter.addEventListener('input', function() {
      const value = parseFloat(this.value);
      ratingValue.textContent = value === 0 ? 'Any' : value.toFixed(1);
    });
  }
}

function setupLibraryTabs() {
  const libraryTabs = document.querySelectorAll('.library-tab');
  libraryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const status = this.getAttribute('data-status');
      console.log('Library tab clicked:', status);
      switchLibraryTab(status);
    });
  });
}

function handleLogin() {
  console.log('Processing login...');
  isLoggedIn = true;
  showMainApp();
}

function handleDemoLogin() {
  console.log('Processing demo login...');
  isLoggedIn = true;
  showMainApp();
}

function showLoginScreen() {
  const loginScreen = document.getElementById('login-screen');
  const mainApp = document.getElementById('main-app');
  
  if (loginScreen && mainApp) {
    loginScreen.classList.add('active');
    mainApp.classList.remove('active');
    console.log('Login screen displayed');
  }
}

function showMainApp() {
  console.log('Showing main application...');
  const loginScreen = document.getElementById('login-screen');
  const mainApp = document.getElementById('main-app');
  
  if (loginScreen && mainApp) {
    loginScreen.classList.remove('active');
    mainApp.classList.add('active');
    
    // Initialize app content after a brief delay
    setTimeout(() => {
      console.log('Populating app content...');
      populateHomeTab();
      populateDiscoverTab();
      populateAddBookTab();
      populateNotifications();
      populateProfile();
      
      // Setup library tabs after content is loaded
      setupLibraryTabs();
    }, 100);
  }
}

function switchTab(tabName) {
  console.log('Switching to tab:', tabName);
  currentTab = tabName;
  
  // Update navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const itemTab = item.getAttribute('data-tab');
    item.classList.toggle('active', itemTab === tabName);
  });
  
  // Update tab panels
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabPanels.forEach(panel => {
    const panelId = `${tabName}-tab`;
    panel.classList.toggle('active', panel.id === panelId);
  });
  
  // Update header title
  const titles = {
    home: 'Global Library',
    discover: 'Discover Books',
    add: 'Add Book',
    notifications: 'Updates',
    profile: 'Profile'
  };
  
  const currentTabTitle = document.getElementById('current-tab-title');
  if (currentTabTitle) {
    currentTabTitle.textContent = titles[tabName] || 'BookBox';
  }
}

function populateHomeTab() {
  console.log('Populating home tab...');
  const activityFeed = document.getElementById('activity-feed');
  const popularBooks = document.getElementById('popular-books');
  const internationalBooks = document.getElementById('international-books');
  
  if (activityFeed) {
    activityFeed.innerHTML = '';
    sampleActivities.forEach(activity => {
      const book = globalBookDatabase.find(b => b.isbn === activity.bookIsbn);
      if (book) {
        const activityElement = createActivityElement(activity, currentUser, book);
        activityFeed.appendChild(activityElement);
      }
    });
  }
  
  if (popularBooks) {
    popularBooks.innerHTML = '';
    // Show highest rated books
    const popularBooksData = globalBookDatabase
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 6);
    
    popularBooksData.forEach(book => {
      const bookElement = createBookItem(book);
      popularBooks.appendChild(bookElement);
    });
  }
  
  if (internationalBooks) {
    internationalBooks.innerHTML = '';
    // Show international books (books with original language not English)
    const internationalBooksData = globalBookDatabase
      .filter(book => book.originalLanguage && book.originalLanguage !== 'English')
      .slice(0, 5);
    
    internationalBooksData.forEach(book => {
      const bookElement = createInternationalBookItem(book);
      internationalBooks.appendChild(bookElement);
    });
  }
}

function populateDiscoverTab() {
  console.log('Populating discover tab...');
  const genreGrid = document.getElementById('genre-grid');
  const europeanBooks = document.getElementById('european-books');
  const asianBooks = document.getElementById('asian-books');
  const americanBooks = document.getElementById('american-books');
  
  if (genreGrid) {
    genreGrid.innerHTML = '';
    genres.forEach(genre => {
      const genreElement = document.createElement('div');
      genreElement.className = 'genre-item';
      genreElement.onclick = () => searchByGenre(genre);
      genreElement.innerHTML = `<p class="genre-name">${genre}</p>`;
      genreGrid.appendChild(genreElement);
    });
  }
  
  // Populate regional literature
  if (europeanBooks) {
    const europeanBooksData = globalBookDatabase.filter(book => 
      ['English', 'French', 'German', 'Italian', 'Spanish', 'Portuguese'].includes(book.language.split(' ')[0])
    ).slice(0, 3);
    
    europeanBooks.innerHTML = '';
    europeanBooksData.forEach(book => {
      const bookElement = createSmallBookItem(book);
      europeanBooks.appendChild(bookElement);
    });
  }
  
  if (asianBooks) {
    const asianBooksData = globalBookDatabase.filter(book => 
      ['Japanese', 'Chinese', 'Korean', 'Hindi'].includes(book.language.split(' ')[0])
    ).slice(0, 3);
    
    asianBooks.innerHTML = '';
    asianBooksData.forEach(book => {
      const bookElement = createSmallBookItem(book);
      asianBooks.appendChild(bookElement);
    });
  }
  
  if (americanBooks) {
    const americanBooksData = globalBookDatabase.filter(book => 
      book.language === 'English' && !book.originalLanguage
    ).slice(0, 3);
    
    americanBooks.innerHTML = '';
    americanBooksData.forEach(book => {
      const bookElement = createSmallBookItem(book);
      americanBooks.appendChild(bookElement);
    });
  }
}

function populateAddBookTab() {
  console.log('Populating add book tab...');
  const recentBooks = document.getElementById('recent-books');
  const recommendedBooks = document.getElementById('recommended-books');
  
  if (recentBooks) {
    recentBooks.innerHTML = '';
    // Show recently published books
    const recentBooksData = globalBookDatabase
      .sort((a, b) => parseInt(b.published) - parseInt(a.published))
      .slice(0, 8);
    
    recentBooksData.forEach(book => {
      const bookElement = createBookItem(book);
      recentBooks.appendChild(bookElement);
    });
  }
  
  if (recommendedBooks) {
    recommendedBooks.innerHTML = '';
    // Show books based on user's favorite genres
    const recommendedBooksData = globalBookDatabase
      .filter(book => currentUser.favoriteGenres.includes(book.genre))
      .slice(0, 6);
    
    recommendedBooksData.forEach(book => {
      const bookElement = createBookItem(book);
      recommendedBooks.appendChild(bookElement);
    });
  }
}

function populateNotifications() {
  console.log('Populating notifications...');
  const notificationsList = document.getElementById('notifications-list');
  
  if (notificationsList) {
    notificationsList.innerHTML = '';
    notifications.forEach(notification => {
      const notifElement = createNotificationElement(notification);
      notificationsList.appendChild(notifElement);
    });
  }
}

function populateProfile() {
  console.log('Populating profile...');
  populateLibrary('read');
}

function switchLibraryTab(status) {
  console.log('Switching library tab to:', status);
  
  const libraryTabs = document.querySelectorAll('.library-tab');
  libraryTabs.forEach(tab => {
    const tabStatus = tab.getAttribute('data-status');
    tab.classList.toggle('active', tabStatus === status);
  });
  
  populateLibrary(status);
}

function populateLibrary(status) {
  console.log('Populating library for status:', status);
  const libraryContent = document.getElementById('library-content');
  if (!libraryContent) return;
  
  const books = userLibrary[status] || [];
  libraryContent.innerHTML = '';
  
  if (books.length === 0) {
    libraryContent.innerHTML = `
      <div class="empty-state">
        <p class="empty-state-title">No books yet</p>
        <p class="empty-state-text">Start building your library!</p>
      </div>
    `;
    return;
  }
  
  books.forEach(isbn => {
    const book = globalBookDatabase.find(b => b.isbn === isbn);
    if (book) {
      const bookElement = createBookItem(book);
      libraryContent.appendChild(bookElement);
    }
  });
}

// Enhanced global search function
function handleGlobalSearch(e) {
  const query = e.target.value.trim();
  const searchResults = document.getElementById('search-results') || document.getElementById('add-search-results');
  
  if (!searchResults) return;
  
  if (query.length < 2) {
    searchResults.innerHTML = '';
    return;
  }
  
  console.log('Searching for:', query);
  
  // Show searching indicator
  searchResults.innerHTML = '<div class="loading">Searching global database...</div>';
  
  // Simulate API delay
  setTimeout(() => {
    performGlobalSearch(query, searchResults);
  }, 300);
}

function performGlobalSearch(query, resultsContainer) {
  const lowerQuery = query.toLowerCase();
  
  const results = globalBookDatabase.filter(book => {
    return book.title.toLowerCase().includes(lowerQuery) ||
           book.author.toLowerCase().includes(lowerQuery) ||
           book.genre.toLowerCase().includes(lowerQuery) ||
           book.isbn.includes(query) ||
           (book.series && book.series.toLowerCase().includes(lowerQuery)) ||
           (book.publisher && book.publisher.toLowerCase().includes(lowerQuery)) ||
           (book.awards && book.awards.some(award => award.toLowerCase().includes(lowerQuery)));
  });
  
  console.log('Search results found:', results.length);
  
  resultsContainer.innerHTML = '';
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty-state">
        <p class="empty-state-title">No books found</p>
        <p class="empty-state-text">Try searching with different keywords or browse by genre</p>
      </div>
    `;
    return;
  }
  
  // Show search results count
  const countElement = document.createElement('div');
  countElement.className = 'search-count';
  countElement.innerHTML = `<p style="color: var(--app-text-secondary); margin-bottom: 16px;">${results.length} books found</p>`;
  resultsContainer.appendChild(countElement);
  
  // Create results grid
  const resultsGrid = document.createElement('div');
  resultsGrid.className = 'book-grid';
  
  results.forEach(book => {
    const bookElement = createSearchResultItem(book, query);
    resultsGrid.appendChild(bookElement);
  });
  
  resultsContainer.appendChild(resultsGrid);
}

function createSearchResultItem(book, query) {
  const div = document.createElement('div');
  div.className = 'search-result-item';
  div.onclick = () => showBookModal(book.isbn);
  
  const highlightedTitle = highlightSearchTerm(book.title, query);
  const highlightedAuthor = highlightSearchTerm(book.author, query);
  
  div.innerHTML = `
    <div class="book-item">
      <img src="${book.cover}" alt="${book.title}">
      <p class="book-item-title">${highlightedTitle}</p>
      <p class="book-item-author">${highlightedAuthor}</p>
      <div class="book-item-meta">
        <span class="book-genre">${book.genre}</span>
        <span class="book-year">${book.published}</span>
      </div>
    </div>
  `;
  
  return div;
}

function highlightSearchTerm(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<strong style="color: var(--app-accent);">$1</strong>');
}

function applyBookFilter(filter) {
  console.log('Applying filter:', filter);
  
  let filteredBooks = [];
  
  switch(filter) {
    case 'fiction':
      filteredBooks = globalBookDatabase.filter(book => 
        ['Literary Fiction', 'Science Fiction', 'Fantasy', 'Romance', 'Thriller', 'Mystery', 'Historical Fiction'].includes(book.genre)
      );
      break;
    case 'non-fiction':
      filteredBooks = globalBookDatabase.filter(book => 
        ['Biography', 'History', 'Science', 'Philosophy', 'Self-Help', 'Technical'].includes(book.genre)
      );
      break;
    case 'recent':
      filteredBooks = globalBookDatabase.filter(book => parseInt(book.published) >= 2020);
      break;
    case 'awards':
      filteredBooks = globalBookDatabase.filter(book => book.awards && book.awards.length > 0);
      break;
    default:
      filteredBooks = globalBookDatabase;
  }
  
  // Display filtered results in home popular books section
  const popularBooks = document.getElementById('popular-books');
  if (popularBooks) {
    popularBooks.innerHTML = '';
    filteredBooks.slice(0, 6).forEach(book => {
      const bookElement = createBookItem(book);
      popularBooks.appendChild(bookElement);
    });
  }
}

function searchByGenre(genre) {
  console.log('Searching by genre:', genre);
  const results = globalBookDatabase.filter(book => book.genre === genre);
  
  // For demo purposes, show alert with count
  alert(`Found ${results.length} books in ${genre} genre! In a full app, this would show a filtered view.`);
}

function showBookModal(isbn) {
  console.log('Showing book modal for:', isbn);
  const book = globalBookDatabase.find(b => b.isbn === isbn);
  if (!book) {
    console.error('Book not found:', isbn);
    return;
  }
  
  const modal = document.getElementById('book-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalBody) {
    console.error('Modal elements not found');
    return;
  }
  
  const userStatus = getUserBookStatus(isbn);
  const similarBooks = findSimilarBooks(book);
  
  modalBody.innerHTML = `
    <div class="book-detail">
      <img src="${book.cover}" alt="${book.title}" class="book-detail-cover">
      <div class="book-detail-info">
        <h2 class="book-detail-title">${book.title}</h2>
        <p class="book-detail-author">by ${book.author}</p>
        ${book.series ? `<p class="book-series">${book.series}</p>` : ''}
        <div class="book-detail-meta">
          <div class="meta-item">
            <span class="meta-label">Published:</span>
            <span class="meta-value">${book.published}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Genre:</span>
            <span class="meta-value">${book.genre}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Language:</span>
            <span class="meta-value">${book.language}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Pages:</span>
            <span class="meta-value">${book.pages}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Publisher:</span>
            <span class="meta-value">${book.publisher}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Rating:</span>
            <span class="meta-value">${book.averageRating}/5 (${book.totalRatings} ratings)</span>
          </div>
          ${book.awards ? `
          <div class="meta-item">
            <span class="meta-label">Awards:</span>
            <span class="meta-value">${book.awards.join(', ')}</span>
          </div>
          ` : ''}
          ${book.editions ? `
          <div class="meta-item">
            <span class="meta-label">Available in:</span>
            <span class="meta-value">${book.editions.join(', ')}</span>
          </div>
          ` : ''}
        </div>
        <div class="book-actions">
          <button class="action-button ${userStatus === 'read' ? 'active' : ''}" onclick="addToLibrary('${isbn}', 'read')">Read</button>
          <button class="action-button ${userStatus === 'reading' ? 'active' : ''}" onclick="addToLibrary('${isbn}', 'reading')">Reading</button>
          <button class="action-button ${userStatus === 'want' ? 'active' : ''}" onclick="addToLibrary('${isbn}', 'want')">Want to Read</button>
        </div>
      </div>
    </div>
    <div class="book-description">
      <h3 class="description-title">Description</h3>
      <p class="description-text">${book.description}</p>
    </div>
    ${similarBooks.length > 0 ? `
    <div class="similar-books">
      <h3 class="description-title">Similar Books</h3>
      <div class="book-grid">
        ${similarBooks.map(simBook => `
          <div class="book-item" onclick="showBookModal('${simBook.isbn}')">
            <img src="${simBook.cover}" alt="${simBook.title}">
            <p class="book-item-title">${simBook.title}</p>
            <p class="book-item-author">${simBook.author}</p>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
  `;
  
  modal.classList.remove('hidden');
}

function findSimilarBooks(book) {
  return globalBookDatabase
    .filter(b => b.isbn !== book.isbn && (b.genre === book.genre || b.author === book.author))
    .slice(0, 4);
}

function getUserBookStatus(isbn) {
  for (const [status, books] of Object.entries(userLibrary)) {
    if (books.includes(isbn)) return status;
  }
  return null;
}

function addToLibrary(isbn, status) {
  console.log('Adding book to library:', isbn, status);
  
  // Remove from all other statuses
  Object.keys(userLibrary).forEach(key => {
    userLibrary[key] = userLibrary[key].filter(id => id !== isbn);
  });
  
  // Add to new status
  if (!userLibrary[status].includes(isbn)) {
    userLibrary[status].push(isbn);
  }
  
  console.log('Updated library:', userLibrary);
  
  // Update UI
  showBookModal(isbn);
  if (currentTab === 'profile') {
    populateProfile();
  }
}

// ISBN and barcode functions
function searchByISBN() {
  const isbnInput = document.getElementById('isbn-input');
  if (!isbnInput) return;
  
  const isbn = isbnInput.value.trim();
  if (!isbn) {
    alert('Please enter an ISBN');
    return;
  }
  
  console.log('Searching by ISBN:', isbn);
  
  const book = globalBookDatabase.find(b => b.isbn.includes(isbn));
  if (book) {
    showBookModal(book.isbn);
  } else {
    alert('Book not found. In a real app, this would search external databases.');
  }
}

function simulateBarcodeScan() {
  console.log('Simulating barcode scan...');
  
  // Simulate scanning a random book
  const randomBook = globalBookDatabase[Math.floor(Math.random() * globalBookDatabase.length)];
  
  alert(`Barcode scanned! Found: ${randomBook.title} by ${randomBook.author}`);
  showBookModal(randomBook.isbn);
}

// Helper functions
function createActivityElement(activity, user, book) {
  const div = document.createElement('div');
  div.className = 'activity-item';
  
  const activityText = activity.type === 'review' ? 'reviewed' : `added to ${activity.status?.replace('-', ' ')}`;
  const stars = activity.rating ? generateStars(activity.rating) : '';
  
  div.innerHTML = `
    <div class="activity-header">
      <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
      <div class="activity-user">
        <p class="username">${user.name}</p>
        <p class="activity-time">${formatTime(activity.timestamp)}</p>
      </div>
    </div>
    <div class="activity-content">
      <img src="${book.cover}" alt="${book.title}" class="book-cover" onclick="showBookModal('${book.isbn}')">
      <div class="activity-details">
        <p class="book-title">${book.title}</p>
        <p class="book-author">by ${book.author}</p>
        ${stars ? `<div class="rating">${stars}</div>` : ''}
        ${activity.content ? `<p class="review-text">${activity.content}</p>` : ''}
        <div class="activity-actions">
          <button class="action-btn" onclick="toggleLike(this)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${activity.likes || 0}
          </button>
          <button class="action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
            </svg>
            ${activity.comments || 0}
          </button>
        </div>
      </div>
    </div>
  `;
  
  return div;
}

function createBookItem(book) {
  const div = document.createElement('div');
  div.className = 'book-item';
  div.onclick = () => showBookModal(book.isbn);
  
  div.innerHTML = `
    <img src="${book.cover}" alt="${book.title}">
    <p class="book-item-title">${book.title}</p>
    <p class="book-item-author">${book.author}</p>
    ${book.series ? `<p class="book-series-small">${book.series}</p>` : ''}
  `;
  
  return div;
}

function createSmallBookItem(book) {
  const div = document.createElement('div');
  div.className = 'book-item';
  div.onclick = () => showBookModal(book.isbn);
  div.style.width = '80px';
  
  div.innerHTML = `
    <img src="${book.cover}" alt="${book.title}" style="height: 120px;">
    <p class="book-item-title" style="font-size: 11px;">${book.title}</p>
    <p class="book-item-author" style="font-size: 10px;">${book.author}</p>
  `;
  
  return div;
}

function createInternationalBookItem(book) {
  const div = document.createElement('div');
  div.className = 'language-book-item';
  div.onclick = () => showBookModal(book.isbn);
  
  const flagEmoji = getLanguageFlag(book.originalLanguage);
  
  div.innerHTML = `
    <div class="language-flag">${flagEmoji}</div>
    <img src="${book.cover}" alt="${book.title}" style="width: 60px; height: 90px; border-radius: 4px; margin-bottom: 8px;">
    <p style="font-size: 12px; font-weight: 500; margin: 0 0 4px 0; line-height: 1.2;">${book.title}</p>
    <p style="font-size: 10px; color: var(--app-text-secondary); margin: 0;">${book.author}</p>
    <p style="font-size: 10px; color: var(--app-accent); margin: 4px 0 0 0;">${book.originalLanguage}</p>
  `;
  
  return div;
}

function getLanguageFlag(language) {
  const flags = {
    'Portuguese': '🇵🇹',
    'Spanish': '🇪🇸',
    'Japanese': '🇯🇵',
    'French': '🇫🇷',
    'German': '🇩🇪',
    'Hebrew': '🇮🇱',
    'Persian': '🇮🇷',
    'Italian': '🇮🇹',
    'Russian': '🇷🇺',
    'Chinese': '🇨🇳',
    'Korean': '🇰🇷',
    'Arabic': '🇸🇦',
    'Hindi': '🇮🇳'
  };
  return flags[language] || '🌍';
}

function createNotificationElement(notification) {
  const div = document.createElement('div');
  div.className = 'notification-item';
  
  const iconMap = {
    like: '❤️',
    follow: '👤',
    comment: '💬',
    recommendation: '📚',
    award: '🏆'
  };
  
  div.innerHTML = `
    <div class="notification-icon">${iconMap[notification.type] || '📖'}</div>
    <div class="notification-content">
      <p class="notification-text">${notification.from ? `<strong>${notification.from}</strong> ` : ''}${notification.content}</p>
      <p class="notification-time">${notification.timestamp}</p>
    </div>
  `;
  
  return div;
}

function generateStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const star = i <= rating ? 
      '<span class="star">★</span>' : 
      '<span class="star empty">☆</span>';
    stars.push(star);
  }
  return `<div class="stars">${stars.join('')}</div>`;
}

function formatTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  
  return date.toLocaleDateString();
}

function toggleLike(button) {
  const countElement = button.querySelector('svg').nextSibling;
  let currentCount = parseInt(countElement.textContent.trim()) || 0;
  
  const isLiked = button.classList.contains('liked');
  
  if (isLiked) {
    button.classList.remove('liked');
    button.style.color = '';
    countElement.textContent = ` ${Math.max(0, currentCount - 1)}`;
  } else {
    button.classList.add('liked');
    button.style.color = 'var(--app-accent)';
    countElement.textContent = ` ${currentCount + 1}`;
  }
}

// Utility function for debouncing search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('book-modal');
    if (modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }
});

// Make functions globally available
window.showBookModal = showBookModal;
window.addToLibrary = addToLibrary;
window.toggleLike = toggleLike;
window.searchByISBN = searchByISBN;
window.simulateBarcodeScan = simulateBarcodeScan;
