import React, { useEffect, useState } from 'react'
import "../Localcss.css"
function Local() {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState('en')

    const handletheme = () => {
        setTheme(Theme => (Theme === 'light' ? 'dark' : "light"));
    };


    useEffect(() => {
        sessionStorage.setItem("theme", theme)
    }, [theme])

    useEffect(() => {
        const localtheme = sessionStorage.getItem("theme") || 'light';
        setTheme(localtheme)
    }, [])




    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };


    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    useEffect(() => {
        const saveLanguage = localStorage.getItem('language') || 'en';
        setLanguage(saveLanguage)
    })


    const translations = {
        en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis id laudantium impedit minus eaque facilis nulla qui? Officia illo tempore reprehenderit dolorem. Illum, fuga alias id placeat corporis atque iste.",
        hi: "लोरम इप्सम डोलोर सिट अमेट, कॉन्सेक्टेचर अडिपिसिकिंग एलीट। परफेरेंडिस आईडी लौडेंटियम इम्पीडिट माइनस ईएक्वे फासिलिस नुल्ला क्वि? ऑफिशिया इलो टेम्पोरे reprehenderit dolorem. Illum, fuga alias id placeat corporis atque iste.",
        gu: "લોરમ ઇપ્સમ ડોલોર સીટ અમેટ, કોનસેકટેતુર અડિપિસિકિંગ એલિટ. પરફેરેન્ડિસ આઈડી લાઉડેન્ટિયમ ઇમ્પીડિટ માઇનસ ઇએક્વે ફેસિલિસ નુલ્લા ક્વિ? ઓફિસિયા illo tempore reprehenderit dolorem. Illum, fuga alias id placeat corporis atque iste."
    };


    return (
        <div className={theme}>

            <div id='parent'>
                <div id="child">
                    <div id="nav"></div>
                    <div id="body">
                        <div id="childA">

                            <h1>My UI Hedding</h1>

                            <h3>Project : Chenge Theme And <br /> <span>Chenge Language</span></h3>

                            <p>{translations[language]}</p>

                            <button onClick={handletheme}>Chenge Theme</button>

                            <select value={language} onChange={handleLanguageChange}>
                                <option value="en">Select Language</option>
                                <option value="en">English</option>
                                <option value="hi">हिंदी</option>
                                <option value="gu">ગુજરાતી</option>
                            </select>

                        </div>
                        <div id="childB">
                            <img src="laptop.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Local


