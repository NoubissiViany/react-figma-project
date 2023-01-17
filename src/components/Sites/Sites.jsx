import './Sites.css';
import PropTypes from 'prop-types';
import Animal from '../../asserts/images/animal.png';
import Volcano from '../../asserts/images/volcano.png';
import Sea from '../../asserts/images/sea.png';
import Buttons from '../Buttons/Buttons';

export default function Sites({ marginTop }) {
  const array = [
    {
      picture: Animal,
      title: 'Akagera National Park',
      description:
        'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
    },
    {
      picture: Volcano,
      title: 'Bisoke Hike',
      description:
        'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
    },
    {
      picture: Sea,
      title: 'Lake Kivu trip',
      description:
        'A trip to Lake Kivu can be a truly unique and memorable experience.',
    },
    {
      picture: Animal,
      title: 'Akagera National Park',
      description:
        'Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.',
    },
    {
      picture: Volcano,
      title: 'Bisoke Hike',
      description:
        'The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park.',
    },
    {
      picture: Sea,
      title: 'Lake Kivu trip',
      description:
        'A trip to Lake Kivu can be a truly unique and memorable experience.',
    },
  ];

  return (
    <div className="sites">
      {array.map((data) => {
        return (
          <div className="sites__content" style={{ marginTop }}>
            <img src={data.picture} alt="images" className="sites__pic" />
            <div className="sites__text">
              <h2>{data.title}</h2>
              <div className="sites__container">
                <p>{data.description}</p>
                <Buttons content="Learn More " />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Sites.propTypes = {
  marginTop: PropTypes.string.isRequired,
};
