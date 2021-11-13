import Link from "next/dist/client/link";
import React, { useState } from "react";
export default function MatriksPerkalian() {
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
          Perkalian Matriks
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
            <div className="flex flex-wrap mb-4 gap-3">
              <button onClick={e => setUkuranMatriks(2)} className="bg-gray-700 
      text-white px-2 py-1 rounded hover:bg-gray-900 mr-0 md:mr-2 lg:mr-2">(3 x 2) x (2 x 3)</button>
              <button onClick={e => setUkuranMatriks(3)} className="bg-gray-700 text-white 
      px-2 py-1 rounded hover:bg-gray-900 md:ml-2">(2 x 3) x (3 x 2)</button>
            </div>

            {/* anggota matriks a */}
            {ukuranMatriks <= 2 ? <Matriks1/> : <Matriks2/>}

        </div>
      </div>
    </div>
  );
}


function Matriks1() {
  let matA11 = React.createRef()
  let matA12 = React.createRef()
  let matA21 = React.createRef()
  let matA22 = React.createRef()
  let matA31 = React.createRef()
  let matA32 = React.createRef()

  let matB11 = React.createRef()
  let matB12 = React.createRef()
  let matB13 = React.createRef()
  let matB21 = React.createRef()
  let matB22 = React.createRef()
  let matB23 = React.createRef()

  const [ans, setAns] = useState(false)

  const [res1, setRes1] = useState([])
  const [res2, setRes2] = useState([])
  const [res3, setRes3] = useState([])
  const [finalRes, setFinalRes] = useState([0])

  function hitung(){
    const matA1 = [matA11.current.value, matA12.current.value]
    const matA2 = [matA21.current.value, matA22.current.value]
    const matA3 = [matA31.current.value, matA32.current.value]
    const matB = [matB11.current.value, matB21.current.value, 
    matB12.current.value, matB22.current.value, matB13.current.value, matB23.current.value]


      let i = 0 ;
      for (let j = 0; j < 6; j++) {
          if (j % 2 == 1) {
              i = 1 
          } else {
              i = 0
          }
          res1.push(parseInt(matA1[i]) * parseInt(matB[j]))
          res2.push(parseInt(matA2[i]) * parseInt(matB[j]))
          res3.push(parseInt(matA3[i]) * parseInt(matB[j]))

      }

      finalRes[0] = res1[0] + res1[1]
      finalRes[1] = res1[2] + res1[3] 
      finalRes[2] = res1[4] + res1[5]

      finalRes[3] = res2[0] + res2[1]
      finalRes[4] = res2[2] + res2[3] 
      finalRes[5] = res2[4] + res2[5] 

      finalRes[6] = res3[0] + res3[1]
      finalRes[7] = res3[2] + res3[3] 
      finalRes[8] = res3[4] + res3[5] 

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

                <div className="flex flex-wrap gap-2">
                  <div className="">
                    <input 
                    ref={matA11}
                    className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                      ref={matA12}
                     className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 
                     text-gray-700 border border-gray-200 rounded py-3 px-4 
                     leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                     id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="">
                    <input 
                    ref={matA21}
                    className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                    ref={matA22}
                    className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
              </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="">
                    <input 
                    ref={matA31}
                    className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                    focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                    ref={matA32}
                    className="appearance-none block lg:w-full md:w-70 w-32 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                    focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
              </div>
            </div>

              {/* anggota matriks b */}
              <div className="mt-2"> 
                <label
                  className="block uppercase tracking-wide 
                  text-gray-700 text-xs font-bold mb-2"
                >
                  Anggota Matriks B
                </label> 
              
                <div className="flex flex-wrap gap-2">
                  <div className="">
                    <input 
                    ref={matB11}
                    className="appearance-none block lg:w-full md:w-70 w-20 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>

                  <div className="">
                    <input
                    ref={matB12}
                    className="appearance-none block w-20 lg:w-full md:w-70 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                    ref={matB13}
                    className="appearance-none block w-20 lg:w-full md:w-70 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="">
                    <input 
                    ref={matB21}
                    className="appearance-none block w-20 lg:w-full md:w-70 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>

                  <div className="">
                    <input 
                    ref={matB22}
                    className="appearance-none block w-20 lg:w-full md:w-70 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={matB23}
                    className="appearance-none block w-20 lg:w-full md:w-70 bg-gray-200 
                    text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
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
                  <h1 className="text-2xl">{finalRes[0]}</h1>
                  <h1 className="text-2xl ">{finalRes[3]}</h1>
                  <h1 className="text-2xl ">{finalRes[6]}</h1>
                </div>
                <div className="ml-1 text-center">
                  <h1 className="text-2xl ml-5">{finalRes[1]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[4]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[7]}</h1>
                </div>
                 <div className="ml-1 text-center">
                  <h1 className="text-2xl ml-5">{finalRes[2]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[5]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[8]}</h1>
                </div> 
              </div> : ""}
              
            </div>
  )
}
function Matriks2() {

  let matA11 = React.createRef()
  let matA12 = React.createRef()
  let matA13 = React.createRef()
  let matA21 = React.createRef()
  let matA22 = React.createRef()
  let matA23 = React.createRef()

  let matB11 = React.createRef()
  let matB12 = React.createRef()
  let matB21 = React.createRef()
  let matB22 = React.createRef()
  let matB31 = React.createRef()
  let matB32 = React.createRef()


  const [ans, setAns] = useState(false)

  const [res1, setRes1] = useState([])
  const [res2, setRes2] = useState([])
  const [res3, setRes3] = useState([])
  const [finalRes, setFinalRes] = useState([0])

  function hitung(){
    const matA1 = [matA11.current.value, matA12.current.value, matA13.current.value]
    const matA2 = [matA21.current.value, matA22.current.value, matA23.current.value]
    const matB = [matB11.current.value, matB21.current.value, matB31.current.value, 
        matB12.current.value, matB22.current.value, matB32.current.value]


      let i = 0 ;
      for (let j = 0; j < 6; j++) {
          if (j<= 3) {
              i++
          } else {
              j = 0
          }
          res1.push(parseInt(matA1[i]) * parseInt(matB[j]))
          res2.push(parseInt(matA2[i]) * parseInt(matB[j]))

      }

      finalRes[0] = res1[0] + res1[1]
      finalRes[1] = res1[2] + res1[3] 
      finalRes[2] = res1[4] + res1[5]

      finalRes[3] = res2[0] + res2[1]
      finalRes[4] = res2[2] + res2[3] 
      finalRes[5] = res2[4] + res2[5] 

      finalRes[6] = res3[0] + res3[1]
      finalRes[7] = res3[2] + res3[3] 
      finalRes[8] = res3[4] + res3[5] 

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

                <div className="flex flex-wrap gap-2">
                  <div className="">
                    <input 
                    ref={matA11}
                    className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                      ref={matA12}
                     className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                     leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                     id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                      ref={matA13}
                     className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                     leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                     id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="">
                    <input
                    ref={matA21}
                    className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={matA22}
                    className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={matA23}
                    className="appearance-none md:w-50 sm:w-50 w-20 block lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
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
              
                <div className="flex flex-wrap gap-2">
                  <div className="">
                    <input 
                    ref={matB11}
                    className="appearance-none block md:w-50 lg:w-full w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input
                    ref={matB12}
                    className="appearance-none block md:w-50 lg:w-full w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="">
                    <input 
                    ref={matB21}
                    className="appearance-none block md:w-50 lg:w-full w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={matB22}
                    className="appearance-none block md:w-50 lg:w-full w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="">
                    <input 
                    ref={matB31}
                    className="appearance-none block md:w-50 lg:w-full w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
                  </div>
                  <div className="">
                    <input 
                    ref={matB32}
                    className="appearance-none block md:w-50 lg:w-full w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" />
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
                  <h1 className="text-2xl">{finalRes[0]}</h1>
                  <h1 className="text-2xl ">{finalRes[3]}</h1>
                  <h1 className="text-2xl ">{finalRes[6]}</h1>
                </div>
                <div className="ml-1 text-center">
                  <h1 className="text-2xl ml-5">{finalRes[1]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[4]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[7]}</h1>
                </div>
                <div className="ml-1 text-center">
                  <h1 className="text-2xl ml-5">{finalRes[2]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[5]}</h1>
                  <h1 className="text-2xl ml-5">{finalRes[8]}</h1>
                </div>
              </div> : ""}
              
            </div>
  )
}
