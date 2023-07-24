import { faVolleyball } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Volleyball icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Volleyball = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolleyball} {...props} />;
};

export default Volleyball;
