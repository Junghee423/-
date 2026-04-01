// Mock 상품 데이터
const products = [
  { id: 1, name: '아이폰 15 Pro', category: '스마트폰' },
  { id: 2, name: '아이폰 15', category: '스마트폰' },
  { id: 3, name: '아이폰 14', category: '스마트폰' },
  { id: 4, name: '아이패드 Pro 12.9', category: '태블릿' },
  { id: 5, name: '아이패드 Air', category: '태블릿' },
  { id: 6, name: '갤럭시 S24 Ultra', category: '스마트폰' },
  { id: 7, name: '갤럭시 S24+', category: '스마트폰' },
  { id: 8, name: '갤럭시 탭 S9', category: '태블릿' },
  { id: 9, name: '맥북 프로 14인치', category: '노트북' },
  { id: 10, name: '맥북 에어 M3', category: '노트북' },
  { id: 11, name: '에어팟 프로 2세대', category: '이어폰' },
  { id: 12, name: '에어팟 맥스', category: '헤드폰' },
  { id: 13, name: '갤럭시 버즈 3 Pro', category: '이어폰' },
  { id: 14, name: '소니 WH-1000XM5', category: '헤드폰' },
  { id: 15, name: '애플워치 시리즈 9', category: '스마트워치' },
  { id: 16, name: '갤럭시 워치 6', category: '스마트워치' },
  { id: 17, name: 'LG 그램 17', category: '노트북' },
  { id: 18, name: '레노버 씽크패드', category: '노트북' },
  { id: 19, name: '닌텐도 스위치 OLED', category: '게임기' },
  { id: 20, name: '플레이스테이션 5', category: '게임기' },
];

export interface Product {
  id: number;
  name: string;
  category: string;
}

/**
 * 상품 검색 API (300ms 지연 시뮬레이션)
 * @param query 검색어
 * @returns 검색 결과 (최대 5개)
 */
export async function searchProducts(query: string): Promise<Product[]> {
  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!query.trim()) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();

  return products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)
    )
    .slice(0, 5);
}

/**
 * 인기 검색어 API
 * @returns 인기 검색어 목록
 */
export async function getPopularSearches(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return ['아이폰', '갤럭시', '맥북', '에어팟', '애플워치'];
}
