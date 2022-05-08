import React, {Component} from "react";
import jsPDF from "jspdf";


export default class ItemReport extends Component {

    constructor(props){
        super(props)

        this.state={

        }
    }

    jsPdfGenerator = () => {

        // alert('aaa')

        var doc = new jsPDF('p', 'pt');

        doc.text(20,20, 'This is default text')
        doc.setFont('courier');
        doc.setFontType('normal')
        doc.text(20, 30, "this is example 1")

        doc.save("generated.pdf")
    }
  
  render(){
      return(
          <div>
              <button className="btn btn-primary"
              onClick={this.jsPdfGenerator}
              >Generate PDF</button>
          </div>
      )
  }

  }











// import React, {Component, PropTypes} from 'react';
// // import jsPDF from "../../jsPDF-1.3.2"

// // download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// // the built versions are directly consumable
// // import {html2canvas, jsPDF} from 'app/ext';


// export default class Export extends Component {
//   constructor(props) {
//     super(props);
//   }

//   printDocument() {
//     const input = document.getElementById('divToPrint');
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'JPEG', 0, 0);
//         // pdf.output('dataurlnewwindow');
//         pdf.save("download.pdf");
//       })
//     ;
//   }

//   render() {
//     return (<div>
//       <div className="mb5">
//         <button onClick={this.printDocument}>Print</button>
//       </div>
//       <div id="divToPrint" className="mt4" {...css({
//         backgroundColor: '#f5f5f5',
//         width: '210mm',
//         minHeight: '297mm',
//         marginLeft: 'auto',
//         marginRight: 'auto'
//       })}>
//         <div>Note: Here the dimensions of div are same as A4</div> 
//         <div>You Can add any component here</div>
//       </div>
//     </div>);
//   }
// }