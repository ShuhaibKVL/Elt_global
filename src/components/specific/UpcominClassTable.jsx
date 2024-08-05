import { useState } from 'react';
import PropTypes from 'prop-types';
import externalIcon from '../../assets/images/icons/external-link.png';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmationModal from './ConfirmationModal';
import { updateClassById } from '../../redux/classSlice';
import timer from '../../utils/timer';
import TimerComponent from './TimerComponent';

const ClassTable = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.classes.currentPage)
  const bookedOnly = useSelector((state) => state.classes.bookedOnly)
  const classes = useSelector((state) => state.classes.classes)

  const itemsPerPage = 6
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const filteredClasses = bookedOnly
    ? classes.filter((classItem) => classItem.action !== 'Book now')
    : classes;

  const paginatedClasses = filteredClasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleBookNowClick = (classItem) => {
    setSelectedClass(classItem);
    setShowModal(true);
  };

  const handleUpdateClass = (id, updatedFields) => {
    dispatch(updateClassById({ id, updatedFields }));
  };

  const fixedTime = '2024-08-05 10:00 AM'

  const handleConfirm = () => {
    // Handle the confirmation action here
    const timerToUpdate = timer(selectedClass.time, fixedTime)
    let updateAction = { action: timerToUpdate.hours }
    if (timerToUpdate.days !== 0) {
      updateAction = { action: `${timerToUpdate.days} days` }
    } else {
      updateAction = { action: timerToUpdate.hours }
    }

    const update = handleUpdateClass(selectedClass.id, updateAction)
    setShowModal(false);

  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-md">
        <div className="mb-4">
        </div>
        <table className="w-full table-auto hidden sm:block">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left font-normal">Class name</th>
              <th className="p-2 text-left font-normal">Instructor</th>
              <th className="p-2 text-left font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedClasses.map((classItem) => (
              <tr key={classItem.id} className="border-t">
                <td className="p-2 hover:bg-gray-100">
                  <div className="flex items-center">
                    <span className="mr-2 p-4">{classItem.id}</span>
                    <div>
                      <div className="font-semibold">{classItem.name}</div>
                      {classItem.status && (
                        <div className="text-red-500 flex items-center">
                          <span className="mr-1">•</span> {classItem.status} ({classItem.time})
                        </div>
                      )}
                      {!classItem.status && <div>{classItem.time}</div>}
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <img src={classItem.instructor.image} alt={classItem.instructor.name} className="w-12 h-12 rounded-full mr-2 object-cover" />
                    <div>
                      <div className="font-semibold">{classItem.instructor.name}</div>
                      <div className="text-gray-500">{classItem.instructor.details}</div>
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  {classItem.action === 'Join now' ? (
                    <a href={classItem.actionLink} className="text-white hover:text-gray-500 bg-blue-600 px-3 py-2 w-fit rounded-md flex">
                      {classItem.action}
                      <img className='w-5 h-5' src={externalIcon} alt="Loading" />
                    </a>
                  ) : classItem.action === 'Book now' ? (
                    <button
                      onClick={() => handleBookNowClick(classItem)}
                      className="text-black hover:text-gray-500 bg-white border border-black px-3 py-2 w-fit rounded-md flex"
                    >
                      {classItem.action}
                    </button>
                  ) : classItem.action <= 24 && classItem.action > 0 ? (
                    <TimerComponent hours={classItem.action} />
                  ) : (
                    <div className="text-blue-500">{classItem.action}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ConfirmationModal
          show={showModal}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        />
        <div className='block sm:hidden flex-row h-fit w-[300px] rounded justify-evenly'>
          {paginatedClasses.map((classItem) => (
            <div key={classItem.id} className=' m-3 bg-green-400 rounded-md'>
              <div className='flex justify-between pt-2'>
                <h2>{classItem.name}</h2>
                <p>{classItem.status}</p>
              </div>
              <div className='flex justify-start items-center mt-2'>
                <img src={classItem.instructor.image} alt={classItem.instructor.name} className="w-12 h-12 rounded-full mr-2 object-cover" />
                <p>{classItem.instructor.name}</p>
              </div>
              {classItem.action === 'Join now' ? (
                <a href={classItem.actionLink} className="text-white hover:text-gray-500 bg-blue-600 px-3 py-2 w-full rounded-md flex justify-center items-center mt-3">
                  {classItem.action}
                  <img className='w-5 h-5' src={externalIcon} alt="Loading" />
                </a>
              ) : classItem.action === 'Book now' ? (
                <button
                  onClick={() => handleBookNowClick(classItem)}
                  className="text-black hover:text-gray-500 bg-white border border-black px-3 py-2 w-full rounded-md flex justify-center items-center mt-3"
                >
                  {classItem.action}
                </button>
              ) : classItem.action <= 24 && classItem.action > 0 ? (
                <TimerComponent hours={classItem.action} />
              ) : (
                <div className="text-blue-500 w-full flex justify-center items-center mt-3">{classItem.action}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ClassTable.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string,
      time: PropTypes.string.isRequired,
      instructor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      action: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      actionLink: PropTypes.string,
    })
  ).isRequired,
};

export default ClassTable;
