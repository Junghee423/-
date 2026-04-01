# 검색 자동완성 (Search Autocomplete)

## 제한 시간: 1시간

## 요구사항

### 필수 기능
1. **검색어 입력 시 자동완성 목록 표시**
   - 입력 시작 후 300ms debounce 적용
   - 최대 5개 결과 표시

2. **키보드 네비게이션**
   - ↑/↓ 키로 목록 탐색
   - Enter 키로 선택
   - ESC 키로 목록 닫기

3. **최근 검색어 저장**
   - 검색 실행 시 최근 검색어에 추가
   - 최대 5개까지 저장 (localStorage)
   - 입력창이 비어있을 때 최근 검색어 표시

4. **검색 실행**
   - Enter 또는 검색 버튼 클릭 시 검색 실행
   - 검색 결과는 `console.log`로 출력

### UI 요구사항
- 로딩 중 상태 표시
- 결과 없음 상태 표시
- 현재 선택된 항목 하이라이트

## 평가 포인트
- [ ] debounce 구현 방식 (직접 구현 or 유틸 사용)
- [ ] 키보드 이벤트 처리
- [ ] 상태 설계 (여러 상태를 어떻게 관리했는지)
- [ ] 컴포넌트 분리 기준
- [ ] 접근성 (aria 속성 등)

## 추가 도전 과제 (시간 남으면)
- 검색어 하이라이팅 (입력한 부분 bold 처리)
- 최근 검색어 개별 삭제
- 검색어 캐싱 (동일 검색어 재요청 방지)

## 시작하기

```bash
npm install
npm run dev
```

## API 사용법

```typescript
import { searchProducts } from './api/products';

// 300ms 지연 후 결과 반환 (실제 API 시뮬레이션)
const results = await searchProducts('아이폰');
// [{ id: 1, name: '아이폰 15 Pro', category: '스마트폰' }, ...]
```
