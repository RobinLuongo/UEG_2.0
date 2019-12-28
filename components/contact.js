import React, {useState} from 'react';
import axios from 'axios';

import Button from './button-default';
import theme from './theme';

export default function Contact() {
    const [values, setValues] = useState({
        email: "",
        firstName: "",
        lastName: "",
        message: ""
    });

    const [loadStatus, setLoadStatus] = useState("uninit");

    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        setLoadStatus("init");
        axios.post('https://ueg-price-tool.herokuapp.com/contact', values)
            .then(res => {
                if (res.status == 200) {
                    setLoadStatus("done")
                } else {
                    setLoadStatus("error")
                }
            })
            .catch(err => {
                setLoadStatus("error")
            })
    }

    const {email, firstName, lastName, message} = values;

    return (
        <div className="contact">
            <div className="container">
                <h1 className="default-heading">How can we help?</h1>
                <p className="default-text">Our dedicated team is ready to respond. Please reach out with any questions or service inquiries .</p>
                <div>
                    <form target="" className="validate" name="contact-form" onSubmit={handleSubmit} id="contact-form">
                        <div className="inputs-container default-text">
                            <div className="input-wrpr">
                                <label htmlFor="email">Email Address <span className="asterisk">*</span></label>
                                <input value={email} onChange={handleChange} type="email" name="email" className="contact-input input-normal required email" id="email" required/>
                            </div>
                            <div className="input-wrpr">
                                <label htmlFor="first_name">First Name </label>
                                <input value={firstName} onChange={handleChange} type="text" name="firstName" className="contact-input input-normal" id="first_name" required/>
                            </div>
                            <div className="input-wrpr">
                                <label htmlFor="last_name">Last Name </label>
                                <input value={lastName} onChange={handleChange} type="text" name="lastName" className="contact-input input-normal" id="last_name" required/>
                            </div>
                            <div className="input-wrpr">
	                            <label htmlFor="message">Message </label>
                                <textarea value={message} onChange={handleChange} form="contact-form" rows="5" cols="33" name="message" className="contact-input input-normal" id="message"/>
                            </div>
                            <div className="submit-container">
                                {
                                    loadStatus === 'uninit' ? 
                                        <Button onClick={handleSubmit} text="Submit" className="submit-btn"></Button>
                                        :
                                        loadStatus === 'init' ?
                                            <span className="lds-dual-ring"></span>
                                            :
                                            loadStatus === 'done' ?
                                                <span>Thank you! We will reach out within 24 hours.</span>
                                                :
                                                <span>There was an error with the contact submission. Please try again later.</span>
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <span>
                        contact@uniesportsgroup.com
                    </span>
                </div>
            </div>
            <style jsx>{`
                .default-heading {
                    margin-bottom;
                }
                .container > .default-text {
                    margin-bottom: 40px;
                    display: inline-block;
                }
                .inputs-container {
                    display: flex;
                    flex-direction: column;
                }
                .input-wrpr {
                    display: flex;
                    align-self: center;
                    justify-content: space-between;
                    margin-bottom: 30px;
                }
                .contact-input {
                    width: 35vw;
                    height: 35px;
                    padding: 5px 8px;
                    color: grey;
                    font-family: inherit;
                    font-size: inherit;
                    border: none;
                    box-shadow: inset 1px 0px 2px 1px #00000047;
                }
                textarea.contact-input {
                    height: 200px;
                }
                .input-wrpr > label {
                    width: 160px;
                    margin-right: 100px;
                    text-align: left;
                    align-self: center
                }
                .submit-container {
                    align-self: center;
                }
                :global(.submit-container > .button-default) {
                    color: ${theme.colors["med-blue"]};
                }
                .contact-info {
                    width: fit-content;
                    margin: 100px auto 20px auto;
                }
                /* loading spinner */
                .lds-dual-ring {
                    display: inline-block;
                    width: 64px;
                    height: 64px;
                  }
                  .lds-dual-ring:after {
                    content: " ";
                    display: block;
                    width: 46px;
                    height: 46px;
                    margin: 1px;
                    border-radius: 50%;
                    border: 5px solid #066b98;
                    border-color: #066b98 transparent #066b98 transparent;
                    animation: lds-dual-ring 1.2s linear infinite;
                  }
                  @keyframes lds-dual-ring {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
            `}</style>
        </div>
    )
}
