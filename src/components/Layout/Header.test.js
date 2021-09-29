// Local imports
import '../../setupTests';

// Components
import Header from './Header';

it('The Header renders ', () => {
    const wrapper = shallow(<Header />);

    const title = 'The Weather App';

    expect(wrapper.contains(title)).toEqual(true);
});
