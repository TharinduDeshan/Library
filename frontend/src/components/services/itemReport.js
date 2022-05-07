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