import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleRight} {...props} />;
};

export default AngleRight;
