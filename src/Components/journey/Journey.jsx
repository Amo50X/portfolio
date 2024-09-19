import './Journey.css'

const Journey = () => {
  return (
    <section id='journey'>    
      <h1>Journey</h1>
      <div className="journey">
        <div>
          <h2>EDUCATION</h2>
          <ul>
            <li>
              <h3>
                Thaba Morula High School (2013-2018)
              </h3>
              <p>
                Thaba Morula High is where I was able to obtain my National Senior Certificate and <br/>
                I was studying Mathematics and Sciences.
              </p>
            </li>
            <li>
              <h3>
                Tshwane University of Technology (2019-2023)
              </h3>
              <p>
                This is where I got my National Diploma in Infomation Technology. I was specializing in <br/>
                Intelligent Industrial Systems which is similar to Computer System Endineering.
              </p>
            </li>
          </ul>
        </div>
        <div className='vr'/>
        <div>
          <h2>EXPERIANCE</h2>

          <ul>
            <li>
              <h3>
                TUT 4IR-WIL (2022-2023)
              </h3>
              <p>
                A structure form of experiential learning programme that focuses on application of theory <br/>
                in an authentic (Workplace Based Learning) or non-workplace-place context. I used my Python <br/>
                skill and HTML&CSS skills to build AI Web Applications.
              </p>
            </li>
            <li>
              <h3>
                Mbula Research And Development (2023-2024)
              </h3>
              <p>
                Software development and web development. Working as a full-stack development, using <br/>
                python API as Back-end and using React JS for Front-end. Did Computer Vision and Graphic Design <br/>
                with Blender 3d.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Journey