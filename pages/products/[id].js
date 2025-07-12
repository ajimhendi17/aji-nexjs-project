import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>This is a dynamic page for product {id}.</p>
    </div>
  );
}