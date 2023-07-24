import { faHome } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Home icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Home = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHome} {...props} />;
};

export default Home;
