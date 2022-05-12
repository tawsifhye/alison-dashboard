import CourseContent from 'components/CourseContent'
import Footer from 'components/Footer'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <CourseContent />
      <Footer />
    </>
  )
}

export default Home
