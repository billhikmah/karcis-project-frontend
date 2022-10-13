import { useEffect, useState } from "react";
import moment from "moment";
import Modal from "../../components/Modal";
import EventModal from "../../components/EventModal";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [booking] = useState([
    {
      user_id: {
        id: "f58c5b52-b746-4f63-96ed-f8dc47e64e85",
        name: "Bill",
      },
      event_id: {
        id: "95809473-4a77-494e-8d0f-90cad268cfe7",
        name: "JISPHORIA",
        date_time_show: "2022-10-13T05:00:00+00:00",
        location: {
          id: "42fb3705-7edb-4b01-95c3-1486360a9348",
          name: "Jakarta",
        },
      },
      total_ticket: 8,
      total_payment: 1000000,
      payment_method: "c1e6455e-96e5-4284-8fc4-921273061752",
      payment_status: "success",
      created_at: "2022-09-14T19:17:25.13561+00:00",
      updated_at: "2022-09-14T19:17:25.13561+00:00",
      id: "57255e89-a1b5-46a3-bc2c-748566358668",
      booking_section: [
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:25.699281+00:00",
          updated_at: "2022-09-14T19:17:25.699281+00:00",
          id: "8024458d-11b8-4cea-8533-29cbdf597050",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:25.699281+00:00",
          updated_at: "2022-09-14T19:17:25.699281+00:00",
          id: "8024458d-11b8-4cea-8533-29cbdf597050",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:26.203274+00:00",
          updated_at: "2022-09-14T19:17:26.203274+00:00",
          id: "616c39df-72c4-471e-a554-5c6830b2c792",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "REG1-2",
          status_used: "false",
          created_at: "2022-09-14T19:17:26.224818+00:00",
          updated_at: "2022-09-14T19:17:26.224818+00:00",
          id: "ba851c68-d0e4-4ece-bda3-4650d2bc2b9e",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "VIP1-2",
          status_used: "false",
          created_at: "2022-09-14T19:17:26.384171+00:00",
          updated_at: "2022-09-14T19:17:26.384171+00:00",
          id: "2288d5f7-8d05-44f3-a4a9-60fb7cf9fde9",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "REG1-2",
          status_used: "false",
          created_at: "2022-09-14T19:17:26.398637+00:00",
          updated_at: "2022-09-14T19:17:26.398637+00:00",
          id: "9e27744e-a716-4741-b8b6-09c597b66cd0",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "VIP1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:26.425223+00:00",
          updated_at: "2022-09-14T19:17:26.425223+00:00",
          id: "a6b7fade-c62c-41c3-88a6-ff592caad8ea",
        },
        {
          booking_id: "57255e89-a1b5-46a3-bc2c-748566358668",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:26.672836+00:00",
          updated_at: "2022-09-14T19:17:26.672836+00:00",
          id: "14d0ce7f-e547-44cc-aca1-7ab25da2d5ad",
        },
      ],
    },
    {
      user_id: {
        id: "f58c5b52-b746-4f63-96ed-f8dc47e64e85",
        name: "Bill",
      },
      event_id: {
        id: "95809473-4a77-494e-8d0f-90cad268cfe7",
        name: "JISPHORIA2",
        date_time_show: "2022-10-13T05:00:00+00:00",
        location: {
          id: "42fb3705-7edb-4b01-95c3-1486360a9348",
          name: "Jakarta",
        },
      },
      total_ticket: 7,
      total_payment: 1000000,
      payment_method: "c1e6455e-96e5-4284-8fc4-921273061752",
      payment_status: "success",
      created_at: "2022-09-14T19:17:50.671845+00:00",
      updated_at: "2022-09-14T19:17:50.671845+00:00",
      id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
      booking_section: [
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "VIP1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.23322+00:00",
          updated_at: "2022-09-14T19:17:51.23322+00:00",
          id: "f8293788-72db-4127-a940-c5b8bef26773",
        },
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "REG1-2",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.246236+00:00",
          updated_at: "2022-09-14T19:17:51.246236+00:00",
          id: "ef46f69e-0648-470d-bd40-0dddb65d1051",
        },
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.255528+00:00",
          updated_at: "2022-09-14T19:17:51.255528+00:00",
          id: "01787a6d-5d55-465b-a218-531fd2878e93",
        },
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.267277+00:00",
          updated_at: "2022-09-14T19:17:51.267277+00:00",
          id: "713c0496-6998-4198-bc35-15633d326095",
        },
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "VIP1-2",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.742075+00:00",
          updated_at: "2022-09-14T19:17:51.742075+00:00",
          id: "310e67f5-b203-4c71-a301-ffb3fb3a7df3",
        },
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "REG1-2",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.744844+00:00",
          updated_at: "2022-09-14T19:17:51.744844+00:00",
          id: "d18fb727-b507-4743-bcd9-c217731a08c8",
        },
        {
          booking_id: "be6ef3d1-a8ed-443e-a20b-15d5ed110d7e",
          section: "REG1-1",
          status_used: "false",
          created_at: "2022-09-14T19:17:51.747164+00:00",
          updated_at: "2022-09-14T19:17:51.747164+00:00",
          id: "a9b9455f-f754-42f6-96b9-6cd263fbebf2",
        },
      ],
    },
  ]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {});

  const navigateHandler = (data) => {
    if (data === "close") {
      setShowUpdateModal(false);
      setShowDeleteModal(false);
      setShowCreateModal(false);
      return;
    }
    navigate(`/detail/${data}`);
  };
  const detailHandler = (id) => {
    navigate(`/detail/${id}`);
  };
  const updateHandler = () => {
    setShowUpdateModal(true);
  };
  const deleteHandler = () => {
    setShowDeleteModal(true);
  };
  const createHandler = () => {
    setShowCreateModal(true);
  };

  return (
    <div className="profile_right-side col-sm-6 col-md-8 col-lg-9">
      <div className="manage_right-side__header">
        <div className="manage_right-side__title">Manage Event</div>
        <div className="manage_right-side__create" onClick={createHandler}>
          Create
        </div>
      </div>
      {booking.length === 0 ? (
        <div className="manage__message-container">
          <div className="manage__message">Empty!</div>
          <div className="manage__submessage">
            It appears you haven’t made any events yet.
          </div>
        </div>
      ) : (
        <div className="manage__container row">
          {booking.map((e) => {
            return (
              <div key={e.id} className="manage__item col">
                <div className="manage__date-container">
                  <div className="manage__item-date">
                    {moment(e.date_time_show).format("DD")}
                  </div>
                  <div className="manage__item-day">
                    {moment(e.date_time_show).format("ddd")}
                  </div>
                </div>
                <div className="manage__event-container">
                  <div className="manage__name">{e.event_id.name}</div>
                  <div className="manage__location">
                    {e.event_id.location.name}
                  </div>
                  <div className="manage__date">
                    {moment(e.event_id.date_time_show).format(
                      "ddd, DD MMM h:mm A"
                    )}
                  </div>
                  <div className="manage__button-container">
                    <div
                      className="manage__button"
                      onClick={() => {
                        detailHandler(e.event_id.id);
                      }}
                    >
                      Detail
                    </div>
                    <div
                      className="manage__button"
                      onClick={() => {
                        updateHandler(e.event_id.id);
                      }}
                    >
                      Update
                    </div>
                    <div
                      className="manage__button"
                      onClick={() => {
                        deleteHandler(e.event_id.id);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <EventModal
        showModal={showUpdateModal}
        title="Update"
        navigateHandler={navigateHandler}
        whitePath="close"
        whiteButton="Close"
        bluePath="close"
        blueButton="Update"
      />
      <Modal
        showModal={showDeleteModal}
        title="Delete"
        navigateHandler={navigateHandler}
        whitePath="close"
        whiteButton="Cancel"
        bluePath="close"
        blueButton="Yes"
        message="Are you sure to delete this event?"
      />
      <EventModal
        showModal={showCreateModal}
        title="Create"
        navigateHandler={navigateHandler}
        whitePath="close"
        whiteButton="Close"
        bluePath="close"
        blueButton="Save"
      />
    </div>
  );
}
