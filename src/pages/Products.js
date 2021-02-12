import React from "react";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import "../styles/Products.css";

//images
import aptis from "../resources/product/aptis.jpg";
import biovac from "../resources/product/biovac.jpg";
import bladecassette from "../resources/product/bladecassette.jpg";
import bladeflask from "../resources/product/bladeflask.jpg";
import bladeneedlesystem from "../resources/product/bladeneedlesystem.jpg";
import flagship_surgical_mat from "../resources/product/flagship_surgical_mat.jpg";
import nouvag from "../resources/product/nouvag.jpg";
import palacos from "../resources/product/palacos.jpg";
import qlicksmart from "../resources/product/qlicksmart.jpg"
import snapit from "../resources/product/snapit.jpg"
import {Code} from "react-feather";

const Products = () => {
    return (
        <div className="product-container">
            <Container fluid>
                <Row>
                    <Col>
                        <div class="container">
                            <p className="product-title">Palacos™ Bone Cement</p>
                            <a href="https://www.heraeus.com/en/hme/products_solutions_heraeus_medical/arthrosis/palacos_bone_cements.html"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={palacos} alt="palacos"/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="container">
                            <p className="product-title">Biovac™ Wound Drainage</p>
                            <a href="http://www.biometrixmedical.com/Products/131/Biovac"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={biovac} alt="biovac"/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="container">
                            <p className="product-title">Aptis Medical</p>
                            <a href="https://aptismedical.com/"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={aptis} alt="aptis"/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="container">
                            <p className="product-title">HighSurg30</p>
                            <a href="https://www.nouvag.com/en/medical/surgical-powertools/neurosurgery/motor-system-highsurg-30"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={nouvag} alt="nouvag_highsurg"/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="container">
                            <p className="product-title">The Surgical Mat™</p>
                            <a href="https://www.flagshipsurgical.com/surgical-mat"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={flagship_surgical_mat} alt="flagship_surgical"/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="container">
                            <p className="product-title">BladeFlask</p>
                            <a href="https://www.qlicksmart.com/product/bladeflask-scalpel-blade-remover/"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={bladeflask} alt="bladeflask"/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="container">
                            <p className="product-title">CheckCLIP</p>
                            <a href="https://www.qlicksmart.com/product/checkclip/"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={qlicksmart} alt="checkclip"/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="container">
                            <p className="product-title">BladeCASSETTE</p>
                            <a href="https://www.qlicksmart.com/product/bladecassette-scalpel-blade-remover/"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={bladecassette} alt="bladecassette"/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className="container">
                            <p className="product-title">BladeNeedleSYSTEM</p>
                            <a href="https://www.qlicksmart.com/product/bns-scalpel-blade-remover/"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={bladeneedlesystem} alt="bns"/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="container">
                            <p className="product-title">SnapIT</p>
                            <a href="https://www.qlicksmart.com/product/snapit-lite-ampoule-opener/"
                               target="_blank" rel="noopener noreferrer">
                                <img className="product_img" src={snapit} alt="snapit"/>
                            </a>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            <p id='padding'><br/></p>
        </div>
    )
}

export default Products