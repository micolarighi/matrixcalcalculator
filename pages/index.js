import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex bg-gray-900 justify-center items-center min-h-screen">
      <div className="bg-white rounded px-10 py-12 shadow-lg">
        <h1 className="hover:text-gray-900 font-bold text-3xl mb-2 cursor-pointer">Matrix Calculator</h1>
        <p className="mb-4">Created By <strong> Micola Arighi </strong> </p>
        <div className="flex flex-col text-white gap-2 justify-center">
          <Link href="/matriks-penjumlahan">
            <button className="bg-gray-700 hover:bg-gray-900 px-2 py-1">Penjumlahan</button>
          </Link>
          <Link href="/matriks-pengurangan">
            <button className="bg-gray-700 hover:bg-gray-900 px-2 py-1">Pengurangan</button>
          </Link>
          <Link href="/matriks-perkalian">
            <button className="bg-gray-700 hover:bg-gray-900 px-2 py-1">Perkalian</button>
          </Link>
          <Link href="/matriks-transpose">
            <button className="bg-gray-700 hover:bg-gray-900 px-2 py-1">Transpose</button>
          </Link>
          <Link href="/matriks-minor">
            <button className="bg-gray-700 hover:bg-gray-900 px-2 py-1">Minor</button>
          </Link>
          <Link href="/matriks-minor_kofaktor">
            <button className="bg-gray-700 hover:bg-gray-900 px-2 py-1">Minor & Kofaktor</button>
          </Link>

        </div>
      </div>
    </div>
  )
}
