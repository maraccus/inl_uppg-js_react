import React from 'react'

const Faq = () => {
  return (
    <div className="section-faq spacer-t container flex-h flex-sb spacer-b">

        <div className="section-faq-info">
            <h2>Any questions?<br/>Check out the FAQs</h2>
            <p className="p-l">Still have unanswered questions and need to get <br/>in touch?</p>
            <div className="flex-h flex-sb spacer-t2">
                <div className="faq-card">
                    <img src="./images/icn-phone.png" alt="" />
                    <p className="p-s">Still have questions?</p>
                    <button className="btn btn-primary-t btn-align-left">Learn more <i className="fa-solid fa-arrow-right button-icon-r"></i></button>
                </div>
                <div className="faq-card">
                    <img src="./images/icn-message.png" alt="" />
                    <p className="p-s">Don't like phone calls?</p>
                    <button className="btn btn-primary-t-green btn-align-left">Contact us <i className="fa-solid fa-arrow-right button-icon-r"></i></button>
                </div>
            </div>
        </div>

        <div className="section-faq-boxes">
            <div className="faq-box">
                <p>Is any of my personal information stored in the App?</p>
                <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
            </div>
            <div className="faq-box">
                <p>What formats can I download my transaction history in?</p>
                <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
            </div>
            <div className="faq-box-active">
                <div className="faq-header">
                    <p>Can I schedule future transfers?</p>
                    <div className="faq-dropdown"><i className="fa-solid fa-chevron-up"></i></div>
                </div>
                <p className="p-s">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
            <div className="faq-box">
                <p>When can I use Banking App services?</p>
                <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
            </div>
            <div className="faq-box">
                <p>Can I create my own password that is easy for me to remember?</p>
                <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
            </div>
            <div className="faq-box">
                <p>What happens if I forget or lose my password?</p>
                <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Faq