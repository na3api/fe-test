import React from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from "./Numbers";

class App  extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            number: '',
            string_number: ''
        }
    }
    render(){
        return (
            <div className="container">
                <div className="row breadcrumbs">
                    <div className="col-1"><i className="fas fa-arrow-left "></i></div>
                    <div className="col-10"><h4>manchesterunited</h4></div>
                    <div className="col-1"><i className="fas fa-ellipsis-v"></i></div>
                </div>
                <div className="row logo">
                    <div className="col-3 ">
                        <div className="gradient-box">
                            <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="..." className=" img-thumbnail rounded-circle"/>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-4 text-center">
                                <h3>8788</h3>
                                <span className="text-muted">posts</span>
                            </div>
                            <div className="col-4 text-center">
                                <h3>23.7m</h3>
                                <span className="text-muted">followers</span>
                            </div>
                            <div className="col-4 text-center">
                                <h3>94</h3>
                                <span className="text-muted">following</span>
                            </div>
                        </div>
                        <div className="row buttons">
                            <div className="col col-8"><button className="btn btn-outline-secondary text-center"><h5>Message</h5></button></div>
                            <div className="col col-2"><button className="btn btn-outline-secondary"><h5><i className="fas fa-user-check"></i></h5></button></div>
                            <div className="col col-2"><button className="btn btn-outline-secondary"><h5><i className="fas fa-angle-down"></i></h5></button></div>
                        </div>
                    </div>
                </div>
                <div className="row description">
                    <div className="col-12">
                        <h4>Manchester United <i className="fas fa-check-circle"></i></h4>
                        <p className="text-muted">Sport Team</p>
                        <p>Follow our <a href="#">#Treble99</a> jorney on <a href="#">#MUTV</a>:</p>
                        <p><a href="#">manutd.co/KOV</a></p>
                        <p><a href="">Old Trafford, Manchester, United Kingdom M16 ORA </a></p>
                        <p className="text-muted"><span> Followed by </span>
                            <a href="#" className="text-dark font-weight-bolder">fellaini</a>,
                            <a href="#" className="text-dark font-weight-bolder"> iamzlatanibragimovich</a>,
                            <a href="#" className="text-dark font-weight-bolder"> paulpogba</a> +
                            <a href="#" className="text-dark font-weight-bolder"> 29 more</a></p>
                    </div>
                </div>
                <div className="row stories">
                    <div className="col-2">
                        <div className="storie main">
                            <a href="#">
                                <span className="overlay"></span>
                                <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="" className="img-thumbnail rounded-circle"/>
                                <span>IGTV</span>
                            </a>
                            <i className="tvicon fas fa-tv"></i>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="divider"></div>
                    </div>
                    <div className="col-9 stories_list">
                        <div className="storie">
                            <a href="#">
                                <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="" className="img-thumbnail rounded-circle"/>
                                <span>MUTV</span>
                            </a>
                        </div>
                        <div className="storie">
                            <a href="#">
                                <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="" className="img-thumbnail rounded-circle"/>
                                <span>#MUWomen</span>
                            </a>
                        </div>
                        <div className="storie">
                            <a href="#">
                                <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="" className="img-thumbnail rounded-circle"/>
                                <span>#BemVindoFriend</span>
                            </a>
                        </div>
                        <div className="storie">
                            <a href="#">
                                <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="" className="img-thumbnail rounded-circle"/>
                                <span>PL 2018 / 2019</span>
                            </a>
                        </div>
                        <div className="storie">
                            <a href="#">
                                <img src="images/220px-Manchester_United_FC_crest.svg.png" alt="" className="img-thumbnail rounded-circle"/>
                                <span>PL 2018 / 2019</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row shops">
                    <div className="col-6 text-center"><a href=""><h4>Shop</h4></a></div>
                    <div className="col-6 text-center"><a href=""><h4>Directions</h4></a></div>
                </div>
                <div className="row view_tabs">
                    <div className="col-12">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item col-4" >
                                <a className="nav-link active text-center" id="images-tab" data-toggle="tab" href="#images" role="tab"
                                   aria-controls="home" aria-selected="true"><i className="fas fa-th"></i></a>
                            </li>
                            <li className="nav-item col-4">
                                <a className="nav-link text-center" id="numbers-tab" data-toggle="tab" href="#numbers" role="tab"
                                   aria-controls="profile" aria-selected="false"><i className="fas fa-bars"></i></a>
                            </li>
                            <li className="nav-item col-4">
                                <a className="nav-link text-center" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                   aria-controls="contact" aria-selected="false"><i className="fas fa-user-alt"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="images" role="tabpanel" aria-labelledby="images-tab">
                        <div className="row images">
                            <div className="col-4"><img src="images/banner-leeds-600x600.jpg" alt="" className="rounded-0 float-left img-fluid"/></div>
                            <div className="col-4"><img src="images/banner-perth-glory-600x600.jpg" alt="" className="rounded-0 float-left img-fluid"/></div>
                            <div className="col-4"><img src="images/home-pre-sale-600x600.jpg" alt="" className="rounded-0 float-left img-fluid"/></div>
                        </div>
                    </div>
                    <div className="tab-pane fade show" id="numbers" role="tabpanel" aria-labelledby="numbers-tab">
                        <Numbers />
                    </div>
                    <div className="tab-pane fade show" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                </div>
            </div>
        );
    };
}

export default App;
