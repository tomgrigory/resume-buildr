import React, {Component, PropTypes} from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


function Download(props) {

    function printDocument () {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    return (
        <div>
          
            <div>
              
      <div className="mb5">
        <button onClick={printDocument}>Print</button>
      </div>

      <br/>
      <br/>
      <div id="divToPrint" className="mt4" style={{
        backgroundColor: '#F0F0F0',
        color: '#2F2F2F',
        width: '210mm',
        minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '50px',
        paddingRight: '50px'
        }}>
        <div>
        <br/>

        <img className="img" style={{height: "150px",width: "150px", borderRadius: "1000px" }} src={URL.createObjectURL(props.image)} alt={props.image.name} />
        <h3>{props.text}</h3>
        <h5>{props.role}</h5>

        <br/>
        <h4>about me</h4>
        <p>{props.about}</p>
      
        <br/>

        <h4>previous experience</h4>
        <p> <strong>{props.company1}:</strong> {props.company1desc}</p>
        <p> <strong>{props.company2}:</strong>{props.company2desc}</p>
        <p> <strong>{props.company3}:</strong> {props.company3desc}</p>
        <br/>

        <h4>side projects</h4>
        <p> <strong>{props.sideproject1}:</strong>{props.sideproject1desc}</p>
        <p> <strong>{props.sideproject2}:</strong> {props.sideproject2desc}</p>
        <p> <strong>{props.sideproject3}:</strong> {props.sideproject3desc}</p>

        <br/>

        <h4>education </h4>
        <h5>{props.college}</h5>
        <p> {props.collegedesc} <strong>{props.collegetime}</strong> </p>

        <br/>

        <h4>skills/ tech stack </h4>
        <p> {props.skills}</p>

        <h4>Languages </h4>
        <p>{props.langs}</p>

        <br/>

        <a href="#" style={{margin: "10px", textDecoration: "none",}}>{props.website}.</a>
        <a href=""style={{margin: "10px",textDecoration: "none",}}>{props.username}.</a>

  
        
       
    </div>
      </div>

      <br/>
      <br/>

    </div>
        </div>
    )
}

export default Download

