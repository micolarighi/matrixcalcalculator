import Link from "next/dist/client/link";
import React, { useState } from "react";
export default function MatriksPenjumlahan() {
  const [ukuranMatriks, setUkuranMatriks] = useState('')

  function hitung() {
    console.log("test")
    console.log(ukuranMatriks)
  }

  return (
    <div className="flex bg-gray-900 justify-center items-center min-h-screen">
      <div className="bg-white rounded px-10 py-12 shadow-lg">
        <Link href="/">
          <a className="underline cursor-pointer "> Kembali</a>
        </Link>
        <h1 className="hover:text-gray-900 font-bold mt-3 text-xl cursor-pointer">
          Penjumlahan Matriks
        </h1>
        <p className="mb-4">
          Created By <strong> Micola Arighi </strong>{" "}
        </p>
        <div className="flex flex-col text-gray-700">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Ukuran
          </label>
          <div className="flex flex-wrap mb-4">
            <button onClick={e => setUkuranMatriks(2)} className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-900 mr-2">2 x 2</button>
            <button onClick={e => setUkuranMatriks(3)} className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-900 ml-2">3 x 3</button>
          </div>

          {/* anggota matriks a */}
          {ukuranMatriks <= 2 ? <Matriks2x2 /> : <Matriks3x3 />}

        </div>
      </div>
    </div>
  );
}


function Matriks2x2() {
  let matA11 = React.createRef()
  let matA12 = React.createRef()
  let matA21 = React.createRef()
  let matA22 = React.createRef()

  let matB11 = React.createRef()
  let matB12 = React.createRef()
  let matB21 = React.createRef()
  let matB22 = React.createRef()

  const [ans, setAns] = useState(false)

  const [res, setRes] = useState([])
  function hitung() {
    const matA = [matA11.current.value, matA12.current.value, matA21.current.value, matA22.current.value]
    const matB = [matB11.current.value, matB12.current.value, matB21.current.value, matB22.current.value]
    for (let i = 0; i < matA.length; i++) {
      res.push(parseInt(matA[i]) + parseInt(matB[i]))
    }
    setAns(true)
  }
  return (
    <div>
      <div>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Anggota Matriks A
        </label>

        <div className="flex flex-wrap">
          <div className="mr-2">
            <input
              ref={matA11}
              className="appearance-none block lg:w-full md:w-40 w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matA12}
              className="appearance-none block lg:w-full md:w-40 w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <input
              ref={matA21}
              className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matA22}
              className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>
      </div>

      {/* anggota matriks b */}
      <div className="mt-2">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Anggota Matriks B
        </label>

        <div className="flex flex-wrap">
          <div className="mr-2">
            <input
              ref={matB11}
              className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matB12}
              className="appearance-none block w-32 lg:w-full md:w-70 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <input
              ref={matB21}
              className="appearance-none block w-32 lg:w-full md:w-70 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matB22}
              className="appearance-none block w-32 lg:w-full md:w-70 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>
      </div>
      <div className="flex mt-5 w-100 justify-center">
        <button type="submit" onClick={hitung} className="bg-gray-700 text-white px-10 py-1 rounded hover:bg-gray-900">Lihat Jawaban</button>
      </div>
      {ans ? <div className="flex items-center justify-center flex-wrap mt-5 bg-gray-200 rounded px-4 py-2">
        <div className="mr-5">
          <h1 className="text-3xl font-bold">Hasil : </h1>
        </div>
        <div className="ml-5 text-center">
          <h1 className="text-2xl">{res[0]}</h1>
          <h1 className="text-2xl ">{res[2]}</h1>
        </div>
        <div className="ml-1 text-center">
          <h1 className="text-2xl ml-5">{res[1]}</h1>
          <h1 className="text-2xl ml-5">{res[3]}</h1>
        </div>
      </div> : ""}

    </div>
  )
}
function Matriks3x3() {
  let matA11 = React.createRef()
  let matA12 = React.createRef()
  let matA13 = React.createRef()
  let matA21 = React.createRef()
  let matA22 = React.createRef()
  let matA23 = React.createRef()
  let matA31 = React.createRef()
  let matA32 = React.createRef()
  let matA33 = React.createRef()

  let matB11 = React.createRef()
  let matB12 = React.createRef()
  let matB13 = React.createRef()
  let matB21 = React.createRef()
  let matB22 = React.createRef()
  let matB23 = React.createRef()
  let matB31 = React.createRef()
  let matB32 = React.createRef()
  let matB33 = React.createRef()

  const [ans, setAns] = useState(false)

  const [res, setRes] = useState([])
  function hitung() {
    console.log(res)
    const matA = [matA11.current.value, matA12.current.value, matA13.current.value, matA21.current.value, matA22.current.value, matA23.current.value, matA31.current.value, matA32.current.value, matA33.current.value]
    const matB = [matB11.current.value, matB12.current.value, matB13.current.value, matB21.current.value, matB22.current.value, matB23.current.value, matB31.current.value, matB32.current.value, matB33.current.value]
    for (let i = 0; i < matA.length; i++) {
      res.push(parseInt(matA[i]) + parseInt(matB[i]))
    }
    setAns(!ans)



  }
  return (
    <div>
      <div>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Anggota Matriks A
        </label>

        <div className="flex flex-wrap">
          <div className="mr-2">
            <input
              ref={matA11}
              className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matA12}
              className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="ml-2">
            <input
              ref={matA13}
              className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <input
              ref={matA21}
              className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matA22}
              className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="ml-2">
            <input
              ref={matA23}
              className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <input
              ref={matA31}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matA32}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="ml-2">
            <input
              ref={matA33}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>
      </div>

      {/* anggota matriks b */}
      <div className="mt-2">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Anggota Matriks B
        </label>

        <div className="flex flex-wrap ">
          <div className="mr-2">
            <input
              ref={matB11}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matB12}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="ml-2">
            <input
              ref={matB13}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <input
              ref={matB21}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matB22}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="ml-2">
            <input
              ref={matB23}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <input
              ref={matB31}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="">
            <input
              ref={matB32}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
          <div className="ml-2">
            <input
              ref={matB33}
              className="appearance-none block md:w-50 lg:w-full w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>
      </div>
      <div className="flex mt-5 w-100 justify-center">
        <button type="submit" onClick={hitung} className="bg-gray-700 text-white px-10 py-1 rounded hover:bg-gray-900">Lihat Jawaban</button>
      </div>
      {ans ? <div className="flex items-center justify-center flex-wrap mt-5 bg-gray-200 rounded px-4 py-2">
        <div className="mr-5">
          <h1 className="text-xl font-bold">Hasil : </h1>
        </div>
        <div className="ml-5 text-center">
          <h1 className="text-md md:text-xl">{res[0]}</h1>
          <h1 className="text-md md:text-xl">{res[3]}</h1>
          <h1 className="text-md md:text-xl">{res[6]}</h1>
        </div>
        <div className="ml-1 text-center">
          <h1 className="text-md md:text-xl ml-5">{res[1]}</h1>
          <h1 className="text-md ml-5 md:text-xl">{res[4]}</h1>
          <h1 className="text-md ml-5 md:text-xl">{res[7]}</h1>
        </div>
        <div className="ml-1 text-center">
          <h1 className="text-md ml-5 md:text-xl">{res[2]}</h1>
          <h1 className="text-md ml-5 md:text-xl">{res[5]}</h1>
          <h1 className="text-md ml-5 md:text-xl">{res[8]}</h1>
        </div>
      </div> : ""}

    </div>
  )
}
