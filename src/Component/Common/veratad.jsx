import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { veratad_true } from "../../redux/actions/index";
export default function Veratad() {
    const dispatch = useDispatch();
    const veratad = useSelector((state) => state.veratad);
    const handleAccept = () => {
        dispatch(veratad_true());
    };
    const handleClose = () => {
        window.location.replace("http://www.google.com");
    };

    return (
        <Modal className="veratad-popup" show={!veratad}>
            <Modal.Body>
                <h3>AGE VERIFICATION</h3>
                <img
                    src={
                        "https://www.elementvape.com/pub/media/logo/stores/1/logo_ev_02.png"
                    }
                    className="ev-logo"
                    alt=""
                    srcset=""
                />
                <p>
                    The products available on Element Vape are
                    <strong>
                        age-restricted and intended for adults of legal smoking
                        age only.
                    </strong>
                    All orders placed on the website will be verified by an
                    industry leading Age Verification software for validation.
                </p>

                <p>
                    By entering our website, you affirm that you are of legal
                    smoking age in your jurisdication and you agree to be Age
                    Verified.
                </p>
                <div className="footer mt-3">
                    <button className="secondary" onClick={handleAccept}>
                        YES, I AM OF LEGAL AGE
                    </button>
                    <button className="primary" onClick={handleClose}>
                        NO, I DON'T AGREE
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
