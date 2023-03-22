import React from 'react'

function UserLogin() {
    return (
        <section className="contact-form-main">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="form-wrapper">
                            {/*Section Tittle  */}
                            <div className="form-tittle">
                                <div className="row ">
                                    <div className="col-lg-11 col-md-10 col-sm-10">
                                        <div className="section-tittle">
                                            <span><h2 className='text-danger text-center'>Login</h2></span>
                                            <h3 className='text-muted w-100'>Enter your Login Credentials</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Section Tittle  */}
                            <form id="contact-form" action="#" method="POST">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box email-icon mb-30">
                                            <input type="text" name="email" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="select-itms">
                                            <select name="select" id="select2">
                                                <option value="">Boxing</option>
                                                <option value="">saiful islam</option>
                                                <option value="">Arafath Miya</option>
                                                <option value="">Shakil Miya</option>
                                                <option value="">Tamim Sharker</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box subject-icon mb-30">
                                            <input type="Email" name="subject" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-box message-icon mb-65">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="submit-info">
                                            <button className="btn" type="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact left Img*/}
            <div className="from-left d-none d-lg-block">
                <img src="assets/img/gallery/contact_form.png" alt="" />
            </div>
        </section>
    )
}

export default UserLogin
