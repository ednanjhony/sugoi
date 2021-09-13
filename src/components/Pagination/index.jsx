import { Container } from './styles';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export function Pagination({ 
  limit, 
  total, 
  offset,
  setOffset 
}) {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit)
  }

  return (
    <Container>
      <li>
        <button 
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Previous
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first )
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                ? 'active'
                : null
              }
            >
              {page}
            </button>
          </li>
        ))
      }
      <li>
        <button 
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Next
        </button>
      </li>
    </Container>
  )
}