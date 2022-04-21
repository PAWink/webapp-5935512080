import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const Procdutes = ({ token }) => {

    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     fooUser()
    // }, [])

    // const fooUser = async () => {
    //     try {
            
    //         const users = await axios.get(`${config.URL}/foo`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
           
    //         setUser(users.data)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }

    // }

    return (
        
        <Layout>
            <Head>
            
                <title>Bootstrap Example</title>

            </Head>
            <Navbar />
            <div>
            <div className={styles.list}>
            <Col className="col-lg-12 col-12">
                
               
                <h1>Fantastic Beasts 3: The Secrets of Dumbledore</h1>
                <h4>เป็นภาพยนตร์แฟนตาซีที่กำกับโดยเดวิด เยตส์ เขียนบทภาพยนตร์โดยเจ. เค. โรว์ลิง
                    และสตีฟ โคลฟส์ จากเรื่องราวต้นฉบับโดยโรว์ลิง ภาพยนตร์เรื่องนี้เป็นการร่วมผลิตของ
                    อเมริกาและอังกฤษ เป็นภาคต่อของภาพยนตร์เรื่อง สัตว์มหัศจรรย์: อาชญากรรมของ
                    กรินเดลวัลด์ นับเป็นภาคที่ 3 ในภาพยนตร์ชุด สัตว์มหัศจรรย์ 
                    และภาคที่ 11 ในชุดภาพยนตร์โลกเวทมนตร์ </h4>
                <div style={{margin: '10px'}}>    <ReactPlayer url="https://youtu.be/znjUF-hMC94"        
                width={700}
                height={400}> </ReactPlayer>

                <h1>SLR กล้อง ติด ตาย</h1>                
                <h4>ภาพยนตร์บอกเล่าเรื่องราวของ แดน (นนน-กรภัทร์ เกิดพันธุ์) นักศึกษาหนุ่มที่กำลัง
                    เรียนอยู่ในสาขาถ่ายภาพ และต้องทำธีสิสส่งให้กับอาจารย์เอม (อ้น-นพพันธ์ บุญใหญ่) 
                    เพื่อคว้าทุนไปเรียนต่อที่นิวยอร์ก แต่รูปถ่ายของแดนกลับไม่ผ่านการคัดเลือก 
                    เอมจึงมอบกล้อง SLR ให้กับแดนเพื่อใช้ในการทำธีสิส แต่แล้วเรื่องไม่คาดฝันก็เกิดขึ้น 
                    เมื่อทุกคนที่เอมถ่ายด้วยกล้อง SLR กลับตายอย่างเป็นปริศนา 
                    อีกทั้งคนที่เคยใช้กล้องนี้มาก่อนต่างก็ตายกันหมดเช่นกัน</h4></div>

                    <div style={{margin: '10px'}}>    <ReactPlayer url="https://youtu.be/KED2_rPhZaA"        
                width={700}
                height={400}> </ReactPlayer>


                <h1>The Lost City ผจญภัยนครสาบสูญ</h1>                
                <h4>เมื่อจู่ๆ ลอเร็ตตากับอลันต้องออกผจญภัยในป่าอันกว้างใหญ่ สองคู่หูที่ไม่น่าจะเข้ากันได้ 
                    ต้องร่วมมือกันเพื่อเอาชีวิตให้รอดจากหลายสิ่งหลายอย่าง 
                    และต้องค้นหาขุมทรัพย์โบราณ ก่อนที่มันจะสูญหายไปตลอดกาล</h4></div>

                    <div style={{margin: '10px'}}>    <ReactPlayer url="https://youtu.be/iMLDj8cBeXI"        
                width={700}
                height={400}> </ReactPlayer>


                <h1>Sonic the Hedgehog 2</h1>                
                <h4>พบกับการกลับมาของเม่นสายฟ้าขวัญใจผู้ชมระดับโลก 
                    ซึ่งมาพร้อมกับการผจญภัยสุดมันส์ในอีกระดับใน SONIC THE HEDGEHOG 2 โซนิค เดอะ เฮดจ์ฮ็อก 2
                    หลังจากที่ย้ายมาลงหลักปักฐานที่กรีน ฮิลส์ โซนิค อยากจะพิสูจน์ตัวเองว่าเขาคือฮีโร่ที่แท้จริง 
                    การทดสอบเริ่มต้นเมื่อดร.โรบ็อตนิค กลับมาพร้อมกับพันธมิตรใหม่ “นัคเคิลส์” พวกเขากลับมาค้นหามรกตที่มีพลังในการทำลายอารยธรรม โซนิคร่วมทีมกับเทลส์ 
                    พวกเขาร่วมกันออกเดินทางท่องโลก เพื่อค้นหามรกตก่อนที่มันจะตกไปอยู่ในมือของวายร้าย 
                    จากทีมผู้สร้างที่อยู่เบื้องหลังความสำเร็จของ The Fast and the Furious และ Deadpool</h4></div>

                    <div style={{margin: '10px'}}>    <ReactPlayer url="https://youtu.be/0VwuESe1QEY"        
                width={700}
                height={400}> </ReactPlayer>

                <h1>แดง พระโขนง</h1>                
                <h4>ภาพยนตร์เรื่องนี้นำตำนานของแดงซึ่งเป็นลูกของแม่นากพระโขนง 
                    ที่จริงแล้วตามตำนานไม่ได้บอกว่าลูกของแม่นากเป็นผู้หญิงหรือชายเนื่องจากแม่นากนั้นตายท้องกลม 
                    ดังนั้นจึงเป็นความอิสระที่ทำให้ผู้กำกับหยิบมาตีความว่าเป็นผู้ชาย
                     ภาพยนตร์เล่าเรื่องราวหลังจากเหตุการณ์ผีนางนากแห่งทุ่งพระโขนงถูกสมเด็จโตปราบและนำปั้นเหน่งของนางนากไปบำเพ็ญเพียรกับพระมาก 
                     จนเวลาผ่านมา 10 ปี เมื่อ แดง ลูกชายของนางนากที่สมเด็จโตไม่ได้นำร่างไปบำเพ็ญเพียรด้วย 
                     ได้ออกอาละวาดหลอกหลอนชาวบ้านจนเกิดความโกลาหลครั้งใหญ่ ชาวบ้านจึงต้องหาทางหยุดยั้งผีแดง</h4></div>

                     <div style={{margin: '10px'}}>    <ReactPlayer url="https://youtu.be/qcpeDqtgzFk"        
                width={700}
                height={400}> </ReactPlayer></div>

            </Col>
            
            </div>
            </div>
        </Layout>
    )
}

// export default withAuth(Foo1)
export default withAuth(Procdutes)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
