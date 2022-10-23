export default function About(){
  return(<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <div className='about-page'>
      <div className='about-text'>
        <h1 className='about-description animate__animated animate__backInDown'>Если имеются вопросы/предложения:</h1>
        <h1 className='about-description animate__animated animate__backInDown animate__delay-1s'>Почта: yergor@mail.ru</h1>
        
        <h1 className='about-description animate__animated animate__backInDown animate__delay-2s'>
          ВК: <a style={{color: 'rgb(240, 240, 245)'}} className='about vk' href="https://vk.com/yergor">VK</a>
        </h1>
        <div className='animate__animated animate__fadeIn animate__delay-4s' style={{marginTop: '20px'}}>
          <a href='/' className='about' >Вернуться на главную страницу</a>
        </div>
      </div>
    </div>
    <div>
      
    </div>
    </>
  )
}