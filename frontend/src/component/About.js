import React from 'react'
 

const About = () => {
  return (
    <div className='container'>
            <h2 className='mb-5 text-center'>About iNotebook </h2>   
            <div className="accordion" id="accordionExample">
            <h5 className='mb-3'>Using iNotebook you could-</h5>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>1. Write your personal / proffesional notes</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                  You can write your note by adding your notes 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>2. Secure your notes on clould</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> Textutils is a free character counter tool that provides instant character count & word count statics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>3. Access your notes from anywhere / from any devices</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> TextUtil is Browser compatible, This means that the website’s HTML coding, as well as the scripts on that website, should be compatible to run on the browsers. This is of immense importance, especially today when there is a large variety of web browsers available.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <strong>4. Edit or Delete your notes</strong>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> TextUtil is Browser compatible, This means that the website’s HTML coding, as well as the scripts on that website, should be compatible to run on the browsers. This is of immense importance, especially today when there is a large variety of web browsers available.
            </div>
            </div>
        </div>
    </div>
        {/* <div>
           <button onClick={togglestyle} type="button" className="btn btn-primary my-3" >{btnText}</button>
        </div> */}
    </div>
  )
}



export default About
