import { faTeethOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TeethOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TeethOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTeethOpen} {...props} />;
};

export default TeethOpen;
