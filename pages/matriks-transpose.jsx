import Link from "next/dist/client/link";
import React, { useState } from "react";
export default function MatriksTranspose() {
  const [ukuranMatriks, setUkuranMatriks] = useState('')
  
  function hitung() {
    console.log("test")
    console.log(ukuranMatriks)
  }

  return (
    <div className="flex bg-gray-900 justify-center items-center min-h-screen">
      <div className="bg-white rounded px-10 py-12 shadow-lg">
        <Link href="/">
          <a className="underline cursor-pointer"> Kembali</a>
        </Link>
        <h1 className="hover:text-gray-900 font-bold text-xl mb-2 cursor-pointer">
         Matriks Transpose
        </h1>
        <p className="mb-4">
          Created By <strong> Micola Arighi </strong>{" "}
        </p>
        <div className="flex flex-col text-gray-700 gap-2 justify-center">
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
            {ukuranMatriks <= 2 ? <Matriks2x2/> : <Matriks3x3/>}

        </div>
      </div>
    </div>
  );
}


function Matriks2x2() {
  let mat11 = React.createRef()
  let mat12 = React.createRef()
  let mat21 = React.createRef()
  let mat22 = React.createRef()

  const [ans, setAns] = useState(false)

  const [res, setRes] = useState([])
  function hitung(){
    res.push(mat11.current.value)
    res.push(mat21.current.value)
    res.push(mat12.current.value)
    res.push(mat22.current.value)
    setAns(true)
  } 
  return(
            <div>     
              <div>
                <label
                  className="block uppercase first-letter:tracking-wide text-gray-700 text-xs font-bold mb-4"
                >
                  Anggota Matriks A
                </label> 

                <div className="flex flex-wrap">
                  <div className="">
                    <input 
                    ref={mat11}
                    className="appearance-none block lg:w-full md:w-70 w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                      ref={mat12}
                     className="appearance-none block lg:w-full md:w-70 w-20 mx-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2">
                  <div className="">
                    <input
                    ref={mat21}
                    className="appearance-none block lg:w-full md:w-70 w-20 mx-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={mat22}
                    className="appearance-none block lg:w-full md:w-70 w-20 mx-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
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
  let mat11 = React.createRef()
  let mat12 = React.createRef()
  let mat13 = React.createRef()
  let mat21 = React.createRef()
  let mat22 = React.createRef()
  let mat23 = React.createRef()
  let mat31 = React.createRef()
  let mat32 = React.createRef()
  let mat33 = React.createRef()

  const [ans, setAns] = useState(false)

  const [res, setRes] = useState([])
  function hitung(){
    res.push(mat11.current.value)
    res.push(mat21.current.value)
    res.push(mat31.current.value)

    res.push(mat12.current.value)
    res.push(mat22.current.value)
    res.push(mat32.current.value)

    res.push(mat13.current.value)
    res.push(mat23.current.value)
    res.push(mat33.current.value)

    setAns(true)
  } 
  return(
            <div>     
              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Anggota Matriks A
                </label> 

                <div className="flex flex-wrap">
                  <div className="">
                    <input 
                    ref={mat11}
                    className="appearance-none md:w-50 sm:w-50 w-20 mx-1 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                      ref={mat12}
                     className="appearance-none md:w-50 sm:w-50 w-20 mx-1 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                      ref={mat13}
                     className="appearance-none md:w-50 sm:w-50 w-20 mx-1 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2">
                  <div className="">
                    <input
                    ref={mat21}
                    className="appearance-none md:w-50 sm:w-50 w-20 mx-1 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={mat22}
                    className="appearance-none md:w-50 sm:w-50 w-20 mx-1 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={mat23}
                    className="appearance-none md:w-50 sm:w-50 w-20 mx-1 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2">
                  <div className="">
                    <input
                    ref={mat31}
                    className="appearance-none block md:w-50 lg:w-full w-20 mx-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={mat32}
                    className="appearance-none block md:w-50 lg:w-full w-20 mx-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={mat33}
                    className="appearance-none block md:w-50 lg:w-full w-20 mx-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
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
                  <h1 className="text-2xl ">{res[3]}</h1>
                  <h1 className="text-2xl ">{res[6]}</h1>
                </div>
                <div className="ml-1 text-center">
                  <h1 className="text-2xl ml-5">{res[1]}</h1>
                  <h1 className="text-2xl ml-5">{res[4]}</h1>
                  <h1 className="text-2xl ml-5">{res[7]}</h1>
                </div>
                <div className="ml-1 text-center">
                  <h1 className="text-2xl ml-5">{res[2]}</h1>
                  <h1 className="text-2xl ml-5">{res[5]}</h1>
                  <h1 className="text-2xl ml-5">{res[8]}</h1>
                </div>
              </div> : ""}
              
            </div>
  )
}
