import React, {useState} from "react";
import Download from "./download";
import './form.css'
import { useInput } from './inputHook';


/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */

/**
 * A LEAKED LETTER SENT BY @tomgrigory:
 * DEAR PROGRAMMING LORDS,
 *                        FORGIVE ME FOR WRITING REALLY UGLY LOOKING CODE. 
 * ......................................................................................................
 * 
 * IF YA STILL HAVE THE COURAGE TO LOOK INTO THE CODE, GO AHEAD MY BOI.
 */
function FileUpload() {
  
  // State to store uploaded file
  const [file, setFile] = useState("");
  
  const { value:name, bind:bindName, reset:resetFirstName } = useInput('');
  const { value:role, bind:bindRole, reset:resetRole } = useInput('');
  const { value:about, bind:bindabout, reset:resetabout } = useInput('');
  

  const { value:company1, bind:bindcompany1, reset:resetcompany1 } = useInput('');
  const { value:company2, bind:bindcompany2, reset:resetcompany2 } = useInput('');
  const { value:company3, bind:bindcompany3, reset:resetcompany3 } = useInput('');
  const { value:sideproject1, bind:bindsideproject1, reset:resetsideproject1 } = useInput('');
  const { value:sideproject2, bind:bindsideproject2, reset:resetsideproject2 } = useInput('');
  const { value:sideproject3, bind:bindsideproject3, reset:resetsideproject3 } = useInput('');

  const { value:college, bind:bindcollege, reset:resetcollege } = useInput('');
  const { value:skills, bind:bindskills, reset:resetskills } = useInput('');
  const { value:langs, bind:bindlangs, reset:resetlangs } = useInput('');
  const { value:website, bind:bindwebsite, reset:resetwebsite } = useInput('');
  const { value:username, bind:bindusername, reset:resetusername } = useInput('');

  const { value:company1desc, bind:bindcompany1desc, reset:resetcompany1desc } = useInput('');
  const { value:company2desc, bind:bindcompany2desc, reset:resetcompany2desc } = useInput('');
  const { value:company3desc, bind:bindcompany3desc, reset:resetcompany3desc } = useInput('');

  const { value:collegetime, bind:bindcollegetime, reset:resetcollegetime } = useInput('');

  const { value:sideproject1desc, bind:bindsideproject1desc, reset:resetsideproject1desc } = useInput('');
  const { value:sideproject2desc, bind:bindsideproject2desc, reset:resetsideproject2desc } = useInput('');
  const { value:sideproject3desc, bind:bindsideproject3desc, reset:resetsideproject3desc } = useInput('');
  const { value:collegedesc, bind:bindcollegedesc, reset:resetcollegedesc } = useInput('');

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
    // Add code here to upload file to server
    // ...
  }

  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetFirstName();
    resetRole();
    resetabout();
    resetcompany1();
    resetcompany2();
    resetcompany3();
    resetsideproject1();
    resetsideproject2();
    resetsideproject3();
    resetcollege();
    resetskills();
    resetlangs();
    resetwebsite();
    resetusername();
    resetcollegetime();

    resetcompany1desc();
    resetcompany2desc();
    resetcompany3desc();
    resetsideproject2desc();
    resetsideproject3desc();
    resetcollegedesc();

  }

  return (
    <div id="upload-box">
      <br/>
                <br/>
                <br/>
      <br/>
                <br/>
       <a href="/" style={{    textDecoration: 'none',
}}><h3><span className="gradient">résumé buildr</ span></h3></a>
                <p>made with ❤️ by <a href="https://twitter.com/tomgrigory" target="_blank">@tomgrigory</a></p>
                
      <br/>
      <br/>
      <h1>fill out this form</h1><h4>and wait for the magic to happen 👀 ✨</h4> 
      <p>if you want to spice up the design a bit or customize stuff more, checkout the figma file</p>

                <a href="https://www.figma.com/community/file/1028526282008491820" target="_blank" style={{margin: '20px'}}>
                    checkout figma file
                </a>

      <br/> 

      
      <form onSubmit={handleSubmit}>
      <br/>
      <br/>

      <label style={{margin: "10px"}}>
        <h5>name:</h5>

        <input
          type="text"
          value={name}
          placeholder="Elon Musk"
          required
          type="text" {...bindName}
        />
      </label>
    
      <label>
        <h5>role:</h5>

        <input
          type="text"
          value={name}
          placeholder="founder @tesla, @spacex"
          required
          {...bindRole}
        />
      </label>
      <br/>
      <br/>
      <label>
        <h5>a brief intro about yourself:</h5>

        <textarea
          type="text"
          value={name}
          placeholder="founder @tesla, @spacex"
          {...bindabout}
        />
      </label>
      <br/>
      <br/>

     <hr/>
     <div class="container">
  <div class="row">
  <h4>previous companies:</h4>

    <div class="col-sm">
        <div className="input">
          <p>company[ 1 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the co."
            required
            {...bindcompany1}
          />

          <p>a brief intro about what you did there</p>
          <textarea
            type="text"
            value={name}
            placeholder="what did you do there 
            and stuff."
            required
            {... bindcompany1desc}
          />
      </div>
    </div>
    <div class="col-sm">
        <div className="input">
          <p>company[ 2 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the co."
            required
            {...bindcompany2}
          />

          <p>a brief intro about what you did there</p>
          <textarea
            type="text"
            value={name}
            placeholder="what did you do there 
            and stuff."
            required
            {...bindcompany2desc}
          />
      </div>
    </div>
    <div class="col-sm">
        <div className="input">
          <p>company[ 3 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the co."
            required
            {...bindcompany3}
          />

          <p>a brief intro about what you did there</p>
          <textarea
            type="text"
            value={name}
            placeholder="what did you do there 
            and stuff."
            required
            {...bindcompany3desc}
          />
      </div>
    </div>
  </div>
</div>
<hr/>
     <div class="container">
  <div class="row">
  <h4>side projects:</h4>

  <div class="col-sm">
        <div className="input">
          <p>side project[ 1 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the project."
            {...bindsideproject1}
            required
          />

          <p>a brief intro about what it is</p>
          <textarea
            type="text"
            value={name}
            placeholder="what was the proj and stuff."
            required
            {...bindsideproject1desc}
          />
      </div>
    </div>
    <div class="col-sm">
        <div className="input">
          <p>side project[ 2 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the co."
            required
            {...bindsideproject2}
          />

          <p>a brief intro about what it is</p>
          <textarea
            type="text"
            value={name}
            placeholder="what was the proj and stuff."
            required
            {...bindsideproject2desc}
          />
      </div>
    </div>
    <div class="col-sm">
        <div className="input">
          <p>side project[ 3 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the co."
            required
            {...bindsideproject3}
          />

          <p>a brief intro about what it is</p>
          <textarea
            type="text"
            value={name}
            placeholder="what was the proj and stuff."
            required
            {...bindsideproject3desc}
          />
      </div>
    </div>
  </div>
</div>
<hr/>
<div class="container">
  <div class="row">
  <h4>education:</h4>

  <div class="col">
        <div className="input">
          <p>education[ 1 ]</p>
          <input
            type="text"
            value={name}
            placeholder="name of the college."
            required
            {...bindcollege}
            style={{margin:'10px'}}
          />
          <input
            type="text"
            value={name}
            placeholder="time period. eg: 2008-2011"
            required
            {...bindcollegetime}
          />
<br/>
          <input
            type="text"
            value={name}
            placeholder="name of the course"
            required
            {...bindcollegedesc}
          />
      </div>
    </div>
    
  </div>
</div>

<hr/>

<label style={{margin: "10px"}}>
        <h5>skills/ tech stack:</h5>

        <textarea 
          type="text"
          value={name}
          placeholder="Nodejs, Javascript, Typescript, React ..."
          required
          {...bindskills}
        />
      </label>

      <label style={{margin: "10px"}}>
        <h5>Languages:</h5>

        <textarea 
          type="text"
          value={name}
          placeholder="English (professionnal)
          French (native)"
          {...bindlangs}
        />
      </label>

      <hr/>
      <label style={{margin: "10px"}}>
        <h5>personal website:</h5>

        <input 
          type="text"
          value={name}
          placeholder="elonmusk.com"
          required
          {...bindwebsite}
        />
      </label>

      <label style={{margin: "10px"}}>
        <h5>socials:</h5>

        <input 
          type="text"
          value={name}
          placeholder="@elonmusk"
          required
          {...bindusername}
        />
      </label>
      

      <br/>
<br/>

      <label>
      <h5>upload your photo:</h5>
      <p>upload 400*400px or ones in 1:1 ratio. <br/> only upload .pngs or .jpegs.</p>
<br/>

      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      </label>
      <br/>
<br/>


      </form>


      <hr/>
      <br/>
      <br/>

      {file && <Download image={file} text={name} role={role}   about={about} company1={company1} company1desc={company1desc} company2 ={company2} company2desc ={company2desc} company3 ={company3} company3desc={company3desc} sideproject1={sideproject1} sideproject1desc={sideproject1desc} sideproject2={sideproject2} sideproject2desc={sideproject2desc} sideproject3={sideproject3} sideproject3desc={sideproject3desc} college={college} collegedesc={collegedesc} collegetime={collegetime} skills={skills} langs={langs} website={website} username={username} />}

    </div>
  );
}


/**
 * Component to display thumbnail of image.
 */

{/*<p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
  {file && <ImageThumb image={file} />}*/}
const ImageThumb = ({ image, text }) => {

  console.log({text})

  return (
    <div>
      <img src={URL.createObjectURL(image)} alt={image.name} />
      <p>here's the name: {text}</p>
    </div>
  );
};


export default function App() {
  return <FileUpload />;
}
