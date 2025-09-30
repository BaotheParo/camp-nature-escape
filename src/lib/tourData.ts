export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  description: string;
  highlights: string[];
  image: string;
  maxGuests: number;
  difficulty: 'easy' | 'moderate' | 'challenging';
}

const TOURS_STORAGE_KEY = 'camp_tours_data';

// Default tours data
const defaultTours: Tour[] = [
  {
    id: '1',
    title: 'Đà Lạt Camping Experience',
    location: 'Đà Lạt, Lâm Đồng',
    duration: '2N1Đ',
    price: 2500000,
    description: 'Trải nghiệm cắm trại tại thành phố ngàn hoa với không khí trong lành, thiên nhiên hùng vĩ và hoàng hôn tuyệt đẹp.',
    highlights: [
      'Cắm trại dưới bầu trời đầy sao',
      'Trekking qua thác Datanla',
      'BBQ đêm bên lửa trại',
      'Ngắm bình minh trên đồi',
    ],
    image: '/camping-dalat.jpg',
    maxGuests: 15,
    difficulty: 'moderate',
  },
  {
    id: '2',
    title: 'Pù Luông Nature Camp',
    location: 'Pù Luông, Thanh Hóa',
    duration: '2N1Đ',
    price: 2800000,
    description: 'Khám phá vẻ đẹp hoang sơ của Pù Luông với ruộng bậc thang, suối nước trong vắt và văn hóa dân tộc độc đáo.',
    highlights: [
      'Trekking qua bản làng dân tộc',
      'Tắm suối thiên nhiên',
      'Trải nghiệm ẩm thực địa phương',
      'Chiêm ngưỡng ruộng bậc thang',
    ],
    image: '/camping-puluong.jpg',
    maxGuests: 12,
    difficulty: 'moderate',
  },
  {
    id: '3',
    title: 'Sapa Mountain Retreat',
    location: 'Sapa, Lào Cai',
    duration: '2N1Đ',
    price: 3200000,
    description: 'Cắm trại trên núi cao với view nhìn thung lũng tuyệt đẹp, khám phá văn hóa dân tộc H\'Mông và Dao.',
    highlights: [
      'Cắm trại trên núi cao 2000m',
      'Gặp gỡ người dân tộc địa phương',
      'Thưởng thức đặc sản vùng cao',
      'Săn mây và chụp ảnh thiên nhiên',
    ],
    image: '/camping-sapa.jpg',
    maxGuests: 10,
    difficulty: 'challenging',
  },
  {
    id: '4',
    title: 'Mộc Châu Green Camp',
    location: 'Mộc Châu, Sơn La',
    duration: '2N1Đ',
    price: 2300000,
    description: 'Nghỉ dưỡng giữa đồi chè xanh mướt, không khí trong lành và những trang trại bò sữa đặc trưng.',
    highlights: [
      'Cắm trại giữa đồi chè',
      'Tham quan trang trại bò sữa',
      'Thưởng thức sữa tươi nguyên chất',
      'Chụp ảnh check-in đồi chè',
    ],
    image: '/camping-mocchau.jpg',
    maxGuests: 20,
    difficulty: 'easy',
  },
];

// Initialize tours in localStorage if not exists
export const initializeTours = (): void => {
  const stored = localStorage.getItem(TOURS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(TOURS_STORAGE_KEY, JSON.stringify(defaultTours));
  }
};

// Get all tours from localStorage
export const getTours = (): Tour[] => {
  initializeTours();
  const stored = localStorage.getItem(TOURS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : defaultTours;
};

// Get a single tour by ID
export const getTourById = (id: string): Tour | undefined => {
  const tours = getTours();
  return tours.find(tour => tour.id === id);
};

// Update tours in localStorage
export const updateTours = (tours: Tour[]): void => {
  localStorage.setItem(TOURS_STORAGE_KEY, JSON.stringify(tours));
};

// Add a new tour
export const addTour = (tour: Tour): void => {
  const tours = getTours();
  tours.push(tour);
  updateTours(tours);
};

// Update a specific tour
export const updateTour = (id: string, updatedTour: Partial<Tour>): void => {
  const tours = getTours();
  const index = tours.findIndex(tour => tour.id === id);
  if (index !== -1) {
    tours[index] = { ...tours[index], ...updatedTour };
    updateTours(tours);
  }
};

// Delete a tour
export const deleteTour = (id: string): void => {
  const tours = getTours();
  const filtered = tours.filter(tour => tour.id !== id);
  updateTours(filtered);
};

// Format price in VND
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

// Get difficulty label in Vietnamese
export const getDifficultyLabel = (difficulty: Tour['difficulty']): string => {
  const labels = {
    easy: 'Dễ',
    moderate: 'Trung bình',
    challenging: 'Khó',
  };
  return labels[difficulty];
};
