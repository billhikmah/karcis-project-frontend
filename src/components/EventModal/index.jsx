import "./index.css";
import { Modal } from "react-bootstrap";

function index(props) {
  return (
    <Modal show={props.showModal} size="m" centered className="modal modal-lg">
      <Modal.Title className="modal-title event-modal__title">
        {props.title}
      </Modal.Title>
      <Modal.Body className="modal-body">
        <div className="event-modal__container">
          <div className="event-modal__top-input row">
            <div className="event-modal__top-left col-sm-12 col-md-12 col-lg-6">
              <div className="event-modal__input-container">
                <label htmlFor="name" className="event-modal__label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="event-modal__input"
                  placeholder="Input Name Event ..."
                />
              </div>
              <div className="event-modal__input-container">
                <label htmlFor="location" className="event-modal__label">
                  Location
                </label>
                <div
                  action="/action_page.php"
                  htmlFor="location"
                  className="event-modal__input"
                >
                  <select
                    id="location"
                    className="location__search-location-choices"
                    // onChange={locationHandler}
                    // value={showLocation}
                  >
                    <option value="">Select Location</option>
                    <option value="42fb3705-7edb-4b01-95c3-1486360a9348">
                      Jakarta
                    </option>
                    <option value="e584a694-d143-44b1-8e26-66fe7622f960">
                      Bandung
                    </option>
                    <option value="4b6ce6c6-1205-4333-9798-c5ebffa370bc">
                      Bali
                    </option>
                    <option value="0fc4a2fb-266d-4ac6-b8d7-060e2bb2ee7c">
                      Aceh
                    </option>
                    <option value="55dc78af-34b1-4887-8632-901516a700b7">
                      Solo
                    </option>
                    <option value="2a27e1dc-8fbe-4184-a666-cf0bd7bd8243">
                      Yogyakarta
                    </option>
                    <option value="66e897a4-c784-497c-8b1f-bf90098695f1">
                      Semarang
                    </option>
                    <option value="=cb8dfda5-8698-47ef-bd25-01632ea70dc7">
                      Bandar Lampung
                    </option>
                    <option value="31efcdb3-878c-42a6-aafd-5bbeab149cf0">
                      Surabaya
                    </option>
                    <option value="aa677212-f41b-4929-af85-5944457ffb89">
                      Medan
                    </option>
                  </select>
                </div>
              </div>
              <div className="event-modal__input-container">
                <label htmlFor="price" className="event-modal__label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="event-modal__input"
                  placeholder="Input Price ..."
                />
              </div>
            </div>
            <div className="event-modal__top-right col-sm-12 col-md-12 col-lg-6">
              <div className="event-modal__input-container">
                <label htmlFor="category" className="event-modal__label">
                  Category
                </label>
                <div
                  action="/action_page.php"
                  htmlFor="location"
                  className="event-modal__input"
                >
                  <select
                    id="location"
                    className="location__search-location-choices"
                    // onChange={locationHandler}
                    // value={showLocation}
                  >
                    <option value="">Select Category</option>
                    <option value="069beb2a-b358-4524-9243-dc556a968c12">
                      Art
                    </option>
                    <option value="3c57a1a5-c3f3-4bfd-aa6a-62572cc3a727">
                      Music
                    </option>
                    <option value="af2c203f-9960-460c-826e-b6e82b8d6eec">
                      Outdoor
                    </option>
                    <option value="a48b035f-788b-4495-846d-26c0cea83013">
                      Workshop
                    </option>
                    <option value="35a53eb6-5115-4bf3-ba53-543003cc8d45">
                      Sport
                    </option>
                    <option value="b58aa147-3821-4231-9cc5-b7f3cbb39b0e">
                      Festival
                    </option>
                    <option value="babb7801-caf2-4e64-872a-0c42f5ff1972">
                      Fashion
                    </option>
                  </select>
                </div>
              </div>
              <div className="event-modal__input-container">
                <label htmlFor="date" className="event-modal__label">
                  Date Time Show
                </label>
                <input
                  type="datetime-local"
                  id="date"
                  className="event-modal__input"
                />
              </div>
              <div className="event-modal__input-container">
                <div className="event-modal__label">Image</div>
                <label
                  htmlFor="image"
                  className="event-modal__input event-modal__choose-file"
                >
                  Choose File
                </label>
                <input type="file" id="image" />
              </div>
            </div>
          </div>
          <div className="event-modal__bottom-input">
            <label htmlFor="detail" className="event-modal__label">
              Detail
            </label>
            <input
              type="text-area"
              id="detail"
              className="event-modal__input-detail "
              placeholder="Input Detail ..."
            />
          </div>
        </div>
      </Modal.Body>
      <div className="modal-footer event-modal__footer ">
        <button
          className="event-modal__button-active"
          onClick={() => {
            props.navigateHandler(props.bluePath);
          }}
        >
          {props.blueButton}
        </button>
        <button
          className="event-modal__button-pasive"
          onClick={() => {
            props.navigateHandler(props.whitePath);
          }}
        >
          {props.whiteButton}
        </button>
      </div>
    </Modal>
  );
}

export default index;
