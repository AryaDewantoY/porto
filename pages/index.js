import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import aa from "../public/aa.png";
import code from "../public/code.png";
import design from "../public/design.png";
import daw from "../public/daw.png";
import Image from "next/image";
import Link from "next/link";
import a from "../public/a.png";
import b from "../public/b.png";
import c from "../public/c.png";
import d from "../public/d.png";
import e from "../public/e.png";
import f from "../public/f.png";
import h from "../public/h.png";
import i from "../public/i.png";
import l from "../public/l.png";
import zz from "../public/zz.png";

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Arya Dewanto Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="logo" href="/public/favicon.ico" />
      </Head>
      <main className=" bg-yellow px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Web Portofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1zUFuVeiwigMbPp8YfSwhQ3US5t5fi37O/view?usp=sharing"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/18I6-NFFY1OI_6ZQUb1NPpKsX8-Zf7dzi/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Arya Dewanto
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Freelance Web Developer.
            </h3>
            <br />
            <div>
                 <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/AryaDewantoY"
                >
                  Github
                </a> 
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.linkedin.com/in/arya-yayi-dewanto-268354234/"
                >
                  Linkedin
                </a>
              </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={aa} layout="fill" objectFit="cover" alt="gambar" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Ulasan</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              saya memiliki skill menengah atau intermediate, serta pengalaman di bidang ini khususnya pada freelance web developer selama 1 Tahun Lebih.
              <span className="text-teal-500"> Solo Project  </span>
              atau <span className="text-teal-500">Team Project </span>
              yang saya dapatkan Via platform ataupun Group Freelancer di Telegram.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
           Berikut Skill yang saya pernah saya gunakan dalam pembuatan project.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="gambar" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Frontend
              </h3>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">Html</p>
              <p className="text-gray-800 py-1">Css, Tailwind & Bootstrap</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">React.Js</p>
              <p className="text-gray-800 py-1">Vue.Js</p>
              <p className="text-gray-800 py-1">Next Js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="gmbar" />
             <br />
              <p className="py-2 mt-5">
                Beckend
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">Php - Laravel</p>
              <p className="text-gray-800 py-1">Golang</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={daw} width={100} height={100} alt="gambar"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">DataBase</h3>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">Mysql</p>
              <p className="text-gray-800 py-1">Postgre Sql</p>
              <p className="text-gray-800 py-1">Testing API - Postman</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Real Project dan Fake Project yang pernah saya kerjaakan.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Link href={"https://www.claymorestore.shop/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={a}
                alt="gambar"
              />
              </div>
              </Link>
              <br />
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://kulator.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={b}
                alt="gambar"
              />
              </div>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://pagestoremasar97.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={c}
                alt="gambar"
              />
              </div>
              </Link>
              <br />
            
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://voicetext-one.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={d}
                alt="gambar"
              />
              </div>
              </Link>
              <br />
               
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://wg-mothership.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={e}
                alt="gambar"
              />
              </div>
              </Link>
              <br />
               
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://todolist-orcin-one.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={f}
                alt="gambar"
              />
              </div>
              </Link>
              <br />
             
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://www.agitacakes.com/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={h}
                alt="gambar"
              />
              </div>
              </Link>
              <br />

             </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://aryaaaydproject.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={l}
                alt="gambar"
              />
              </div>
              </Link>
              <br />      

                </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://whatsbotmev.vercel.app/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={zz}
                alt="gambar"
              />
              </div>
              </Link>
              <br />         
              
            </div>
            <div className="basis-1/3 flex-1">
            <Link href={"https://hotelbumiwiyata.com/"}> 
              <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                className="rounded-lg object-cover justify-content: auto;"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={i}
                alt="gambar"
              />
              </div>
              </Link>
              <br />
                
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
