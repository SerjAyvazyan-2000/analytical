import './home.scss'
import heroImg from '../../assets/images/heroImg.png'
import aboutMedia from '../../assets/images/aboutMedia.png'
import libraryImg from '../../assets/images/libraryImg.png'
import experts from '../../assets/images/experts.png'


const Home = () => {
    return <>
        <section className='hero-section'>
            <div className='container'>
                <div className='hero-body G-justify-between'>
                    <div className='hero-description'>
                        <h2 className='hero-title'>Платформа</h2>
                        <p className='hero-text'>
                            объединяет Банк, фонды, индустрию и гос. структуры со стартапами, учеными, экспертами и
                            вузами
                        </p>
                    </div>
                    <div className='hero-media'>
                        <img src={heroImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className='about-us-section'>
            <div className='big-container'>
                <div className='about-us-body G-align-center'>
                    <div className='about-us-media'>
                        <img src={aboutMedia} alt=""/>
                    </div>
                    <div className='about-us-description'>
                        <h2 className='about-us-title'>
                            Более <span className='text-primary'>20 000</span> проектов <span
                            className='desktop-text-wrap'>в базе стартапов</span>
                        </h2>
                        <div className='about-us-texts G-flex-column'>
                            <p>Реляционная база данных, содержит информацию
                                <span className='desktop-text-wrap'>о российских компаниях, проектах и
                                продуктах.</span></p>
                            <p>
                                Масштабируемая база включает в себя в том числе
                                <span className='desktop-text-wrap'>данные о стартапах из Фонда Сколково,
                                SberUnity,</span>
                                Взлет (Минэкономразвития), платформы НТИ, <span className='desktop-text-wrap'>Startup Guide (АИМ).</span>
                            </p>
                            <p>
                                Сервис поиска по базе на основе инструментов <span className='desktop-text-wrap'>ИИ оперативно и точно находить релевантные</span> компании,
                                проекты и продукты.
                            </p>
                        </div>
                        <button className='about-us-btn btn-primary G-align-center'>
                            <span>Перейти к поиску по базе</span>
                            <i className='icon icon-goTo'></i>
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <section className='library-section'>
            <div className='container'>
                <div className='library-body G-align-center'>

                    <div className='library-info'>
                        <h2 className='library-title'>Библиотека знаний</h2>
                        <div className='library-texts G-flex-column'>
                            <p>Содержит описания решаемых бизнес-задач, кейсов и эффектов от внедрения технологий,
                                аналитические исследования и научные статьи, актуальные нормативные документы.</p>
                            <p>
                                С помощью ИИ и машинного обучения автоматизированы процессы поиска и обработки данных,
                                что позволяет быстро находить релевантные запросу материалы и анализировать большие
                                объемы данных, выявлять закономерности и тренды, помогая в аналитике и стратегическом
                                планировании.
                            </p>
                        </div>

                        <button className='library-btn btn-primary G-align-center'>
                            <span>Перейти в библиотеку знаний</span>
                            <i className='icon icon-goTo'></i>
                        </button>
                    </div>

                    <div className='library-media'>
                        <img src={libraryImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className='experts-section'>
            <div className='container'>
                <div className='experts-body G-align-center'>
                    <div className='library-media'>
                        <img src={experts} alt=""/>
                    </div>


                    <div className='library-info'>
                        <h2 className='library-title'>База экспертов</h2>
                        <div className='library-texts G-flex-column'>
                            <p>
                                Объединяет высококвалифицированных специалистов из различных секторов, таких как
                                финансовый, образовательный, медицинский и других, и используется для оптимизации
                                принятия решений.
                            </p>
                            <p>
                                База экспертов по технологиям является важным инструментом для компаний, стремящихся к
                                инновациям и улучшению своих процессов. Она предоставляет доступ к специалистам, которые
                                могут помочь в разработке стратегий, внедрении новых технологий и решении специфических
                                бизнес-задач.
                            </p>
                        </div>

                        <button className='library-btn btn-primary G-align-center'>
                            <span>Перейти к поиску эксперта</span>
                            <i className='icon icon-goTo'></i>
                        </button>
                    </div>

                </div>
            </div>
        </section>

    </>
};

export default Home;